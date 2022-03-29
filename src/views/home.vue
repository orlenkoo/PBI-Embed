<script setup>
import { ref, getCurrentInstance  } from 'vue'

import TopBar from '../components/TopBar.vue'
import IFrame from '../components/IFrame.vue'
import Sidebar from '../components/sidebar.vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

console.log(is_expanded)

</script>

<template>
  <main class="home-page">
    <TopBar />  
    <Sidebar />
    <IFrame /> 
   </main>
</template>

<style lang="scss">
</style>