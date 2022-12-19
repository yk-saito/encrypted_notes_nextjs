import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { Note } from '../../types/data'
import { ParsedUrlQuery } from 'node:querystring'
import Layout from '../../components/Layout'
import TextInput from '../../components/TextInput'
import Button from "../../components/Button";

// interface NoteProps {
//   note: Note
// }

// Paramsの型を定義し、ParsedUrlQueryをexntendsする
interface NoteParams extends ParsedUrlQuery {
  id: string
}

type NoteProps = InferGetStaticPropsType<typeof getStaticProps>

const notes: Note[] = [
  {
    id: 1,
    text: "First text.",
  },
  {
    id: 2,
    text: "Second text.",
  },
  {
    id: 3,
    text: "Third text.",
  },
  {
    id: 4,
    text: "aaaaaaaaaajlajsfiaiwejrngjvdksnbjvniaosjdfkawesdfaaaaaaaaaaaaaaa.",
  },
]

function getNote(id: number): Note {
  const note = notes.find(e => e.id === id)
  if (note === undefined) {
    throw new Error("not found")
  }
  return note
}

export const handleSaveNote = () => {
  alert("Push SAVE")
}

const NotePage: NextPage<NoteProps> = (props) => {
  const { note } = props
  return (
    <Layout>
      <span>NewNote {note.id}</span>
      <main className="p-4">
        < TextInput
          editText={note.text}
        />
      </main>
      <Button
        onClick={handleSaveNote}
      >
        SAVE
      </Button>
    </Layout>
  )
}

// 生成したいページのパスパラメータの組み合わせを返す
export const getStaticPaths: GetStaticPaths<NoteParams> = async () => {
  // TODO: getNotes()でノート一覧を取得
  // const notes = getNotes()

  // ノートのデータからパスを生成
  const paths = notes.map(({ id }) => ({
    params: {
      id: id.toString(),
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  // ノートに必要なデータを取得する
  console.log(`params: ${params!.id}`);
  try {
    const note = getNote(Number(params!.id))
    console.log(`note: ${note}`);
    return {
      props: {
        note,
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default NotePage