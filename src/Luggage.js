import { Component } from 'react'
import PropTypes from 'prop-types'
import createContext from './createContext'

class Luggage extends Component {
  static propTypes = {
    collection: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    credentials: PropTypes.object
  }

  static childContextTypes = {
    luggage: PropTypes.object
  }

  getChildContext() {
    const { collection, credentials } = this.props

    return {
      luggage: createContext(collection, credentials)
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage

