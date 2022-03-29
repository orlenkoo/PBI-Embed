import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getCurrrentUser, user } from '../user'
export { useEmailLogin } from './use_login'
export { useGoogleLogin } from './use_google'
export { useSignup } from './use_signup'

export function setAuthListener() {
  const router = useRouter()
  return onAuthStateChanged(getAuth(), async (u) => {
    if (!u) router.push('/auth')
    else {
      await getCurrrentUser()
      router.push('/')
    }
  })
}

export async function logout() {
  await signOut(getAuth())
  user.value = null
}
