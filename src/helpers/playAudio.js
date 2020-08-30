function playAudio(name) {
  const RANDOM_AUDIO = new Audio(`../sounds/${name}.mp3`);
  RANDOM_AUDIO.autoplay = 'true';
}

export default playAudio;
