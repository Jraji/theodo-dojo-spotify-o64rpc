import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';
import { SavedTrack } from 'spotify-types';

const AlbumCover = ({ track }:{track : SavedTrack}) =>  {
  const src = "https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4"; 
  return (
      <img src={src} style={{ width: 400, height: 400 }} />
  );}

const App = () => {

  const [trackIndex, setTrackIndex] = useState(0)
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }

  const { data: tracks, isLoading, isSuccess} = useQuery({
		queryKey: ['tracks'],
		queryFn: fetchTracks
  });
  if (isSuccess){
    console.log (tracks) 
    tracks.length
  }

  const currentTrack = tracks ? tracks[trackIndex] : undefined


    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test de </h1>
      </header>
      <div className="App-images">
      {currentTrack ? <AlbumCover track={currentTrack} />:<p>loading</p>}
  
      {tracks ? tracks[0]?.track.name:"loading"}

      <audio src={currentTrack?.track.preview_url} autoPlay controls />
<button onClick={goToNextTrack}>
    Next track
</button>
      
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
