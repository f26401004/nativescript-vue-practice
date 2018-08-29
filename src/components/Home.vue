<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Practice"/>

    <StackLayout>
      <Button @tap="$router.push('/dialog')"> Dialog </Button>
      <Button @tap="$router.push('/actionbar')"> ActionBar </Button>
      <Button @tap="$router.push('/components')"> Components </Button>
      <Button @tap="$router.push('/listview')"> ListView </Button>
      <Button @tap="$router.push('/tabview')"> TabView </Button>
      <Button @tap="$router.push('/textview')"> TextView </Button>
      <Button @tap="$router.push('/style')"> Style </Button>
      <Button @tap="$router.push('/login')"> Login </Button>
    </StackLayout>

  </Page>
</template>

<script>

export default {
}
</script>

<style>

</style>
