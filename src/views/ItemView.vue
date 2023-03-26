<template>
  <div>
    <section class="header-container">
      <!-- 질문 상세 정보-->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>
        {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글글-->
      <div class="content" v-html="fetchedItem.content"></div>
    </section>
  </div>
  <!-- <div>
    <p>title: {{ fetchedItem.title }}</p>
    <div>content: {{ fetchedItem.content }}</div>
  </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    /* itemInfo() {
      return this.$store.state.item;
    }, */

    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>