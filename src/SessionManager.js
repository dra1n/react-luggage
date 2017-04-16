import Dropbox from 'dropbox'
import { parseQueryString } from './utils'

const TOKEN_KEY = 'luggageToken'

class SessionManager {
  static instance

  constructor(credentials, redirectUrl = '/') {
    if (SessionManager.instance) {
      return SessionManager.instance
    }

    this.credentials = credentials
    this.redirectUrl = redirectUrl

    SessionManager.instance = this
  }

  getToken() {
    return this.token
      || this.getTokenFromStorage()
      || this.getTokenFromUrl()
      || this.redirect()
  }

  setToken(token) {
    this.token = token
    global.sessionStorage.setItem(TOKEN_KEY, token)
  }

  getTokenFromStorage() {
    return global.sessionStorage.getItem(TOKEN_KEY)
  }

  getTokenFromUrl() {
    const token = parseQueryString(global.location.hash).access_token

    if (token) {
      this.setToken(token)
      this.removeHash()
    }

    return token
  }

  removeHash() {
    global.history.pushState('', global.document.title, global.location.pathname
      + global.location.search)
  }

  redirect() {
    const dbx = new Dropbox({ clientId: this.credentials.APP_KEY })
    const authUrl = dbx.getAuthenticationUrl(this.authUrl)

    global.location = authUrl
  }

  get authUrl() {
    const { hostname, port, protocol } = global.location

    return protocol + '//' +
      hostname +
      (port ? ':' + port : '') +
      this.redirectUrl
  }
}

export default SessionManager
