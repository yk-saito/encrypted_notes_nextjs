import Link from 'next/link'

const category = "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"

const Sidebar = () => {
  return (
    <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2">
      <div className="flex items-center justify-center mt-10">
        <Link href="/">Encrypted Notes</Link>
      </div>
      <nav className="mit-10">
        <Link href="/newNote" className={category}>
          <span>New Note</span>
        </Link>
        <Link href="/notes" className={category}>
          <span>Your Notes</span>
        </Link>
        <Link href="/devices" className={category}>
          <span>Devices</span>
        </Link>
        <Link href="/" className={category}>
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar