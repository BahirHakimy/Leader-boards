const get = async (url, configs) => {
  const response = await fetch(url, { ...configs });
  if (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } else {
    throw new Error(
      'Connection failed, please check the address and make sure you have internet',
    );
  }
};

const post = async (url, data, configs) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    ...configs,
  });
  if (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } else {
    throw new Error(
      'Connection failed, please check the address and make sure you have internet',
    );
  }
};

export default { get, post };
