import firebase from 'firebase/app'

export type mappedDataType =
	| {
			id: string | undefined
			email: string | null | undefined
			name: string | null | undefined
			profilePic: string | null | undefined
			updatePassword: ((newPassword: string) => Promise<void>) | undefined
	  }
	| unknown

export const mapFirebaseUserData = (rawUserData: firebase.User | null): mappedDataType => {
	/**
	 * Function to extract meaningful user data from the verbose firebase response
	 */

	if (rawUserData) {
		const userData = {
			id: rawUserData?.uid,
			email: rawUserData?.email,
			// token: rawUserData?.xa,
			name: rawUserData?.displayName,
			profilePic: rawUserData?.photoURL,
			updatePassword: rawUserData?.updatePassword
		}

		return userData
	}

	return {}
}
