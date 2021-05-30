import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-200 bg-black">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a href="/" className="text-xl font-bold hover:text-white ">
                  Prep Station
                </a>
              </div>

              <p className="max-w-md mt-2 text-gray-200 ">
                Your Destination For Information
              </p>

              <div className="flex mt-4 -mx-2">
                <a href="/" className="mx-2" aria-label="Linkden">
                  <FaLinkedin />
                </a>

                <a href="/" className="mx-2" aria-label="Facebook">
                  <FaFacebook />
                </a>

                <a href="/" className="mx-2" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="uppercase ">About</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Company
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  community
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Blog</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Tec
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Music
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Products</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Mega cloud
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Aperion UI
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm hover:underline hover:text-red-500"
                >
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Contact</h3>
                <span className="block mt-2 text-sm hover:underline hover:text-red-500">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm hover:underline hover:text-red-500">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none" />

        <a
          href="https://twitter.com/vikrantbhat1022"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="text-center text-gray-200">
              Built by ©{' '}
              <span className="hover:text-red-500">Vikrant Bhat</span>{' '}
              {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
