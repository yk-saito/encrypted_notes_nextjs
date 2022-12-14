const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode,
  onClick?: (event: any) => void,
}) => {

  const handleSubmit = (event: any) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2"
      onClick={handleSubmit}
    >
      {children}
    </button>
  )
}

export default Button