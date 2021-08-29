/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useAuth } from '../context/auth'
/**
 *
 * @todo Condtionally render login/register and Profile name in NavBar
 */

export default function Nav() {
  const { token, logout, profileName, avatarImage } = useAuth()

  return (
    <nav className='bg-blue-600'>
      <ul className='flex items-center justify-between p-5'>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            <Link href="/" passHref={true}>
              <a>
                <h1 className='text-white font-bold text-xl'>Todo</h1>
              </a>
            </Link>
          </li>
        </ul>
        {(token=="null"||token==undefined) && <ul className='flex'>
          <li className='text-white mr-2'>
           <Link href='/login'>Login</Link>
          </li>
          <li className='text-white'>
            <Link href='/register'>Register</Link>
          </li>
        </ul>}
        { (token!="null" && token!=undefined) && <div className='inline-block relative w-28'>
          <div className='group inline-block relative'>
            <button className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
              <img src={avatarImage} />
              <span className='mr-1'>{profileName}</span>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </button>
            <ul className='absolute hidden text-gray-700 pt-1 group-hover:block'>
              <li className=''>
                <a
                  className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                  href='#'
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>}
      </ul>
    </nav>
  )
}
