import { getAuth } from 'firebase/auth'
import { setDoc } from 'firebase/firestore/lite'
import { defaultReports } from '../reports/config'
import { User, userDoc } from './index'

export async function createUser(user: CreateUserType | null) {
  const u = getAuth().currentUser!
  if (!user) {
    await setDoc(userDoc(u.uid), {
      id: u.uid,
      username: u.displayName || '',
      fullname: u.displayName || '',
      email: u.email || '',
      userType: 'free',
      reports: defaultReports(),
    } as User)
  } else {
    await setDoc(userDoc(u.uid), {
      id: u.uid,
      ...user,
      userType: 'free',
      reports: defaultReports(),
    } as User)
  }
}

type CreateUserType = {
  username: string
  fullname: string
  email: string
}
