import Button from '../components/Button'
import Layout from '../components/Layout'
import TextInput from '../components/TextInput'

const handleAddNote = () => {
  // TODO Call addNote

  alert("Push ADD")
}

const NewNote = () => {
  return (
    <Layout>
      <span>NewNote</span>
      <main className="p-4">
        < TextInput />
      </main>
      <Button
        onClick={handleAddNote}
      >
        ADD
      </Button>
    </Layout>
  )
}

export default NewNote