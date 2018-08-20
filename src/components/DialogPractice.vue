<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Dialog Practice"/>

    <StackLayout>
      <Button @tap="alertTest"> Alert Button</Button>
      <Button @tap="promptTest"> Prompt Button</Button>
      <Button @tap="promptTestInputType"> Prompt Button Input Type</Button>
      <Button @tap="confirmTest"> Confirm Button </Button>
      <Button @tap="loginTest"> Login Button </Button>
      <Button @tap="actionTest"> Action Button </Button>
    </StackLayout>

  </Page>
</template>

<script>
const dialogs = require('tns-core-modules/ui/dialogs')

export default {
  methods: {
    alertTest: () => {
      alert({
        title: 'alert test',
        message: 'context here',
        okButtonText: 'OK'
      })
    },
    promptTest: () => {
      prompt({
        title: 'prompt test',
        message: 'context here',
        okButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        defaultText: 'Placeholder here'
      }).then(result => {
        console.log(`User input result: ${result.result}, text: ${result.text}`)
      })
    },
    promptTestInputType: () => {
      prompt({
        title: 'prompt inputtype test',
        message: 'context here',
        okButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        defaultText: 'Placeholder here',
        inputType: dialogs.inputType.password
      }).then(result => {
        console.log(`User input result: ${result.result}, text: ${result.text}`)
      })
    },
    confirmTest: () => {
      confirm({
        title: 'confirm test',
        message: 'context here',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then(result => {
        console.log(result)
      })
    },
    loginTest: () => {
      login({
        title: 'login test',
        message: 'context here',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel',
        username: 'Username field value',
        password: 'Password field value'
      }).then(result => {
        console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
      })
    },
    actionTest: () => {
      action({
        title: 'choose test',
        message: 'context here',
        cancelButtonText: 'Cancel',
        actions: ['Option1', 'Option2']
      }).then(result => {
        console.log(result);
      })
    }
  }
}
</script>

<style>

</style>
