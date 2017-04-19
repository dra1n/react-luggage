import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Luggage, { DropboxBackend } from 'luggage'
import SessionManager from './SessionManager'

class LuggageCollection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    SessionManager: PropTypes.func,
    Backend: PropTypes.func
  }

  static defaultProps = {
    SessionManager: SessionManager,
    Backend: DropboxBackend
  }

  static contextTypes = {
    luggage: PropTypes.shape({
      credentials: PropTypes.object,
      redirectUrl: PropTypes.string
    })
  }

  componentDidMount() {
    const { SessionManager, Backend, name } = this.props
    const { luggage } = this.context
    const { credentials, redirectUrl } = luggage

    const sessionManager = new SessionManager(credentials, redirectUrl)
    const token = sessionManager.getToken()

    if (token) {
      let store = new Luggage(new Backend(token))
      let collection = store.collection(name)

      collection
        .read()
        .then(c => {
          this.setState({
            collection,
            token,
            [name]: c
          })
        })
    }
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props, ...this.state})
  }
}

export default LuggageCollection
