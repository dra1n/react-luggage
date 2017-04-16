import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import { DummyBackend } from 'luggage'
import { SessionManager, WithContext } from './testUtils'
import LuggageCollection from '../LuggageCollection'

describe('LuggageCollection', () => {
  const AsyncPropsChecker = props => {
    if (props.ready(props)) {
      props.check(props)
    }

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

  describe('token exists', () => {
    beforeEach(() => {
      SessionManager.token = 'sometoken'
    })

    it('provides a store and a token to children', done => {
      const ready = props => (
        props.token
      )

      const check = props => {
        expect(props.collection).toBeDefined()
        expect(props.token).toEqual('sometoken')
        done()
      }

      renderer.create(
        <Luggage>
          <LuggageCollection
            SessionManager={SessionManager}
            Backend={DummyBackend}
          >
            <AsyncPropsChecker ready={ready} check={check} />
          </LuggageCollection>
        </Luggage>
      )
    })
  })
})
