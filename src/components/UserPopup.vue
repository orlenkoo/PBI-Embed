<script setup>
import { user } from '@/data/user'
import { logout } from '@/data/auth'
</script>

<template>
  <div
    class="mx-5 mt-5 flex flex-col bg-base-200 w-72 items-center rounded-xl shadow-xl"
  >
    <h2 class="text-xl text-white font-bold mt-2">{{ user?.fullname }}</h2>
    <h2 class="font-semibold mt-2">{{ user?.email }}</h2>
    <h2 class="text-white uppercase font-semibold my-2">
      {{ user?.userType || 'free' }} USER
    </h2>
    <button class="my-5 btn btn-primary px-8 capitalize" @click="logout">
      sign out
    </button>
  </div>
</template>
