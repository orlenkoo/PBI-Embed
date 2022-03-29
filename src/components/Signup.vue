<script setup>
import { defineEmits } from 'vue'
import { useSignup } from '@/data/auth/use_signup'

defineEmits(['change'])
const { form: f, signup } = useSignup()
</script>

<template>
  <section class="flex flex-col h-full justify-center items-center">
    <form
      class="min-w-[450px] py-20 px-10 card bg-base-200 flex flex-col items-center justify-center"
      @submit.prevent="signup"
    >
      <h1 class="mb-2 text-2xl font-bold">PBI Embed Demo</h1>
      <h3 class="mb-6 text-xl">Sign up</h3>

      <!-- Username -->
      <label class="w-full form-control">
        <h3 class="label">Username</h3>
        <input
          class="input input-primary"
          class:border-error="{cpasswordError}"
          placeholder="Enter your username"
          minlength="3"
          required
          v-model="f.username"
        />
      </label>
      <!-- Fullname -->
      <label class="mt-2 w-full form-control">
        <h3 class="label">FullName</h3>
        <input
          class="input input-primary"
          class:border-error="{cpasswordError}"
          placeholder="Enter your fullname"
          minlength="3"
          required
          v-model="f.fullname"
        />
      </label>

      <!-- Email -->
      <label class="mt-2 w-full form-control">
        <h3 class="label">Email</h3>
        <input
          class="input input-primary"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
          v-model="f.email"
        />
      </label>

      <!-- Password -->
      <label class="mt-2 w-full form-control">
        <h3 class="label">Password</h3>
        <input
          class="input input-primary"
          name="password"
          type="password"
          placeholder="********"
          minlength="8"
          required
          v-model="f.password"
        />
      </label>

      <!-- Form Error -->
      <div class="h-5 my-4 w-full text-center">
        <small v-if="f.error" class="font-bold text-error">{{ f.error }}</small>
      </div>
      <!-- Submit -->
      <button
        class="mt-4 px-10 btn btn-primary"
        :class="{ loading: f.loading }"
        type="submit"
      >
        Sign up
      </button>
    </form>
    <h5 class="m-2">
      Already have account?
      <button class="link" @click="$emit('change')">Login</button>
    </h5>
  </section>
</template>
