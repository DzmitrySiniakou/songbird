const getRequest = async (url) => {
  const rawData = await fetch(url);
  const data = await rawData.json();
  return data;
};

export default getRequest;
