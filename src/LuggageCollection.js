import React, { Component, PropTypes } from 'react'
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
      collectionName: PropTypes.string
    })
  }

  componentDidMount() {
    const { SessionManager, Backend } = this.props
    const { luggage } = this.context

    const sessionManager = new SessionManager(luggage.credentials)
    const token = sessionManager.getToken()

    if (token) {
      let store = new Luggage(new Backend(token))
      let collection = store.collection(luggage.collectionName)

      this.setState({
        collection,
        token
      })
    }
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props, ...this.state})
  }
}

export default LuggageCollection
