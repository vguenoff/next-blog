import Greeting from '@/components/reactgg/Greeting'
import PokemonCarousel from '@/components/reactgg/PokemonCarousel'

export default function page() {
  return (
    <main className="mt-5 flex flex-col justify-between bg-stone-700 p-5 text-white">
      <Greeting />
      <PokemonCarousel />
    </main>
  )
}
