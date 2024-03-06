
const helper = {

  // shuffle and array into random positioned elements
  shuffleArray(arr: any[]): Array<any> {

    for (let i = arr.length - 1; i > 0; i--) {
      // generate a random index
      const j = Math.floor(Math.random() * (i + 1));
      // swap each index with a random position
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }
};

export default helper;