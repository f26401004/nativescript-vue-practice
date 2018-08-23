<template>
  <Page class="page">
    <ActionBar class="action-bar" title="TabView Practice" />
    <TabView v-bind:selectedIndex="selectedIndex" @tabChange="onTabChange" iosIconRenderingMode="alwaysOriginal">
      <TabViewItem title="Tab 1" iconSource="~/images/NativeScript-Vue.png">
        <StackLayout>
          <Label text="first"/>
          <TextField v-model="textFieldValue" hint="Enter Text Here..." editable="true" 
            maxLength="10" keyboardType="email" autocorrect="true"/>
          <TextField v-model="textFieldValue2" hint="Enter Text Here..." editable="true" 
            maxLength="10" secure="true"/>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Tab 2" iconSource="~/images/NativeScript-Vue.png">
        <Label text="second"/>
      </TabViewItem>
      <TabViewItem title="Tab 3" iconSource="~/images/NativeScript-Vue.png">
        <Label text="third"/>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 1,
      textFieldValue: '請輸入文字',
      textFieldValue2: '請輸入文字'
    }
  },
  methods: {
    onTabChange: function () {
      console.log('tab change!!')
    }
  }
}
</script>

<style scoped>

</style>
