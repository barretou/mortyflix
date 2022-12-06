<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="my-3">Personagens</h1>
      </div>
    </div>
  </div>
</template>

<script>
import GetCharacters from '@/api/index';

export default {
  data() {
    return {
      characters: [],
    };
  },
  async mounted() {
    this.characters = await GetCharacters();
    console.log(this.characters);
  },
};
</script>
