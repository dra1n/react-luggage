import Luggage, { DummyBackend } from 'luggage'
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

    getChildContext() {
      return context
    }

    render() {
      return this.props.children
    }
  }

  return WrappedWithContext
}
