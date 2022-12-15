import Layout from '../components/Layout'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Note } from '../types/data'

type NotesProps = InferGetStaticPropsType<typeof getStaticProps>

const Notes: NextPage<NotesProps> = ({ notes }: NotesProps) => {
  return (
    <Layout>
      <span>Your Notes</span>

      <main className="p-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-7xl"
        >
          {notes.map((note: Note) =>
            <div
              className="p-4 rounded-md border border-base-300 bg-base hover:-translate-y-2 transition-transform truncate"
              key={note.id}
            >
              <Link href={`/notes/${note.id}`} passHref>
                <div className="pointer-events-none">
                  <h2 className="text-lg font-bold mb-2 line-clamp-3">
                    <span className="text-gray-500">{note.text}</span>
                  </h2>
                </div>
              </Link>
            </div>
          )}
        </div>
      </main>
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notes: Note[] = [
    {
      id: 1,
      text: "First text.",
    }, {
      id: 2,
      text: "Second text.",
    }, {
      id: 3,
      text: "Third text.",
    }, {
      id: 5,
      text: "aaaaaaaaaajlajsfiaiwejrngjvdksnbjvniaosjdfkawesdfaaaaaaaaaaaaaaa.",
    },
  ]

  return {
    props: {
      notes,
    },
    revalidate: 60,
  }
}

export default Notes