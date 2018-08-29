<template>
  <page class="page">
    <action-bar title="Login Practice" />
    <stack-layout class="form">
      <stack-layout class="input-field">
        <text-field v-model="user.email" class="input"  hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></text-field>
      </stack-layout>
      <stack-layout class="input-field">
        <text-field v-model="user.password" class="input" secure="true" hint="Password" keyboardType="password"></text-field>
      </stack-layout>
      <stack-layout v-show="!isLogin" class="input-field">
        <text-field v-model="user.confirmPassword" class="input" secure="true" hint="Confirm password" keyboardType="password"></text-field>
      </stack-layout>
      <button v-bind:text="isLogin ? 'LOG IN' : 'SIGN UP'" class="btn btn-primary" @tap="submit"></button>
      <label v-show="failed" text="The email address or password is wrong."/>
      <flexbox-layout justifyContent="center">
        <label :text="isLogin ? 'Do not have and account?' : ''"></label>
        <label :text="isLogin ? '  Sign up' : 'Back to Login'" class="bold" @tap="toggleForm"></label>
      </flexbox-layout>
    </stack-layout>
  </page>
</template>
<script>

import firebase from 'nativescript-plugin-firebase'
import dialogs from 'tns-core-modules/ui/dialogs'

export default {
  data() {
    return {
      isLogin: true,
      failed: false,
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    }
  },
  methods: {
    validation: function () {
      if (!this.user.email || !this.user.password) {
        alert({
          message: 'Please provide both an email address and password.'
        })
        return
      }
    },
    toggleForm: function () {
      this.isLogin = !this.isLogin
    },
    submit: function () {
      if (this.isLogin) {
        this.login()
      } else {
        this.registry()
      }
    },
    login: function () {
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
    }, 
    registry: function () {
      firebase.createUser({
        email: this.user.email,
        password: this.user.password
      }).then(
        user => {
          alert({
            title: 'User created',
            message: `email: ${user.email}`,
            okButtonText: 'OK'
          })
        },
        errorMessage => {
          alert({
            title: "User create failed",
            message: errorMessage,
            okButtonText: 'OK'
          })
        }
      )
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
.bold {
  font-weight: bold;
}
</style>
