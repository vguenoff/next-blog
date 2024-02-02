'use client'
import { useState } from 'react'

function Greeting({ name = 'Tyler' }: { name?: string }) {
  const [index, setIndex] = useState(Number(localStorage.getItem('index')))

  const greetings = ['Hello', 'Hola', 'Bonjour']

  // useEffect works by removing the side effect from React's rendering flow and delaying its execution until after the component has rendered.

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1
    setIndex(nextIndex)

    localStorage.setItem('index', String(nextIndex))
  }

  return (
    <>
      <h1 className="text-4xl">
        {greetings[index]}, {name}
      </h1>
      <button
        className="mt-2 rounded-md bg-yellow-500 p-2 text-black"
        onClick={handleClick}
      >
        Next Greeting
      </button>
    </>
  )
}

export default function page() {
  return (
    <main className="mt-5 bg-stone-700 p-5 text-white">
      <Greeting />
    </main>
  )
}
