interface TextInputProps {
  editText?: string
}

const TextInput = ({
  editText
}: TextInputProps) => {
  return (
    <textarea
      id="message"
      rows={4}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Your message..."
    >
      {editText}
    </textarea>
  )
}

export default TextInput