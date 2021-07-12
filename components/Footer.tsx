import { GlobeIcon } from "@heroicons/react/solid"

function Footer() {
  return (
    <footer className="grid grid-cols-1 w-full bg-gray-100 text-sm text-gray-500 sm:gird-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense py-3">
      <div className="flex justify-center items-center sm:col-span-2 lg:col-span-1 lg:col-start-2">
        <p className="">Carbon neutral since 2017</p>

      </div>

      <div className="flex justify-center space-x-8 whitespace-nowrap sm:justify-self-start">
          <p className="">Advertising</p>
          <p className="">Business</p>
          <p className="">How Search Works</p>
      </div>

      <div className="flex justify-center space-x-8 whitespace-nowrap sm:ml-auto">
          <p className="">Privacy</p>
          <p className="">Terms</p>
          <p className="">Settings</p>
      </div>
    </footer>
  )
}
export default Footer
