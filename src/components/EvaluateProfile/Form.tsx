import { useState } from 'react'

// TOAST
import { errorNotification } from 'src/toast'

const Form: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [tenthScore, setTenthScore] = useState<string>('');
	const [twelfthStream, setTwelfthStream] = useState<string>('');
	const [twelfthScore, setTwelfthScore] = useState<string>('');
	const [gradStream, setGradStream] = useState<string>('');
	const [gradScore, setGradScore] = useState<string>('');
	const [workExp, setWorkExp] = useState<string>('');

	const submit = () => {
		if (!name) {
			return errorNotification('Name is required')
		}
		if (!email) {
			return errorNotification('Email is required')
		}
		if (!phoneNumber) {
			return errorNotification('Phone Number is required')
		}
		if (!tenthScore) {
			return errorNotification('10th score is required')
		}
		if (!twelfthStream) {
			return errorNotification('12th stream is required')
		}
		if (!twelfthScore) {
			return errorNotification('12th score is required')
		}
		if (!gradStream) {
			return errorNotification('Grad stream is required')
		}
		if (!gradScore) {
			return errorNotification('Grad score is required')
		}
		if (!workExp) {
			return errorNotification('Work experience is required')
		}
	}

	return (
		<div className="w-full lg:max-w-lg">
			<h2 className="mb-4 tw-section-heading">Evaluate</h2>

			<div className="p-4 space-y-4 border rounded-md">
				<div>
					<label className="text-gray-700" htmlFor="name">
						NAME
					</label>
					<input
						id="name"
						type="text"
						className="tw-form-input"
						placeholder="Your full name"
						value={name}
						onChange={({ target: { value } }) => setName(value)}
						required
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="email">
						EMAIL
					</label>
					<input
						id="email"
						type="email"
						className="tw-form-input"
						placeholder="Your email"
						value={email}
						onChange={({ target: { value } }) => setEmail(value)}
						required
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="phone-number">
						PHONE NO.
					</label>
					<input
						id="phone-number"
						type="number"
						className="tw-form-input"
						placeholder="Your mobile number"
						value={phoneNumber}
						onChange={({ target: { value } }) => setPhoneNumber(value)}
						required
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="10th-score">
						10th SCORE
					</label>
					<input
						id="10th-score"
						type="number"
						className="tw-form-input"
						placeholder="Class 10th score"
						value={tenthScore}
						onChange={({ target: { value } }) => setTenthScore(value)}
						required
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="12th-stream">
						12th STREAM
					</label>
					<select name="12th-stream" id="12th-stream" className="tw-form-input"
						value={twelfthStream}
						onChange={({ target: { value } }) => setTwelfthStream(value)}
						required
					>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="12th-score">
						12th SCORE
					</label>
					<input
						id="12th-score"
						type="number"
						className="tw-form-input"
						placeholder="Class 12th score"
						value={twelfthScore}
						onChange={({ target: { value } }) => setTwelfthScore(value)}
						required
					/>
				</div>

				<div>
					<label className="text-gray-700" htmlFor="grad-stream">
						GRADUATION STREAM
					</label>
					<select name="grad-stream" id="grad-stream" className="tw-form-input"
						value={gradStream}
						onChange={({ target: { value } }) => setGradStream(value)}
						required
					>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>

				<div>
					<label className="text-gray-700" htmlFor="grad-score">
						GRADUATION SCORE
					</label>
					<input
						id="grad-score"
						type="number"
						className="tw-form-input"
						placeholder="Graduation score"
						value={gradScore}
						onChange={({ target: { value } }) => setGradScore(value)}
						required
					/>
				</div>

				<div>
					<label className="text-gray-700" htmlFor="workExp">
						WORK EXPERIENCE
					</label>
					<select name="workExp" id="workExp" className="tw-form-input"
						value={workExp}
						onChange={({ target: { value } }) => setWorkExp(value)}
						required
					>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>

				<button className="tw-primary-btn"
					onClick={submit}
				>Evaluate My Profile</button>
			</div>
		</div>
	)
}

export default Form
