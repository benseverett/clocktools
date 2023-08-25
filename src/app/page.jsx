import { TopBar } from "../components/TopBar"

export default async function Home() {
  return (
    <>

      <div className="flex ml-20 items-center justify-between bg-blue-400">
        <h2>123</h2>
        <h3>456</h3>
      </div>

      <div className="m-20 font-2xl bg-red-200">
        <p>Hello World</p>
      </div>

      <button className="bg-orange-700">
        <p className="">Click!</p>
      </button>

    </>
  )
}