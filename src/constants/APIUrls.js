const getBirdAudio = async (birdName) => {
  const rawResponse = await fetch(`https://www.xeno-canto.org/api/2/recordings?query=${birdName}`);
  const response = await rawResponse.text();
  await console.log(response);
};

const API_URLS = {
  BIRD_AUDIO: async (birdName) => getBirdAudio(birdName),
  BIRD_IMG: async (birdName) => `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOUR API KEY&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=${birdName}`,
};

export default API_URLS;
