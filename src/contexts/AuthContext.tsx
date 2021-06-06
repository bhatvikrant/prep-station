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

	const signup = (email: string, password: string) => {
		/**
		 * Signup function
		 */
		return auth.createUserWithEmailAndPassword(email, password)
	}

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(user => setCurrentUser(user))

		return unsub
	}, [])

	const value = {
		currentUser,
		signup
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}