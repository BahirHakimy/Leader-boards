const showToast = (
  msg,
  callback,
  buttonText = 'View',
  anchor = document.body
) => {
  const toast = document.createElement('div');
  const message = document.createElement('p');
  const action = document.createElement('button');
  const slider = document.createElement('div');
  toast.className = 'toast';
  message.className = 'message';
  action.className = 'action';
  slider.className = 'slider';
  message.textContent = msg;
  action.textContent = buttonText;
  toast.append(message, action, slider);
  anchor.prepend(toast);
  const id = setTimeout(() => {
    anchor.removeChild(toast);
  }, 3000);
  action.onclick = () => {
    callback?.();
    clearTimeout(id);
    anchor.removeChild(toast);
  };
};

const sortObjectArray = (array, sortProperty = 'index', order = 'asc') =>
  array.reduce((prev, curr) => {
    prev.push(curr);
    return prev.sort((item1, item2) =>
      order === 'asc'
        ? item1[sortProperty] - item2[sortProperty]
        : item2[sortProperty] - item1[sortProperty]
    );
  }, []);

const createElement = (tagName = 'div', options = {}) => {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([name, value]) => {
    if (['class', 'id', 'style'].includes(name)) {
      element.setAttribute(name, value);
    } else {
      element[name] = value;
    }
  });
  return element;
};

const $ = (query) => {
  const result = document.querySelectorAll(query);
  return result.length > 1 ? result : result[0];
};

export { sortObjectArray, createElement, $, showToast };
