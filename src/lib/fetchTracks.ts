import { SavedTrack } from 'spotify-types';

const apiToken: string = 'BQBK34R0BcjfNpE2_uG_V2jjpyXvNtqje_e0Nn9sT4FE2xovEkWP-mo96gc4BCIpIj-yFJTQtAuswSAhdxewBMdE6YsLrWo9s7R6TekgF1m6OMubPsRKqEfG8QeygTmIVTps6qryQPSqIafoVNyyXhg-mTRtBSjcq9lPHUlV-dUPX-WbgPucnTCsp5xQ6ErPsXD58Ljd';

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
