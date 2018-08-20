<template>
  <Page class="page">
      <!-- flat can remove border -->
      <!-- android.icon can set icon at action bar -->
      <!-- android.iconVisibility can set icon alway visible. -->
    <ActionBar android.icon="res://icon" android.iconVisibility="always" flat="true" >
      <StackLayout>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
        <Label text="test" fontsize="24" verticalAlignment="center"/>
      </StackLayout>
      <!-- ActionItem can set the command icon in action bar -->
      <!-- android.position can set the command position on action bar or popup when tap the setting icon -->
      <ActionItem @tap="onTapShare"
        ios.systemIcon="9" ios.position="left"
        android.systemIcon="ic_menu_share" android.position="actionBar" />
      <ActionItem @tap="onTapDelete"
        ios.systemIcon="16" ios.position="right"
        text="delete" android.position="popup" />
      <ActionItem @tap="onTapTest"
        ios.systemIcon="16" ios.position="right"
        text="test" android.position="popup" />
      <!-- Use NavigationButton to have a button at upper left corner -->
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>
    <StackLayout>
      <Label text="Action Bar Practice!!"/>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    onTapShare: () => {
      console.log('onTapShare tap!!')
    },
    onTapDelete: () => {
      console.log('onTapDelete tap!!')
    },
    onTapTest: () => {
      console.log('onTapTest tap!!')
    }
  }
}
</script>

<style>

</style>
