'use client';
import { YMaps, Map } from '@pbe/react-yandex-maps';
const apiKey = process.env.API_KEY;

const MapComponent = ({
  defaultCenter = [55.751574, 37.573856],
  defaultZoom = 9,
}) => {
  return (
    <YMaps
      query={{
        apikey: apiKey,
        lang: 'ru_RU',
      }}
    >
      <Map
        defaultState={{ center: defaultCenter, zoom: defaultZoom }}
        width={'100%'}
        height={'400px'}
      />
    </YMaps>
  );
};

export default MapComponent;
