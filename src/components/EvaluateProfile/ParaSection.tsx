interface Props {
	heading: string
	para: string
}

const ParaSection: React.FC<Props> = ({ heading, para }) => {
	return (
		<div>
			<h2 className="tw-section-heading">{heading}</h2>
			<p className="mt-4 text-sm text-justify text-gray-500 dark:text-gray-400 lg:max-w-lg">
				{para}
			</p>
		</div>
	)
}

export default ParaSection
