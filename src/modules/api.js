const get = async (url, configs) => {
  try {
    const response = await fetch(url, { ...configs });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } catch (error) {
    throw new Error('Please check your connection');
  }
};

const post = async (url, data, configs) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      ...configs,
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } catch (error) {
    throw new Error('Please check your connection');
  }
};

export default { get, post };
