/* eslint no-undefined: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import Luggage from '../Luggage'

describe('Luggage', () => {
  describe('context', () => {
    let rootContext

    const ContextChecker = (props, context) => {
      rootContext = context
      return null
    }

    ContextChecker.contextTypes = {
      luggage: PropTypes.shape({
        collectionName: PropTypes.string
      })
    }

    afterEach(() => {
      rootContext = undefined
    })

    it('creates context', () => {
      const apiKey = 'someapikey'

      renderer.create(
        <Luggage apiKey={apiKey}>
          <ContextChecker />
        </Luggage>
      )

      expect(rootContext.luggage.apiKey).toEqual(apiKey)
    })
  })
})
