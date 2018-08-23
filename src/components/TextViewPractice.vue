<template>
  <Page class="page">
    <ActionBar class="action-bar" title="TextView Practice" />
    <TextView editable="false">
      <FormattedString>
        <Span text="You can use text attributes such as " />
        <Span text="bold, " fontWeight="Bold" />
        <Span text="italic " fontStyle="Italic" />
        <Span text="and " />
        <Span text="underline." textDecoration="Underline" />
      </FormattedString>
    </TextView>
  </Page>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
