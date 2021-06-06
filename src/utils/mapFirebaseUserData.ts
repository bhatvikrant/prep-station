export type FormattedUserType = {
	uid: any
	email: any
	name: any
	token: any
	provider: any
	photoUrl: any
}

export const formatUser = (user: any): FormattedUserType => ({
	uid: user.uid,
	email: user.email,
	name: user.displayName,
	token: user.ya,
	provider: user.providerData[0].providerId,
	photoUrl: user.photoURL
})
