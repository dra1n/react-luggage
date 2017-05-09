import Luggage, { DummyBackend } from 'luggage'
import PropTypes from 'prop-types'
import { Component } from 'react'

export const backend = new DummyBackend('todos', [])
export const store = new Luggage(backend)
export const todos = store.collection('todos')

export class SessionManager {
  static token = null

  getToken() {
    return SessionManager.token
  }
}

export const WithContext = (context, contextTypes) => {
  class WrappedWithContext extends Component {
    static childContextTypes = contextTypes
    static propTypes = {
      children: PropTypes.node
    }

    getChildContext() {
      return context
    }

    render() {
      return this.props.children
    }
  }

  return WrappedWithContext
}
