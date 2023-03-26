<template>
  <div>
    <section class="header-container">
      <!-- <div class="user-container">
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
      </div> -->

      <!-- 사용자 정보 (위에꺼 공통 component화)-->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>

        <template slot="time"> {{ 'Posted ' + fetchedItem.time_ago }} </template>
      </user-profile>
    </section>
    <section>
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
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
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