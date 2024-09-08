<script setup lang="ts">
  import FooterComponent from './components/site/FooterComponent.vue';
  import HeaderComponent from './components/site/HeaderComponent.vue';
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <router-view name="marketplace"></router-view>
    <FooterComponent />
  </div>
</template>
