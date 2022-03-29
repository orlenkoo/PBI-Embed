import { reactive } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { createUser, getCurrrentUser } from '../user'

export function useEmailLogin() {
  const form = reactive({
    email: '',
    password: '',
    error: '',
    loading: false,
  })
  async function onSubmit() {
    try {
      form.loading = true
      form.error = ''
      await signInWithEmailAndPassword(getAuth(), form.email, form.password)
      const u = await getCurrrentUser()
      if (!u) await createUser(null)
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
  return { form, emailLogin: onSubmit }
}
