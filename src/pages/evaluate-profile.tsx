// COMPONENTS
import Landing from '@/components/EvaluateProfile/Landing'
import ParaSection from '@/components/EvaluateProfile/ParaSection'
import Form from '@/components/EvaluateProfile/Form'

const EvaluateProfile: React.FC = () => {
	return (
		<div>
			<Landing />

			<div className="flex flex-col items-center m-4 my-10 space-y-20">
				{/* ========= Section: Profile Evaluation ========= */}
				<ParaSection
					heading="Profile Evaluation"
					para={`While going for a master's degree in management, the most important factor to be considered is - Do you have what it takes to be a good manager? And that's where your profile comes into play. Having a good profile does not only put you ahead of others while applying for top business schools in the country but also, helps in reassuring that the career path that you've chosen for yourself is perfect for you. To know where you stand among lakhs of student applicants, the need for profile evaluation arises.`}
				/>

				{/* ========= Section: How It Works ========= */}
				<ParaSection
					heading="How It Works"
					para={`PrepStation's Profile Evaluator takes into account all the criteria that a particular business school considers while choosing students for its program. It carefully measures your grades and years of work experience against the amount of weightage given by top business schools in India, to these parameters. It analyses your background, stream, years of work experience and gives an accurate percentage chance of getting into each business school, separately. `}
				/>

				{/* ========= Form: Evaluate Profile  ========= */}
				<Form />
			</div>
		</div>
	)
}

export default EvaluateProfile
