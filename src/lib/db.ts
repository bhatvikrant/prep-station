import firebase from './firebase'

const firestore = firebase.firestore()

export const createUser = (uid: string, data: Omit<firebase.User, typeof uid>) =>
	firestore
		.collection('users')
		.doc(uid)
		.set(
			{
				uid,
				...data
			},
			{ merge: true }
		)

// export const createSite = (data) => {
//     const site = firestore.collection('sites').doc();
//     site.set(data);

//     return site;
// };

// export const createFeedback = (data) =>
//     firestore.collection('feedback').add(data);

// export const deleteFeedback = (id) =>
//     firestore.collection('feedback').doc(id).delete();
