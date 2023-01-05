const storage = {
  save: (key, value) => {
    try {
      const serializedState = JSON.stringify(value);

      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.log(`Set state error: ${error.message}`);
    }
  },
  get: key => {
    try {
      const serializedState = localStorage.getItem(key);

      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.log(`Get state error: ${error.message}`);
    }
  },
  delete: key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default storage;
