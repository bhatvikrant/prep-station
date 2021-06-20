import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// MUI
import { CircularProgress } from '@material-ui/core'

// TOAST
import { errorNotification, successNotification } from 'src/toast'

// COMPONENTS
import OAuthProviders from '@/components/Auth/OAuthProviders'

// NEXT AUTH
import { useSession } from 'next-auth/client'

const Login: React.FC = () => {
	const router = useRouter()
	const [session] = useSession()

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	// useEffect(() => {
	// 	if (session) {
	// 		router.push('/')
	// 	}
	// }, [session])

	const initiateLogin = async () => {
		if (!email) {
			return errorNotification('Email is required')
		}
		if (!password) {
			return errorNotification('Password is required')
		}

		try {
			setLoading(true)

			// await login(email, password)
			successNotification(`You are now Logged In!`)

			setEmail('')
			setPassword('')
		} catch (err) {
			errorNotification(err.message ?? 'Failed to login')
			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className="flex flex-col items-center py-8">
			<div className="w-full max-w-md p-8 space-y-3 border rounded-xl">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<div className="space-y-6">
					<div className="space-y-1 text-sm">
						<label htmlFor="email">Email</label>
						<input
							autoFocus
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							className="tw-form-input"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="tw-form-input"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<div className="flex justify-end text-xs text-gray-600">
							<Link href="/forgot-password">
								<a>Forgot Password?</a>
							</Link>
						</div>
					</div>
					<button
						className={`w-full tw-primary-btn ${loading && 'bg-red-300 hover:bg-red-300'
							}`}
						onClick={initiateLogin}
						disabled={loading}>
						Log In {loading && <CircularProgress className="ml-5" size={20} />}
					</button>
				</div>

				{/* OAUTH PROVIDER */}
				<OAuthProviders type="login" />

				<p className="text-xs text-center text-gray-600 sm:px-6">
					Don't have an account?{' '}
					<Link href="/signup">
						<a className="text-gray-800 underline">Sign up</a>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
