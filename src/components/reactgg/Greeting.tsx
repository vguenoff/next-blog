'use client'
import { useEffect, useState } from 'react'

export default function Greeting({ name = 'Tyler' }: { name?: string }) {
  // Rule 0
  // Move all side effects out of reacts rendering flow
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  const greetings = ['Hello', 'Hola', 'Bonjour']

  // Rule 1
  // Event handlers can trigger rendering, but they aren't part of it.
  // So side effects should be put inside event handlers whenever possible
  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1
    setIndex(nextIndex)

    localStorage.setItem('index', String(nextIndex))
  }

  // Rule 2
  // Syncing with external systems
  // useEffect works by removing the side effect from React's rendering flow
  // and delaying its execution until after the component has rendered.
  useEffect(() => {
    const item = localStorage.getItem('index')
    if (item) {
      setIndex(Number(item))
    }
    setShow(true)
  }, [])

  return (
    <>
      {show && (
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
      )}
    </>
  )
}
