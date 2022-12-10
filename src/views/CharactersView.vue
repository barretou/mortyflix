<template>
  <section class="container">
    <div class="row">
      <h1 class="my-3">Personagens</h1>
      <div class="col-12 d-flex justify-content-between flex-wrap">
        <div
          v-for="item in characters.results"
          :key="item.id"
          class="card m-2"
          style="width: 18rem"
        >
          <img :src="item.image" class="card-img-top" :alt="item.description" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              <span>Status:</span>
              {{ item.status }}
            </p>
            <p class="card-text">
              <span>Specie:</span>
              {{ item.species }}
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info m-1 d-block" @click="DecrementCurrentPage()">Previous</button>
        <button class="btn btn-info m-1 d-block" @click="IncrementCurrentPage()">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
import GetCharacters from '@/api/index';

export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
    };
  },
  async mounted() {
    this.characters = await GetCharacters(this.currentPage);
  },
  methods: {
    async IncrementCurrentPage() {
      this.currentPage += 1;
      this.characters = await GetCharacters(this.currentPage);
    },
    async DecrementCurrentPage() {
      if (this.currentPage >= 2) {
        this.currentPage -= 1;
        this.characters = await GetCharacters(this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
h5,
h1,
span {
  color: #2c3e50;
}
</style>
