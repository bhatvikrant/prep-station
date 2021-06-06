import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// FIREBASE
import firebase from './firebase'

// UTILS
import { FormattedUserType, formatUser } from 'src/utils/mapFirebaseUserData'

// FIREBASE
import { createUser } from './db'

const AuthContext = createContext({}) // React Context created

export const useAuth = (): any => {
	/**
	 * Custom hook to access the AuthContext
	 */
	return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
	const router = useRouter()

	const [currentUser, setCurrentUser] = useState<FormattedUserType | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	const handleUser = (rawUser: firebase.User | null) => {
		if (rawUser) {
			const user = formatUser(rawUser)

			// const { token, ...userWithoutToken } = user;
			const { ...userWithoutToken } = user

			createUser(user.uid, userWithoutToken)
			setCurrentUser(user)
			router.replace('/')

			// cookie.set('fast-feedback-auth', true, { expires: 1 });
			return user
		} else {
			router.replace('/')
			setCurrentUser(null)
			// cookie.remove('fast-feedback-auth');

			return false
		}
	}

	const signup = (name: string, email: string, password: string) => {
		/**
		 * Signup function
		 */
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(response => {
				const user = { ...response.user }
				user.displayName = name
				// @ts-ignore
				handleUser(user)
			})
	}

	const login = (email: string, password: string) => {
		/**
		 * Login function
		 */
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				handleUser(response.user)
			})
	}

	const googlelogin = () => {
		/**
		 * Google login function
		 */
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then(response => {
				handleUser(response.user)
			})
	}

	const logout = () => {
		/**
		 * Logout function
		 */
		router.push('/')
		return firebase.auth().signOut()
	}

	const resetpassword = (email: string) => {
		/**
		 * Reset Password function
		 */
		return firebase.auth().sendPasswordResetEmail(email)
	}

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(rawUser => {
			if (rawUser) {
				// handleUser(rawUser)
				setCurrentUser(formatUser(rawUser))
			} else {
				setCurrentUser(null)
			}
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	const value = {
		currentUser,
		signup,
		login,
		logout,
		resetpassword,
		googlelogin
	}

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
