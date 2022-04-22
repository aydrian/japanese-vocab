import { redirect, useLoaderData } from 'remix'
import { db } from '~/utils/db.server'

export const loader = async ({ params }) => {
  const word = await db.word.findUnique({
    where: { id: params.wordId },
  })

  return { word }
}

export const action = async ({ params, request }) => {
  const form = await request.formData()
  const romaji = form.get('romaji')
  const hiragana = form.get('hiragana')
  const english = form.get('english')

  await db.word.update({
    data: { romaji, hiragana, english },
    where: { id: params.wordId },
  })

  return redirect(`/words`)
}

export default function WordsNewRoute() {
  const data = useLoaderData()
  return (
    <div className='text-center'>
      <h2 className='my-10 text-3xl'>Edit a word</h2>
      <form method='post' className='flex flex-col'>
        <input
          type='text'
          name='romaji'
          defaultValue={data.word.romaji}
          placeholder='Romanji...'
        />
        <input
          type='text'
          name='hiragana'
          defaultValue={data.word.hiragana}
          placeholder='Hiragana'
        />

        <input
          type='text'
          name='english'
          defaultValue={data.word.english}
          placeholder='English'
        />
        <button
          type='submit'
          name='_action'
          value='add'
          className='bg-blue-200 mt-10'
        >
          Update
        </button>
      </form>
    </div>
  )
}
