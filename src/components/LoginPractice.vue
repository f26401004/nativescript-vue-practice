<template>
  <page class="page">
    <action-bar title="Login Practice" />
    <stack-layout class="form">
      <stack-layout class="input-field">
        <text-field v-model="user.email" class="input" type="email"  hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></text-field>
      </stack-layout>
      <stack-layout class="input-field">
        <text-field v-model="user.password" class="input" type="password" hint="Password" keyboardType="password"></text-field>
      </stack-layout>
      <button text="LOG IN" class="btn btn-primary" @tap="submit"></button>
      <label v-show="failed" text="The email address or password is wrong."/>
    </stack-layout>
  </page>
</template>
<script>

import firebase from 'nativescript-plugin-firebase';

export default {
  data() {
    return {
      failed: false,
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    validation: function () {
      if (!this.user.email || !this.user.password) {
        alert({
          message: 'Please provide both an email address and password0'
        })
        return
      }
    },
    submit: function () {
      this.validation()
      firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: this.user.email,
          password: this.user.password
        }
      }).then(result => {
          console.log(result)
          console.log('Login success')
          this.$router.push('../home')
      }).catch(error => {
          this.failed = true
          console.log(error.message)
      })
    }
  }
}
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}
.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}
</style>
