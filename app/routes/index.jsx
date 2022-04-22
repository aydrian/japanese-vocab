import { Link, redirect } from 'remix'
import { getRandomWordId } from '~/utils/helpers.server'

export const action = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  if (action === 'start_practice') {
    const id = await getRandomWordId()
    return redirect(`/practice/${id}`)
  }
}

export default function Index() {
  return (
    <div className='flex flex-col items-center justify-center h-95'>
      <h1 className='text-4xl font-bold text-center'>
        Let's learn some Japanese!
      </h1>
      <div>
        <form method='post' action='?index'>
          <button
            type='submit'
            name='_action'
            value='start_practice'
            className='bg-blue-200 mt-20'
          >
            Start Practice
          </button>
        </form>
      </div>
      <Link
        to='/words'
        className='mt-8 text-lg transition-colors bg-gray-100 hover:bg-gray-200 py-4 px-10 rounded-lg'
      >
        Manage Dictionary
      </Link>
    </div>
  )
}
