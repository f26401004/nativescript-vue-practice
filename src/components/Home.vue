<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Practice"/>

    <StackLayout>
      <Button @tap="$router.push('/dialog')"> Dialog </Button>
      <Button @tap="$router.push('/actionbar')"> ActionBar </Button>
      <Button @tap="$router.push('/components')"> Components </Button>
    </StackLayout>

  </Page>
</template>

<script>

export default {
}
</script>

<style>

</style>
