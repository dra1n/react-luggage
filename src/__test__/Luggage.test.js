import React from 'react'
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
      luggage: React.PropTypes.shape({
        collectionName: React.PropTypes.string
      })
    }

    afterEach(() => {
      rootContext = undefined
    })

    it('creates context', () => {
      renderer.create(
        <Luggage collection='todos'>
          <div>
            <ContextChecker />
          </div>
        </Luggage>
      )

      expect(rootContext.luggage.collectionName).toEqual('todos')
    })
  })
})
