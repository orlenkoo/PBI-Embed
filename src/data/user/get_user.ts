import { getAuth } from 'firebase/auth'
import { getDoc } from 'firebase/firestore/lite'
import { ref } from 'vue'
import type { User } from './index'
import { userDoc } from './index'

export const user = ref<User | null>(null)

export async function getCurrrentUser() {
  const cUser = getAuth().currentUser
  if (!cUser?.uid) {
    if (user.value) user.value = null
    return null
  }
  if (user.value) return user.value
  user.value = (await getDoc(userDoc(cUser.uid))).data() as User
  return user.value
}
