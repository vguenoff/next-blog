'use client'
import { default as NextImage } from 'next/image'
import { useState, useEffect } from 'react'
// @ts-expect-error
import getColors from 'image-pal-canvas'

export default function Pokemon({ loading, error, data }: any) {
  const imgUrl = data?.sprites?.other?.['official-artwork']?.front_default || ''
  const [color, setColor] = useState('transparent')
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  useEffect(() => {
    const handleLoad = () => {
      getColors(
        {
          srcUrl: imgUrl,
          mean: false,
          maxColors: 4,
          minDensity: 0.001,
          cubicCells: 27,
        },
        (_: unknown, colors: any) => {
          const [r, g, b] = colors[0].rgb
          const textColor = colors.at(-2).hex
          setColor(textColor)
          setBackgroundColor(`rgba(${r}, ${g}, ${b}, .3)`)
        },
      )
    }

    setColor('')

    const img = new Image()
    img.src = imgUrl

    img.addEventListener('load', handleLoad)
    return () => img.removeEventListener('load', handleLoad)
  }, [imgUrl])

  if (error) {
    return <div>{error}</div>
  } else {
    return (
      <div className={`card ${loading ? 'loading' : ''}`}>
        <div className="content">
          <div className="front" style={{ color, backgroundColor }}>
            <figure>
              <img width="475" height="475" src={imgUrl} alt={data?.name} />
              <figcaption>
                <h4>{data?.name}</h4>
                <h6>No:{data?.id}</h6>
              </figcaption>
            </figure>
          </div>
          <div className="back">
            <figure>
              <img width="64" height="64" src="" alt="pokemon logo" />
              <figcaption>Loading...</figcaption>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}
