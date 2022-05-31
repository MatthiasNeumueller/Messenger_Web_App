export default {
  ADD_USER (state, user) {
    state.users.push(user)
  },
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  },
  SET_MESSAGES (state, messages) {
    state.messages = messages
  },
  SET_USER1 (state, user1) {
    state.user1 = user1
  },
  SET_USER2 (state, user2) {
    state.user2 = user2
  }
}
