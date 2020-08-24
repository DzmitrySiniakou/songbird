const changeAnswers = (birds, id) => {
  const newArr = birds.map((birdInfo) => {
    const newBirdData = { ...birdInfo };
    if (id === birdInfo.id) {
      newBirdData.pressed = true;
      return newBirdData;
    }
    return newBirdData;
  });
  return newArr;
};

export default changeAnswers;
