import firebase from 'firebase/app'
import { createContext, useContext, useState, useEffect } from 'react'

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
	const [currentUser, setCurrentUser] = useState<any>()
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
		return auth.signOut()
	}

	const resetpassword = (email: string) => {
		/**
		 * Reset Password function
		 */
		return auth.sendPasswordResetEmail(email)
	}

	const changepassword = (password: string) => {
		/**
		 * Change Password function
		 */
		return currentUser.updatePassword(password)
	}

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
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
		changepassword,
		googlelogin
	}

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
