import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/performance'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

let app

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig)
} else {
	app = firebase.app()
}

const auth = app.auth()

const db = firebase.firestore()
// const db = {users: firebase.firestore('users')}

export { app, auth, db }

// export default function initFirebase() {
// 	if (!firebase.apps.length) {
// 		firebase.initializeApp(firebaseConfig)
// 		// Check that `window` is in scope for the analytics module!
// 		if (typeof window !== 'undefined') {
// 			// Enable analytics. https://firebase.google.com/docs/analytics/get-started
// 			if ('measurementId' in firebaseConfig) {
// 				firebase.analytics()
// 				firebase.performance()
// 			}
// 		}
// 		console.log('Firebase was successfully init.')
// 	}
// }
