const Form: React.FC = () => {
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
					/>
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
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="12th-stream">
						12th STREAM
					</label>
					<select name="12th-stream" id="12th-stream" className="tw-form-input">
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
					/>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="grad-stream">
						GRADUATION STREAM
					</label>
					<select name="grad-stream" id="grad-stream" className="tw-form-input">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div>
					<label className="text-gray-700" htmlFor="workExp">
						WORK EXPERIENCE
					</label>
					<select name="workExp" id="workExp" className="tw-form-input">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>

				<button className="tw-primary-btn">Evaluate My Profile</button>
			</div>
		</div>
	)
}

export default Form
