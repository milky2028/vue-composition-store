<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      @click="doThing($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      pizza: 'single'
    };
  },
  methods: {
    doThing: (val: any) => {
      console.log('bird');
    }
  }
};
</script>
