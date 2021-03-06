import Link from 'next/link'
import useLinks from '../../../hooks/use-links'

export default function () {
  const links = useLinks()
  const namesYouBothLike = links.currentParent.namesYouBothLike()

  return (
    <div className='px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'>
      <div
        className='bg-white rounded-lg px-4 pt-5 pb-4 mx-5 overflow-hidden shadow-xl sm:max-w-sm sm:w-full sm:p-6 my-4'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <div>
          <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
            <svg
              className='h-6 w-6 text-green-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
          <div className='mt-3 text-center sm:mt-5'>
            <h3
              className='text-lg leading-6 font-medium text-gray-900'
              id='modal-headline'
            >
              You're Done!
            </h3>
            <div className='mt-2'>
              <p className='text-sm leading-5 text-gray-500'>
                Want to take a look at the names you both like?
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5 sm:mt-6'>
          <span className='flex w-full rounded-md shadow-sm'>
            <Link href={namesYouBothLike.href} as={namesYouBothLike.as}>
              <button
                type='button'
                className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5'
              >
                See Names You Both Like
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
