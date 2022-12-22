function getCharacterLength(str) {
    // The string iterator that is used here iterates over characters,
    // not mere code units
    return [...str].length;
  }
  
  console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
  