import React, { Component } from 'react'
import LuggageCollection from './LuggageCollection'

const withCollection = collectionName => Komponent => {
  class WithCollection extends Component {
    render() {
      return (
        <LuggageCollection name={collectionName}>
          <Komponent {...this.props} />
        </LuggageCollection>
      )
    }
  }

  return WithCollection
}

export default withCollection
