'use strict'

function binarySearch (key, ary) {
  let start = 0
  let end = ary.length - 1

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2)

    if (key < ary[middle]) {
      end = middle - 1
    } else if (key > ary[middle]) {
      start = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(binarySearch(1, [1, 3, 5, 7, 9, 11]))
