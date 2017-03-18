import Luggage, { DummyBackend } from 'luggage'

export const backend = new DummyBackend('todos', [])
export const store = new Luggage(backend)
export const todos = store.collection('todos')
