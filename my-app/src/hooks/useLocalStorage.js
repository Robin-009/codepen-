import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
  // Add a prefix to the key to avoid conflicts with other localStorage items
  const prefixedKey = PREFIX + key;

  // Initialize state with the value from localStorage or the initial value
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  // Return the current value and a function to update it
  return [value, setValue];
}
