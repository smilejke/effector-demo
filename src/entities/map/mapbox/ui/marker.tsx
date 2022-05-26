import {FC} from 'react';

import './marker.scss';

interface MarkerProps {
  center: [number, number];
  name: string;
  id: string;
}

export const Marker: FC<MarkerProps> = ({center, id, name}) => {
  return <div>Marker</div>;

}
