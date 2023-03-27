<template>
  <div>
    <!--  <ul class="news-list">
      <li
        class="post"
        v-for="item in this.$store.state.news"
        v-bind:key="item.id"
      >
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href='item.url'>
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago}} by
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <ListItem />
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
/* import bus from "../utils/bus"; */
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem,
  },
  created() {
   /*  bus.$emit("start:spinner");
    this.$store.dispatch("FETCH_NEWS")
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((error) => {
        console.log(error);
      }); */
  },
  mixins: [ListMixin]
};
</script>

<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>