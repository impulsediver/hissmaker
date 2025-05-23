import { useRef, useState } from "react";
import SoundPlayer from "react-native-sound-player";

/** */
const SOUND_FILES: number[] = [
  require("./assets/sample_audio_ding.mp3"),
  require("./assets/sample_audio_tune.mp3"),
];

/** */
export function useSound() {
  const lastPlayedIndex = useRef<number>(-1);
  let repeatInterval: NodeJS.Timeout | undefined = undefined;

  const [timeLeft, setTimeLeft] = useState<number>(0);

  /** 다음에 재생할 소리를 반환합니다. 직전에 재생한 소리는 제외하고 추출합니다. */
  function getNextSound() {
    const nextIndex = Math.floor(Math.random() * SOUND_FILES.length);
    if (nextIndex === lastPlayedIndex.current) {
      return getNextSound();
    }
    lastPlayedIndex.current = nextIndex;
    return SOUND_FILES[nextIndex];
  }

  /** */
  function playRandomSound() {
    SoundPlayer.playAsset(getNextSound());
  }

  /** */
  function repeatSound() {}

  /** */
  function stopSound() {}

  return {
    timeLeft,
    playRandomSound,
    repeatSound,
    stopSound,
  };
}
