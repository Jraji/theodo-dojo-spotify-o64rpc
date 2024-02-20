import { SavedTrack } from 'spotify-types';

const apiToken: string = 'BQBAa7EWbI18tR0wQt2h2_OiXwqJqU2Jp8Sy_IPD2P8BcQrOhtrex5vjE-5OJhCGnIOJmHEJlJzPwamnHLYw3uOKFQ1vj_PYcK2zhoZgbcA-z9cImQjw5E2sco5KBMychoP9fx3Dh9VWdK7rkJULRJ1Ab9cyy0pSsBJE826g2hY6u-OCwOplWNf81xOOO3ekQR9uASQI';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
