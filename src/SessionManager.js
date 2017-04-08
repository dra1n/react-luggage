class SessionManager {
  static instance

  constructor() {
    if (SessionManager.instance) {
      return SessionManager.instance
    } else {
      SessionManager.instance = this
    }
  }
}

export default SessionManager
