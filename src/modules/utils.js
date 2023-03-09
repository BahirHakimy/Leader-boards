const sortObjectArray = (array, sortProperty = 'index', order = 'asc') => array.reduce((prev, curr) => {
  prev.push(curr);
  return prev.sort((item1, item2) => (order === 'asc'
    ? item1[sortProperty] - item2[sortProperty]
    : item2[sortProperty] - item1[sortProperty]));
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

const showToast = (
  msg,
  callback,
  buttonText = 'OK',
  anchor = $('#toastContainer'),
) => {
  const toast = createElement('li', {
    class:
      'backdrop-blur-lg shadow-md border rounded-md animate-[pop_0.5s_linear_1] my-2',
  });
  const messageContainer = createElement('div', {
    class: 'px-4 py-2 space-x-2 flex justify-center items-center',
    innerHTML: `<i class="fa-solid fa-circle-check text-blue-600 text-2xl"></i>
  <p>${msg}</p>`,
  });
  const action = createElement('button', {
    class:
      'shadow-md px-2 py-1 bg-[#25f3] text-white rounded hover:bg-[#25f5] active:shadow-inner',
    textContent: buttonText,
  });
  const slider = createElement('div', {
    class:
      'w-full h-1 bg-blue-300 mt-2 animate-[slide_3s_linear_1_forwards] mx-auto',
  });
  messageContainer.appendChild(action);
  toast.append(messageContainer, slider);
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

export {
  sortObjectArray, createElement, $, showToast,
};
