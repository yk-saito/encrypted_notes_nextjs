import Head from 'next/head'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const dappName = "Encrypted Notes"

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{dappName}</title>
      </Head>
      <div className="flex bg-gray-100 min-h-screen w-screen">
        <Sidebar />
        <main className="w-full p-4">{children}</main>
      </div>
    </>
  )
}

export default Layout