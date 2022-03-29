<template>
  <div class="h-screen">
    <Login v-if="authType === 'login'" @change="authType = 'signup'" />
    <SignUp v-else @change="authType = 'login'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from '../components/Login.vue'
import SignUp from '../components/Signup.vue'

const authType = ref('login')
</script>
