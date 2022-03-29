<script setup>
import { defineEmits } from 'vue'
import { Icon } from '@iconify/vue'
import { useEmailLogin, useGoogleLogin } from '@/data/auth'

defineEmits(['change'])

const { form, emailLogin } = useEmailLogin()
const { gLoading, gError, googleLogin } = useGoogleLogin()
</script>

<template>
  <section class="flex flex-col h-full items-center justify-center">
    <div class="w-[450px] p-10 card bg-base-300">
      <form
        class="flex flex-col items-center justify-center"
        @submit.prevent="emailLogin"
      >
        <h1 class="mb-2 text-2xl font-bold">PBI Embed Demo</h1>
        <h3 class="mb-6 text-sm">Sign in using Email/Password or via Google</h3>

        <!-- Email -->
        <label class="w-full form-control">
          <h3 class="label">Email</h3>
          <input
            class="input input-primary"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            v-model="form.email"
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
            v-model="form.password"
          />
        </label>

        <!-- Form Error -->
        <div class="h-5 my-4 w-full text-center">
          <small v-if="form.error" class="font-bold text-error">{{
            form.error
          }}</small>
        </div>

        <!-- Submit -->
        <button
          class="px-20 btn btn-primary"
          :class="{ loading: form.loading }"
          type="submit"
        >
          Login
        </button>
      </form>
      <h5 class="mt-6 text-center">
        Don't have account yet?
        <button class="link font-semibold" @click="$emit('change')">
          Sign up
        </button>
      </h5>
      <div class="my-8 divider">OR</div>

      <button
        class="btn bg-white hover:bg-gray-200 w-64 mx-auto"
        @click="googleLogin"
        :class="{ loading: gLoading }"
      >
        <Icon icon="fa:google" class="text-xl text-red-500" />
        <span class="ml-4 text-black">Sign in with Google</span>
      </button>

      <!-- Form Error -->
      <div class="h-5 mt-2 w-full text-center">
        <small v-if="gError" class="font-bold text-error">{{ gError }}</small>
      </div>
    </div>
  </section>
</template>
