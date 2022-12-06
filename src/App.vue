<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
    NavigationBar: () => import('@/components/NavigationBar.vue'),
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
