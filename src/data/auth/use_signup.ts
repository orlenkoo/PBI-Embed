import { reactive } from 'vue'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth'

import { FirebaseError } from 'firebase/app'
import { createUser } from '../user/create_user'
import { getCurrrentUser } from '../user'

export function useSignup() {
  const form = reactive({
    username: '',
    fullname: '',
    email: '',
    password: '',
    error: '',
    loading: false,
  })
  async function signup() {
    try {
      form.loading = true
      form.error = ''
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        form.email,
        form.password,
      )
      updateProfile(user, {
        displayName: form.username,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      })
      await createUser({
        username: form.username,
        fullname: form.fullname,
        email: form.email,
      })
      await getCurrrentUser()
    } catch (e) {
      if (e instanceof FirebaseError) {
        form.error = e.message
      } else if (e instanceof Error) {
        form.error = e.message
      }
    } finally {
      form.loading = false
    }
  }
  return { form, signup }
}
