import React, { PropTypes } from 'react'
import renderer from 'react-test-renderer'
import { DummyBackend } from 'luggage'
import { SessionManager, WithContext } from './testUtils'
import LuggageCollection from '../LuggageCollection'

describe('LuggageCollection', () => {
  let propsChecker

  const PropsChecker = props => {
    propsChecker = props
    return null
  }

  const Luggage = WithContext({
    luggage: {
      credentials: { API_KEY: 'someapikey' },
      collectionName: 'todos'
    }
  }, {
    luggage: PropTypes.shape({
      credentials: PropTypes.object,
      collectionName: PropTypes.string
    })
  })

  afterEach(() => {
    propsChecker = null
  })

  describe('token exists', () => {
    beforeEach(() => {
      SessionManager.token = 'sometoken'
    })

    it('provides a store and a token to children', () => {
      renderer.create(
        <Luggage>
          <LuggageCollection
            SessionManager={SessionManager}
            Backend={DummyBackend}
          >
            <PropsChecker />
          </LuggageCollection>
        </Luggage>
      )

      expect(propsChecker.collection).toBeDefined()
      expect(propsChecker.token).toEqual('sometoken')
    })
  })
})
