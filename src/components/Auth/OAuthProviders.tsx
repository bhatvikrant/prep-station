// ICONS
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai'

// NEXT AUTH
import { signIn } from 'next-auth/client'

interface Props {
	type: 'login' | 'signup'
}

const OAuthProviders: React.FC<Props> = ({ type }) => {

	return (
		<>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px bg-gray-300 sm:w-16"></div>
				<p className="px-3 text-sm text-gray-600">
					{type === 'login' ? 'Login' : 'Sign Up'} with social accounts
				</p>
				<div className="flex-1 h-px bg-gray-300 sm:w-16"></div>
			</div>
			<div className="flex justify-center space-x-4">
				<button
					aria-label="Log in with Google"
					className="p-3 rounded-sm"
					onClick={() => signIn('github', { callbackUrl: '/' })}>
					Github
					{/* <AiOutlineGoogle className="w-10 h-10" /> */}
				</button>
				<button
					aria-label="Log in with Twitter"
					className="p-3 rounded-sm"
					onClick={() => alert('coming soon')}>
					<AiOutlineTwitter className="w-10 h-10" />
				</button>
			</div>
		</>
	)
}

export default OAuthProviders
