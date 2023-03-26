<template>
  <div id="app">
    <ToolBar/>
    <transition name="routing-page">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar
  }
}
</script>

<style>
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
