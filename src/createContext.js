export default function createContext(collectionName, dropboxBackend, credentials) {
  return {
    collectionName: collectionName,
    backend: dropboxBackend,
    credentials: credentials,
    collection: null
  }
}
