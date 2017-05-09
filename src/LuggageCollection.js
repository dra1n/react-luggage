import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Luggage, { DropboxBackend } from 'luggage'
import SessionManager from 'luggage-session'

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
      apiKey: PropTypes.object,
      redirectUrl: PropTypes.string
    })
  }

  constructor(props, context) {
    super(props, context)

    const { SessionManager, Backend, name } = props
    const { luggage } = context
    const { apiKey, redirectUrl } = luggage

    const sessionManager = new SessionManager({apiKey, redirectUrl})
    const token = sessionManager.getToken()

    const store = new Luggage(new Backend(token))
    const collection = store.collection(name)

    this.state = {
      collection,
      token,
      [name]: []
    }

    collection.on('data', data => {
      this.setState({
        [name]: data
      })
    })
  }

  componentDidMount() {
    this.state.collection.read()
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props, ...this.state})
  }
}

export default LuggageCollection
