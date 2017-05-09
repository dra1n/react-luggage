import { Component } from 'react'
import PropTypes from 'prop-types'

class Luggage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    credentials: PropTypes.object,
    redirectUrl: PropTypes.string
  }

  static childContextTypes = {
    luggage: PropTypes.object
  }

  getChildContext() {
    const { credentials, redirectUrl } = this.props

    return {
      luggage: { credentials, redirectUrl }
    }
  }

  render() {
    return this.props.children
  }
}

export default Luggage

