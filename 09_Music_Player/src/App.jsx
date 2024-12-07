import "./App.css";
import Controls from "./components/Controls";
import Playlist from "./components/Playlist";
import TrackDetails from "./components/TrackDetails";
import useAudioPlayer from "./hooks/useAudioPlayer";

const playlist = [
  {
    id: 1,
    title: "Track 1",
    artist: "Artist 1",
    src: "/assets/music/track1.mp3",
    cover: "/assets/images/track1.jpg",
  },
  {
    id: 2,
    title: "Track 2",
    artist: "Artist 2",
    src: "/assets/music/track2.mp3",
    cover: "/assets/images/track2.jpg",
  },
];

function App() {
  const { currentTrack, isPlaying, play, pause, prevTrack, nextTrack } =
    useAudioPlayer();

  return (
    <div className="app">
      <TrackDetails track={currentTrack} />
      <Controls
        isPlaying={isPlaying}
        onPlay={play}
        onPause={pause}
        onNext={nextTrack}
        onPrev={prevTrack}
      />
      <Playlist
        playlist={playlist}
        onSelect={(index) => (currentTrack.index = index)}
      />
    </div>
  );
}

export default App;
