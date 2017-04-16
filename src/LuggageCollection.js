import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Luggage, { DropboxBackend } from 'luggage'
import SessionManager from './SessionManager'

class LuggageCollection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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
      redirectUrl: PropTypes.string,
      collectionName: PropTypes.string
    })
  }

  componentDidMount() {
    const { SessionManager, Backend } = this.props
    const { luggage } = this.context
    const { credentials, collectionName, redirectUrl } = luggage

    const sessionManager = new SessionManager(credentials, redirectUrl)
    const token = sessionManager.getToken()

    if (token) {
      let store = new Luggage(new Backend(token))
      let collection = store.collection(collectionName)

      collection
        .read()
        .then(c => {
          this.setState({
            collection,
            token,
            [collectionName]: c
          })
        })
    }
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props, ...this.state})
  }
}

export default LuggageCollection
