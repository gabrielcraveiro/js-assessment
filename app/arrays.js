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
  },

  append: function (arr, item) {
    let arr2 = arr;
    arr2.push(item);
    return arr2;
  },

  truncate: function (arr) {
    let arr2 = arr;
    arr2.pop();
    return arr2;
  },

  prepend: function (arr, item) {

  },

  curtail: function (arr) {

  },

  concat: function (arr1, arr2) {

  },

  insert: function (arr, item, index) {

  },

  count: function (arr, item) {

  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};