<template>
  <Page class="page">
    <ActionBar class="action-bar" title="ListView Practice"/>
    <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
        <!-- Shows the list item label in the default color and style. -->
        <Label v-bind:text="item.text" />
        </v-template>
        <!-- For items with an odd index, shows the label in red. -->
        <v-template if="$odd">
        <Label v-bind:text="item.text" color="red" />
        </v-template>
    </ListView>
  </Page>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'title1',
          text: 'first'
        }, 
        {
          title: 'title2',
          text: 'second'
        }, 
        {
          title: 'title3',
          text: 'third'
        }, 
        {
          title: 'title4',
          text: 'forth'
        }, 
        {
          title: 'title5',
          text: 'fifth'
        }
      ]
    }
  },
  methods: {
    onItemTap: function (event) {
      console.log('list view item tap!!')
      console.log(`tap the index: ${event.index}`)
      console.log(`tap the index: ${event.item.title}`)
      console.log(`tap the index: ${event.item.text}`)
    }
  }
}
</script>

<style>

</style>
