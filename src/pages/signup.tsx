import { useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// CONTEXT
import { useAuth } from '@/lib/auth'

// TOAST
import { errorNotification, successNotification } from 'src/toast'

// MUI
import { CircularProgress } from '@material-ui/core'

// COMPONENTS
import OAuthProviders from '@/components/Auth/OAuthProviders'

const SignUp: React.FC = () => {
	const router = useRouter()
	const { signup, currentUser } = useAuth()

	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	useLayoutEffect(() => {
		if (currentUser?.id) {
			router.push('/')
		}
	}, [currentUser])

	const initiateSignup = async () => {
		if (!name) {
			return errorNotification('Name is required')
		}
		if (!email) {
			return errorNotification('Email is required')
		}
		if (!password) {
			return errorNotification('Password is required')
		}
		if (password !== confirmPassword) {
			return errorNotification('Passwords do not match')
		}

		try {
			setLoading(true)

			await signup(email, password)
			successNotification(`Hello, ${name}`)

			setEmail('')
			setPassword('')
			setConfirmPassword('')
		} catch (err) {
			errorNotification(err.message ?? 'Failed to create an account')
			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className="flex flex-col items-center py-8">
			<div className="w-full max-w-md p-8 space-y-3 border rounded-xl">
				<h1 className="text-2xl font-bold text-center">Sign Up</h1>
				<div className="space-y-6">
					<div className="space-y-1 text-sm">
						<label htmlFor="name">Name</label>
						<input
							autoFocus
							type="text"
							name="name"
							id="name"
							placeholder="Full Name"
							className="tw-form-input"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="email">Email</label>
						<input
							type="email"
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
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
							placeholder="Confirm Password"
							className="tw-form-input"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button
						className={`w-full tw-primary-btn ${
							loading && 'bg-red-300 hover:bg-red-300'
						}`}
						onClick={initiateSignup}
						disabled={loading}>
						Sign Up {loading && <CircularProgress className="ml-5" size={20} />}
					</button>
				</div>

				{/* OAUTH PROVIDER */}
				<OAuthProviders type="signup" />

				<p className="text-xs text-center text-gray-600 sm:px-6">
					Already have an account?{' '}
					<Link href="/login">
						<a className="text-gray-800 underline">Login</a>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SignUp
