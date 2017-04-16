import React, { Component } from 'react'
import LuggageCollection from './LuggageCollection'

export default function withCollection(Komponent) {
  class WithCollection extends Component {
    render() {
      return (
        <LuggageCollection>
          <Komponent {...this.props} />
        </LuggageCollection>
      )
    }
  }

  return WithCollection
}
