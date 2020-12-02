const _ = {
  clamp(number, lower, upper) {
    const clampedByLower = Math.max(number, lower);
    const clampedNumber = Math.min(clampedByLower, upper);
    return clampedNumber;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = 0;
    }
    if (start > end) {
      [start, end] = [end, start];
    }
    const finalCheck = (number, start, end) => {
      if (start <= number && number < end) {
        return true;
      } else {
        return false;
      }
    };
    return finalCheck(number, start, end);
  },
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let padNumber = length - string.length;
    let padResult = " ";
    let emptySpace = " ";
    if (padNumber % 2 === 0) {
      padResult =
        emptySpace.repeat(padNumber / 2) +
        string +
        emptySpace.repeat(padNumber / 2);
    } else if (padNumber % 2 !== 0) {
      padResult =
        emptySpace.repeat((padNumber - (padNumber % 2)) / 2) +
        string +
        emptySpace.repeat((padNumber - (padNumber % 2)) / 2) +
        emptySpace.repeat(padNumber % 2);
    }
    return padResult;
  },
  has(object, key) {
    if (object[key] !== undefined) {
      return true;
    } else if (object[key] === undefined) {
      return false;
    }
  },
  invert(object) {
    let invertedObject = {};
    for (let eachKey in object) {
      let originalValue = object[eachKey];
      invertedObject[originalValue] = eachKey;
    }
    return invertedObject;
  },
  findKey(object, predFunction) {
    for (let eachKeyValue in object) {
      let checkFunc = predFunction(object[eachKeyValue]);
      if (checkFunc === true) {
        return eachKeyValue;
      }
      return undefined;
    }
  },
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedPart = array.splice(0, n);
    return array;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    let arrayChunks = [];
    for (i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};
