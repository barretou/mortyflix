<template>
  <section class="container">
    <div class="row">
      <h1 class="my-3">Episodes</h1>
      <div class="col-12 d-flex flex-wrap justify-content-between">
        <div v-for="item in episodes.results" :key="item.id" class="card m-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Episódio: {{ item.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted my-1">{{ item.episode }}</h6>
            <h6 class="card-subtitle mb-2 text-muted my-1">{{ item.air_date }}</h6>
            <a :href="item.url" class="card-link">Watch now!</a>
          </div>
        </div>
      </div>
    </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <button
            class="btn btn-info m-1 d-block"
            @click="DecrementCurrentPage()"
          >
            Previous
          </button>
          <button
            class="btn btn-info m-1 d-block"
            @click="IncrementCurrentPage()"
          >
            Next
          </button>
        </div>
      </div>
  </section>
</template>

<script>
import { GetEpisodes } from '@/api/index';

export default {
  data() {
    return {
      episodes: [],
      currentPage: 1,
    };
  },
  async mounted() {
    this.episodes = await GetEpisodes(this.currentPage);
  },
  methods: {
    async IncrementCurrentPage() {
      this.currentPage += 1;
      this.characters = await GetEpisodes(this.currentPage);
    },
    async DecrementCurrentPage() {
      if (this.currentPage >= 2) {
        this.currentPage -= 1;
        this.characters = await GetEpisodes(this.currentPage);
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
