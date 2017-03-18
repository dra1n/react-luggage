import { Component, PropTypes } from 'react'
import { DropboxBackend } from 'luggage'
import createContext from './createContext'

class Luggage extends Component {
  static propTypes = {
    collection: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    backend: PropTypes.object,
    credentials: PropTypes.object
  }

  static defaultProps = {
    backend: DropboxBackend
  }

  static childContextTypes = {
    luggage: PropTypes.object
  }

  getChildContext() {
    const { collection, backend, credentials } = this.props

    return {
      luggage: createContext(collection, backend, credentials)
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage
