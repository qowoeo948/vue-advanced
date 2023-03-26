<template>
  <div>
      <!-- <div v-for="item in fetchedAsk" v-bind:key="item.id">
         {{ item.title }}
      </div> -->
      <p v-for="item in fetchedAsk" v-bind:key="item.id"> 
        <!-- <a v-bind:href='item.url'> -->
        <a>
          <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
          </router-link>
        </a>
        <small>{{ item.time_ago}} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}

</script>

<style>

</style>