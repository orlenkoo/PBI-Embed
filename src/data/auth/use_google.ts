import { ref } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { createUser, getCurrrentUser } from '../user'

export function useGoogleLogin() {
  const gLoading = ref(false)
  const gError = ref('')

  async function onSubmit() {
    gLoading.value = true
    gError.value = ''
    try {
      await signInWithPopup(getAuth(), new GoogleAuthProvider())
      const u = await getCurrrentUser()
      if (!u) await createUser(null)
      await getCurrrentUser()
    } catch (e) {
      if (e instanceof FirebaseError) {
        gError.value = e.message
      } else if (e instanceof Error) {
        gError.value = e.message
      }
    } finally {
      gLoading.value = false
    }
  }
  return { gLoading, gError, googleLogin: onSubmit }
}
