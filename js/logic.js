function getRandomItems(arr, numItems) {
  const copy = [...arr];
  const result = [];

  numItems = Math.min(numItems, copy.length);

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    result.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }

  return result.join('');
}

export default getRandomItems;
