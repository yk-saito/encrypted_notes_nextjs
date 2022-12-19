import { NextPage, InferGetStaticPropsType } from 'next'
import { Device } from '../types/data'
import Layout from '../components/Layout'
import Button from '../components/Button'

// InferGetStaticPropsType<typeof getStaticProps>
// getStaticProps()の返り値をもとにNotesに渡される型を類推してくれる
type DeviceProps = InferGetStaticPropsType<typeof getStaticProps>

const handleDeleteDevice = () => {
  alert(`"Push DELETE"`)
}

const Devices: NextPage<DeviceProps> = (props) => {
  const { devices } = props
  return (
    <Layout>
      <span>Devices</span>
      <main className="p-4">
        <ul className="border rounded-lg max-w-lg">
          {devices.map((device: Device) =>
            <li
              className="border-b px-3 last:border-none flex items-center"
              key={device.alias}
            >
              <code className="flex-1 py-5 font-mono">{device.alias}</code>
              <Button
                onClick={handleDeleteDevice}
              >DELETE</Button>
            </li>
          )}
        </ul>
      </main>
    </Layout >
  )
}

export const getStaticProps = async () => {
  const devices: Device[] = [
    {
      alias: "device1",
      pbkey: "PUB_KEY_1",
    }, {
      alias: "device2",
      pbkey: "PUB_KEY_2",
    }, {
      alias: "device3",
      pbkey: "PUB_KEY_3",
    },
  ]

  return {
    props: {
      devices,
    },
    revalidate: 60,
  }
}


export default Devices