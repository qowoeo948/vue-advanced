<template>
  <div id="app">
    <ToolBar/>
    <transition name="routing-page">
      <RouterView/>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
body {
  padding: 0;
  margin: 0;
}

/* Router Transition */
.routing-page-enter-active, .routing-page-leave-active {
  transition: opacity .3s ease;
}
.routing-page-enter, .routing-page-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
