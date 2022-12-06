<template>
  <nav class="nav d-flex justify-content-between align-items-center">
    <h1>MortyFLIX</h1>
    <div class="d-flex align-items-center">
      <router-link class="nav-item" to="/">Personagens</router-link>
      <router-link class="nav-item" to="/EpisodesView">Episódios</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

h1 {
  color: #42b983;
}

nav {
  padding: 20px 30px;
  background-color: #2c3e50;

  a {
    font-weight: medium;
    color: #a7acb1;
    font-size: 1.2rem;
    margin: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
