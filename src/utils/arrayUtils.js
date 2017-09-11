/*
Function that receive a list and a index to remove a element list.
Function find the element to remove by id, and then create a new list without the element.
Params:
  list: array of objects
  id: number
*/

export const removeArrayElementById = (list, id) => {
  const elementIndex = list.findIndex(element => element.id === id);
  return list.slice(0, elementIndex).concat(list.slice(elementIndex + 1, list.length));
};
