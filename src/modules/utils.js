function sortObjectArray(array, sortProperty = 'index', order = 'asc') {
  return array.reduce((prev, curr) => {
    prev.push(curr);
    return prev.sort((item1, item2) => (order === 'asc'
      ? item1[sortProperty] - item2[sortProperty]
      : item2[sortProperty] - item1[sortProperty]));
  }, []);
}

function createElement(tagName = 'div', options = {}) {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([name, value]) => {
    if (['class', 'id', 'style'].includes(name)) {
      element.setAttribute(name, value);
    } else {
      element[name] = value;
    }
  });
  return element;
}

function $(query) {
  const result = document.querySelectorAll(query);
  return result.length > 1 ? result : result[0];
}

export { sortObjectArray, createElement, $ };
