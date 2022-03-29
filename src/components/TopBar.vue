<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { user } from '@/data/user'
import UserPopup from './UserPopup.vue'
import { onClickOutside } from '@vueuse/core'

const dropDownEle = ref(null)
const dropDownOpen = ref(false)

onClickOutside(dropDownEle, () => (dropDownOpen.value = false))
</script>
<template>
  <nav class="flex items-center h-20 bg-accent py-25">
    <Icon class="w-20 text-4xl" icon="" />
    <h1 class="text-2xl font-semibold text-white">PBI Embed Demo</h1>
    <div class="flex-1" />
    <div v-if="user" class="flex items-center">
      <h1 class="font-semibold text-white">{{ user?.email }}</h1>
      <span
        class="ml-5 px-4 py-3  badge  text-white font-bold uppercase"
        :class="{
          'bg-yellow-500': user.userType === 'pro',
          'bg-green-500': user.userType === 'free',
          'bg-red-500': user.userType === 'admin',
        }"
      >
      <h1 class="font-semibold text-white">{{ user.userType }}</h1>   
      
      </span>

      <div
        ref="dropDownEle"
        class="dropdown dropdown-end"
        :class="{ 'dropdown-open': dropDownOpen }"
      >
        <label tabindex="0" @click="dropDownOpen = !dropDownOpen">
          <img
            @blur="dropDownOpen = false"
            class="w-14 mx-4 rounded-full cursor-pointer"
            src="@/assets/avatar.png"
            alt="user"
          />
        </label>
        <UserPopup
          v-if="dropDownOpen"
          tabindex="0"
          class="shadow dropdown-content"
        />
      </div>
    </div>
  </nav>
</template>
