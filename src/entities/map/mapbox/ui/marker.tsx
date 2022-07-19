import {FC} from 'react';

import './marker.scss';

interface MarkerProps {
  coords: { lat: number, lng: number };
  name: string;
  id: string;
}

export const Marker: FC<MarkerProps> = ({coords, id, name}) => {
  return <div>Marker</div>;

}
