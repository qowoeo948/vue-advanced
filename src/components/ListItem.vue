<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" v-bind:key="item.id">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              class="link-text"
              v-bind:to="`/user/${item.user}`"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "../utils/bus";

export default {
  created() {
   /*  bus.$emit("start:spinner");

    const name = this.$route.name;
    if (name === "news") {
      setTimeout(() => {
        this.$store.dispatch("FETCH_NEWS")
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    } else if (name === "ask") {
      setTimeout(() => {
        this.$store.dispatch("FETCH_ASK")
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    } else if (name === "jobs") {
      setTimeout(() => {
        this.$store.dispatch("FETCH_JOBS")
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    } */
  },
  computed: {
    listItems() {
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped>
.news-list {
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
}
</style>