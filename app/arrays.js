exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((a, b) => a + b);
  },

  remove: function (arr, item) {
    return arr.filter(x => x !== item);
  },

  removeWithoutCopy: function (arr, item) {
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    let arr2 = arr;
    arr2.shift();
    return arr2;
  },

  concat: function (arr1, arr2) {
    let arrConcat = arr1.concat(arr2);
    return arrConcat;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    let counter = 0;
    arr.map(x => {
      if (x === item) {
        counter++;
      }
    });
    return counter;
  },

  duplicates: function (arr) {
  },

  square: function (arr) {
    arr.forEach(x =>{
      x *= x;
    });
    console.log(arr);
    return arr;
  },

  findAllOccurrences: function (arr, target) {

  }
};