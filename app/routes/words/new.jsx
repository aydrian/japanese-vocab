import { redirect } from 'remix'
import { db } from '~/utils/db.server'

export const action = async ({ request }) => {
  const form = await request.formData()
  const romaji = form.get('romaji')
  const hiragana = form.get('hiragana')
  const english = form.get('english')

  await db.word.create({ data: { romaji, hiragana, english } })

  return redirect(`/words`)
}

export default function WordsNewRoute() {
  return (
    <div className='text-center'>
      <h2 className='my-10 text-3xl'>Add a new word</h2>
      <form method='post' className='flex flex-col'>
        <input type='text' name='romaji' placeholder='Romanji...' />
        <input type='text' name='hiragana' placeholder='Hiragana...' />
        <input type='text' name='english' placeholder='English...' />
        <button
          type='submit'
          name='_action'
          value='add'
          className='bg-blue-200 mt-10'
        >
          Add
        </button>
      </form>
    </div>
  )
}
