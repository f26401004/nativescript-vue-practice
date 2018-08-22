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
        <ListPicker v-bind:items="items" v-model="selectedItem" selectedIndex="0" @selectedIndexChange="onSelectedIndexChange"></ListPicker>
      
        <Progress v-bind:value="currentProgress" v-bind:maxValu="100" @valueChange="onValueChange"/>
        <!-- Assign css color value to textFieldHintColor -->
        <SearchBar v-model="searchQuery" hint="Search hint" textFieldHintColor="rgba(255, 0, 0, 0.5)" @textChange="onTextChanged" @submit="onSubmit" />
        <SegmentedBar v-model="selectedTab" @selectedIndexChange="onSelectedTabIndexChange">
          <SegmentedBarItem title="First" />
          <SegmentedBarItem title="Second" />
          <SegmentedBarItem title="Third" />
        </SegmentedBar>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: new Date(),
      items: ['first', 'second', 'third', 'forth', 'fifth'],
      selectedItem: '',
      currentProgress: 66,
      searchQuery: '請輸入關鍵字',
      selectedTab: null
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
    },
    onSelectedIndexChange: function () {
      console.log('select list change!!')
      console.log(`the selected index is ${this.selectedItem}`)
    },
    onItemTap: function (event) {
      console.log('list view item tap!!')
      console.log(`tap the index: ${event.index}`)
      console.log(`tap the index: ${event.item.title}`)
      console.log(`tap the index: ${event.item.text}`)
    },
    onValueChange: function () {
      console.log('progress value change!!')
    },
    onTextChanged: function () {
      console.log('search bar text change!!')
    },
    onSubmit: function () {
      console.log('search bar submit!!')
      console.log(this.searchQuery)
    },
    onSelectedTabIndexChange: function () {
      console.log('segment bar change!!')
      console.log(`the selected tab index is ${this.selectedTab}`)
    }
  }
}
</script>

<style>

</style>
