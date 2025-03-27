'use client'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"

export const YandexMap = () => {

  return (
    <YMaps query={{ lang:'ru_RU' }}>
      <div>
        <Map
          defaultState={{
            center: [48.300413, 40.149768],
            zoom: 15
          }}
          className="w-2xl h-64"
        >
            <Placemark geometry={[48.300110, 40.149640]} />
          </Map>
      </div>
    </YMaps>
  )
}