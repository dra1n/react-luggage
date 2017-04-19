import { Component } from 'react'
import PropTypes from 'prop-types'

class Luggage extends Component {
  static propTypes = {
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
    const { credentials } = this.props

    return {
      luggage: { credentials }
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage

