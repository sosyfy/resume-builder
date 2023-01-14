/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const includedFeatures = [
  'Multiple formats to download',
  'Professional resume templates',
  'Feature-rich Resume & CV builder',
  'Unlimited number of document downloads',
]

export default function Pricing() {
  return (
    <div className="bg-gray-100 scroll-my-28 scroll-pb-36 scroll-pt-32" id='pricing'>
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
             Free for life 
            </p>
          </div>
        </div>
      </div>
      <div className="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Lifetime Membership</h3>
                <p className="mt-6 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-base font-semibold text-indigo-600 bg-white">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-8 text-center bg-gray-50 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">Free forever</p>
                <div className="flex items-center justify-center mt-4 text-5xl font-bold tracking-tight text-gray-900">
                  <span>$0</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      to="/templates"
                      className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-purple-800 border border-transparent rounded-md hover:bg-purple-900"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
