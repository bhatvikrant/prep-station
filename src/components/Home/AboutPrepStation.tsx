/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

// ICONS
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

const AboutPrepStation: React.FC = () => {
	return (
		<section className="my-16 bg-white dark:bg-gray-800">
			<div className="container px-6 py-8 mx-auto">
				<div className="items-center lg:flex">
					<div className="lg:w-1/2">
						<h2 className="tw-section-heading">About PrepStation</h2>

						<p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:max-w-md">
							PrepStation is an education consulting firm that provides guidance to
							MBA aspirants for Indian Business Schools and helps in easy facilitation
							of their respective queries that arise during the preparation of
							competitive examinations. We, at PrepStation act like a friend to the
							candidates, who are knowledgeable and reliable. We plan to give them an
							idea of where they stand among thousands of applicants, and where they
							need to reach. Since we understand an aspirant's thought process, it
							makes it more reliable and relatable for the users and helps them get
							the required guidance.
						</p>

						<div className="flex items-center mt-6 -mx-2">
							<a className="mx-2" href="#" aria-label="Linkden">
								<FaLinkedin className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" />
							</a>

							<a className="mx-2" href="#" aria-label="Facebook">
								<FaFacebook className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" />
							</a>

							<a className="mx-2" href="#" aria-label="Twitter">
								<FaTwitter className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" />
							</a>
						</div>
					</div>

					<div className="mt-8 lg:mt-0 lg:w-1/2">
						<div>
							<Image
								src="/logo.png"
								layout="responsive"
								height="216"
								width="512"
								alt="Prep Station logo"
								className="object-cover object-center w-full rounded-md shadow"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutPrepStation
