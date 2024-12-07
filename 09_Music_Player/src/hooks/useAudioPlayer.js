import { useState, useRef } from "react";

const useAudioPlayer = (playlist) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(playlist[currentTrackIndex].src));

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioPlayer.current.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    pause();
    setCurrentTrackIndex((preIndex) => (preIndex + 1) % playlist.length);
  };

  const prevTrack = () => {
    pause();
    setCurrentTrackIndex((preIndex) =>
      preIndex === 0 ? playlist.length - 1 : preIndex - 1
    );
  };

  // Update audio source when track changes
  audioRef.current.src = playlist[currentTrackIndex].src;

  return {
    currentTrack: playlist[currentTrackIndex],
    isPlaying,
    play,
    pause,
    nextTrack,
    prevTrack,
  };
};

export default useAudioPlayer;
