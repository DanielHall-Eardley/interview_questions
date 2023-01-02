const list1 = {
  value: 3,
  next: {
    value: 6,
    next: {
      value: 10,
      next: null,
    },
  },
};

const list2 = {
  value: 2,
  next: {
    value: 5,
    next: {
      value: 7,
      next: null,
    },
  },
};

function mergeSortLinkedList(list1, list2) {
  let element1 = list1.value;
  let element2 = list2.value;
  const mergedList = {};

  while (element1 && element2) {
    if (element1 > element2) {
      //Add element2 to the mergedList
      element2 = element2.next;
    } else {
      //Add element1 to the mergedList
      element1 = element1.next;
    }
  }

  return mergedList;
}
