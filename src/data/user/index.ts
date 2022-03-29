import { collection, doc, getFirestore } from 'firebase/firestore/lite'
import type { Report } from '../reports/types'

export { createUser } from './create_user'
export { getCurrrentUser, user } from './get_user'

export const usersCol = () => collection(getFirestore(), 'users')
export const userDoc = (uid: string) => doc(usersCol(), uid)

export interface User {
  id: string
  fullname: string
  username: string
  email: string
  userType: 'pro' | 'free'
  reports: Report[]
}
