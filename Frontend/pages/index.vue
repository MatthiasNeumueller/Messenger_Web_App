<template>
  <div class="container">
    <div class="row">
      <div v-if="!user1Exist" class="col">
        <label for="inputUser1">User1:</label>
        <input
          id="inputUser1"
          v-model="newUser1.name"
          type="text"
          name="User1"
          class="form-control input"
        >
        <button @click="addUser1()">
          <span class="text-uppercase">Add User1</span>
        </button>
      </div>
      <div v-if="!user2Exist" class="col">
        <label for="inputUser2">User2:</label>
        <input
          id="inputUser2"
          v-model="newUser2.name"
          type="text"
          name="User2"
          class="form-control input"
        >
        <button @click="addUser2()">
          <span class="text-uppercase">Add User2</span>
        </button>
      </div>
    </div>
    <div v-if="user1Exist | user2Exist" class="row">
      <div class="col">
        <div class="row">
          <label for="selectUser">Select User</label>
          <select v-model="newMessage.author">
            <option v-for="user in userSelectOptions" :key="user.id" :value="user.value">
              {{ user.text }}
            </option>
          </select>
        </div>
        <!-- Message for User1-->
        <div class="row message">
          <div v-for="message in messages" :key="message.id" class="row">
            <span class="font-weight-bold">{{ message.author }}:</span> {{ message.text }}
          </div>
        </div>
        <div class="row message-input">
          <label for="inputMessage" />
          <input
            id="inputMessage"
            v-model="newMessage.text"
            type="text"
            name="Message"
            class="form-control input"
          >
        </div>
        <div class="row">
          <button @click="testSendMesage()">
            <span class="text-uppercase">Send Message</span>
          </button>
        </div>

        <!-- Message for User2-->
        <div class="row message">
          <div v-for="message in messages" :key="message.id" class="row">
            <span class="font-weight-bold">{{ message.author }}:</span> {{ message.text }}
          </div>
        </div>
        <div class="row message-input">
          <label for="inputMessage" />
          <input
            id="inputMessage"
            v-model="newMessage.text"
            type="text"
            name="Message"
            class="form-control input"
          >
        </div>
        <div class="row">
          <button @click="testSendMesage()">
            <span class="text-uppercase">Send Message</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      newMessage: {
        author: '',
        text: ''
      },
      newUser1: {
        name: ''
      },
      newUser2: {
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'users',
      'user1',
      'user2',
      'messages'
    ]),
    userExist () {
      return this.users.length !== 0
    },
    user1Exist () {
      return Object.keys(this.user1).length !== 0
    },
    user2Exist () {
      return Object.keys(this.user2).length !== 0
    },
    userSelectOptions () {
      const userSelectOptions = [{ text: 'Please Select a User', value: '' }]

      for (const user of this.$store.state.users) {
        userSelectOptions.push({ text: user.name, value: user.name })
      }

      return userSelectOptions
    }
  },
  methods: {
    async sendMesage () {
      const options = {
        method: 'POST',
        url: '/message',
        params: this.newMessage
      }

      await this.$axios.request(options).then((response) => {
        // Code 200 => message sent
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    addUser1 () {
      this.$store.dispatch('setUser1', this.newUser1)
    },
    addUser2 () {
      this.$store.dispatch('setUser2', this.newUser2)
    },
    sendMesageUser1 () {
      this.$store.dispatch('addMessage', Object.assign({}, this.newMessage))
      // this.$store.dispatch('addMessage', this.newMessage)
    },
    sendMesageUser2 () {
      this.$store.dispatch('addMessage', Object.assign({}, this.newMessage))
      // this.$store.dispatch('addMessage', this.newMessage)
    }
  }
}
</script>

<style scoped>
  .row {
    display: block;
  }
</style>
