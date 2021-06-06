import { useState } from 'react'
import Link from 'next/link'

// CONTEXT
import { useAuth } from '@/contexts/AuthContext'

// MUI
import { CircularProgress } from '@material-ui/core'

// TOAST
import { errorNotification, successNotification } from 'src/toast'

const ForgotPassword: React.FC = () => {
	const { resetpassword } = useAuth()

	const [email, setEmail] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const initiateResetPassword = async () => {
		if (!email) {
			return errorNotification('Email is required')
		}

		try {
			setLoading(true)

			await resetpassword(email)
			successNotification(`Check your inbox for further instructions`)

			setEmail('')
		} catch (err) {
			errorNotification(err.message ?? 'Failed to Reset password')
			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className="flex flex-col items-center py-8">
			<div className="w-full max-w-md p-8 space-y-3 border rounded-xl">
				<h1 className="text-2xl font-bold text-center">Forgot Password</h1>
				<div className="space-y-6">
					<div className="space-y-1 text-sm">
						<label htmlFor="email">Email</label>
						<input
							autoFocus
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="tw-form-input"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<button
						className={`w-full tw-primary-btn ${
							loading && 'bg-red-300 hover:bg-red-300'
						}`}
						onClick={initiateResetPassword}
						disabled={loading}>
						Reset Password {loading && <CircularProgress className="ml-5" size={20} />}
					</button>

					<div className="flex justify-center text-xs text-gray-600 underline">
						<Link href="/login">
							<a>Login</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
