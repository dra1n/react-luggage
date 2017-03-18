import { Component, PropTypes } from 'react'
import createContext from './createContext'

class Luggage extends Component {
  static propTypes = {
    collection: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  }

  static childContextTypes = {
    luggage: PropTypes.object
  }

  getChildContext() {
    return {
      luggage: createContext(this.props.collection)
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage
