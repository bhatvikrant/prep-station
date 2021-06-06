import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// FIREBASE
import firebase from 'firebase/app'

// UTILS
import { mapFirebaseUserData, mappedDataType } from 'src/utils/mapFirebaseUserData'

// FIREBASE
import { auth } from '../firebase'

const AuthContext = createContext({}) // React Context created

export const useAuth = (): any => {
	/**
	 * Custom hook to access the AuthContext
	 */
	return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
	const router = useRouter()

	const [currentUser, setCurrentUser] = useState<mappedDataType>()
	const [loading, setLoading] = useState<boolean>(true)

	const signup = (email: string, password: string) => {
		/**
		 * Signup function
		 */
		return auth.createUserWithEmailAndPassword(email, password)
	}

	const login = (email: string, password: string) => {
		/**
		 * Login function
		 */
		return auth.signInWithEmailAndPassword(email, password)
	}

	const googlelogin = () => {
		/**
		 * Google login function
		 */
		return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
	}

	const logout = () => {
		/**
		 * Logout function
		 */
		router.push('/')
		return auth.signOut()
	}

	const resetpassword = (email: string) => {
		/**
		 * Reset Password function
		 */
		return auth.sendPasswordResetEmail(email)
	}

	// const changepassword = (password: string) => {
	// 	/**
	// 	 * Change Password function
	// 	 */
	// 	return currentUser?.updatePassword?.(password)
	// }

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(user => {
			setCurrentUser(mapFirebaseUserData(user))
			setLoading(false)
		})

		return unsub
	}, [])

	const value = {
		currentUser,
		signup,
		login,
		logout,
		resetpassword,
		// changepassword,
		googlelogin
	}

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
