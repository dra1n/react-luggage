class SessionManager {
  static instance

  constructor() {
    if (instance) {
      return instance
    }
  }
}

export default SessionManager
