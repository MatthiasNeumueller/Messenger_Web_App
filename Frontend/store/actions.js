export default {
  addUser ({ commit }, user) {
    commit('ADD_USER', user)
  },
  addMessage ({ commit }, message) {
    commit('ADD_MESSAGE', message)
  },
  setUser1 ({ commit }, user1) {
    commit('SET_USER1', user1)
  },
  setUser2 ({ commit }, user2) {
    commit('SET_USER2', user2)
  }
}
