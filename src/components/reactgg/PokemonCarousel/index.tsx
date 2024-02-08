'use client'
import { useEffect, useState } from 'react'
import Carousel from './Carousel'
import PokemonCard from './PokemonCard'

function delayFetch(url: string, delay: number): Promise<Response> {
  // 👀 The PokeAPI is too fast!
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fetch(url))
    }, delay)
  })
}

async function fetchPokemon(id: number) {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  try {
    const res = await delayFetch(`${url}/${id}`, 500)

    if (res.ok === true) {
      return {
        error: null,
        response: await res.json(),
      }
    }

    throw new Error(`Error fetching pokemon id#${id}`)
  } catch (error) {
    return {
      error,
      response: null,
    }
  }
}

export default function PokemonCarousel() {
  const [id, setId] = useState(1)
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handlePrevious = () => {
    if (id > 1) {
      setId(id - 1)
    }
  }

  const handleNext = () => setId(id + 1)

  useEffect(() => {
    async function handleFetchPokemon() {
      setLoading(true)
      setError(null)

      const { error, response } = await fetchPokemon(id)

      if (error) {
        // @ts-expect-error
        setError(error.message)
      } else {
        setPokemon(response)
      }

      setLoading(false)
    }

    handleFetchPokemon()
  }, [id])

  return (
    <div className="mt-10">
      {' '}
      <Carousel onPrevious={handlePrevious} onNext={handleNext}>
        <PokemonCard loading={loading} error={error} data={pokemon} />
      </Carousel>
    </div>
  )
}
