export const getGifs = async (category) => {
  const key = "EUtrAGNFXRvgfNeerW22qVVShgKEh530";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium?.url,
    };
  });
  return gifs;
};
