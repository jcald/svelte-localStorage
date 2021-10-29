// utils/createPersistentStore.js
import { writable } from 'svelte/store';

export default function createPersistentStore(id, storage) {
  const initialState = storage
    ? JSON.parse(storage.getItem(id) || '{}')
    : {};

  const store = writable(initialState);

  store.subscribe((state) => {
    if (storage) {
      storage.setItem(id, JSON.stringify(state));
    }
  });

  return store;
}