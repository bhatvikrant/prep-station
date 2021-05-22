import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-200 bg-black">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a href="#" className="text-xl font-bold hover:text-white ">
                  Prep Station
                </a>
              </div>

              <p className="max-w-md mt-2 text-gray-200 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, nisi! Id.
              </p>

              <div className="flex mt-4 -mx-2">
                <a href="#" className="mx-2" aria-label="Linkden">
                  <FaLinkedin />
                </a>

                <a href="#" className="mx-2" aria-label="Facebook">
                  <FaFacebook />
                </a>

                <a href="#" className="mx-2" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="uppercase ">About</h3>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Company
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  community
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Careers
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Blog</h3>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Tec
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Music
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Videos
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Products</h3>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Mega cloud
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Aperion UI
                </a>
                <a href="#" className="block mt-2 text-sm hover:underline">
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Contact</h3>
                <span className="block mt-2 text-sm hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none" />

        <div>
          <p className="text-center text-gray-800">
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
