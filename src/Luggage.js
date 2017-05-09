import { Component } from 'react'
import PropTypes from 'prop-types'

class Luggage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    apiKey: PropTypes.string.isRequired,
    redirectUrl: PropTypes.string
  }

  static childContextTypes = {
    luggage: PropTypes.object
  }

  getChildContext() {
    const { apiKey, redirectUrl } = this.props

    return {
      luggage: { apiKey, redirectUrl }
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage

