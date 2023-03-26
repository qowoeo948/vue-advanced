<template>
  <div>
    <ListItem/>
    <!-- <ul class="news-list">
      <li class="post" v-for="item in fetchedAsk" v-bind:key="item.id">
     
        <div class="points">
          {{ item.points }}
        </div>
       
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
/* import bus from "../utils/bus"; */

export default {
  components: {
    /* ...mapGetters(["fetchedAsk"]), */
    ListItem
  },
  created() {
   /*  bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store.dispatch("FETCH_ASK")
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000); */
  }, 
};
</script>

<style scoped>
</style>