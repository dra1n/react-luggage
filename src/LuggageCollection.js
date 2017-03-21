import React, { Component, PropTypes } from 'react'
import Luggage, { DropboxBackend } from 'luggage'
import SessionManager from './SessionManager'

class LuggageCollection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sessionManager: PropTypes.object
  }

  static defaultProps = {
    sessionManager: new SessionManager(this.context.credentials)
  }

  static contextTypes = {
    luggage: PropTypes.shape({
      credentials: PropTypes.object,
      backend: PropTypes.object
    })
  }

  componentDidMount() {
    const { sessionManager } = this.context
    const token = sessionManager.getToken()

    if (token) {
      let coll
    }
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props, ...this.state})
  }
}

export default LuggageCollection

