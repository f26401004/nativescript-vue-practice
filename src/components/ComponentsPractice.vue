<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Components Practice"/>
    <ScrollView orientation="vertical">
      <StackLayout>
        <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
        <Button text="Button" @tap="onButtonTap" />
        <Button text="Button2" textWrap="false" @tap="onButtonTap" />
        <DatePicker v-model="selectedDate" @loaded="onDatePickerLoaded" @dateChange="onDateChanged" day="6" month="11" year="96" />
        <HtmlView html="<div><h1>HtmlView</h1></div>" />
        <Image src="https://i.imgur.com/jBbm8kZ.png" stretch="aspectFit" />
        <Label text="Label" />
        <Label textWrap="true">
          <FormattedString>
            <Span text="This text has a " />
            <Span text="red " style="color: red" />
            <Span text="piece of text. " />
            <Span text="Also, this bit is italic, " fontStyle="italic" />
            <Span text="and this bit is bold." fontWeight="bold" />
          </FormattedString>
        </Label>
      </StackLayout>
    </ScrollView>
    
  </Page>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: new Date()
    }
    
  },
  methods: {
    onBusyChanged: function () {
      console.log('test')
    },
    onButtonTap: function () {
      console.log('button tap!!')
      console.log(this.selectedDate)
    },
    onDatePickerLoaded: function () {
      console.log('date picker loaded')
    },
    onDateChanged: function () {
      console.log("date picker's date value change!!")
    }
  }
}
</script>

<style>

</style>
