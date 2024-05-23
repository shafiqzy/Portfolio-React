import { AsyncEncryptStorage } from "encrypt-storage";
import { STORAGE_KEY } from "src/constant/index";

// Initialize the key variable to an empty string
let key = "";

// Check if the key already exists in the sessionStorage
if (sessionStorage.getItem("key")) {
  // Generate a new key using the window.crypto.getRandomValues() method
  const array = new Uint32Array(1);
  key = "ywojdpiawqa" + window.crypto.getRandomValues(array).toString() + "=";

  // Store the new key in the sessionStorage
  sessionStorage.setItem("key", key);
}

// Create a new instance of AsyncEncryptStorage with the key and options
const asyncEncrypStorage = new AsyncEncryptStorage(
  key ? key : sessionStorage.getItem("key") ?? "",
  {
    storageType: "sessionStorage", // Use sessionStorage as the storage type
    stateManagementUse: true, // Enable state management use
  }
);

// set a value in the sessionStorage
export const encryptedStorageSetItem = async (key: STORAGE_KEY, value: any) => {
  return await asyncEncrypStorage.setItem(key, JSON.stringify(value));
};

// get a value in the sessionStorage
export const encryptedStorageGetItem = async (key: STORAGE_KEY) => {
  return await asyncEncrypStorage.getItem(key);
};

// remove value in the sessionStorage
export const encryptedStorageRemoveAuth = async () => {
  await asyncEncrypStorage.removeItem(STORAGE_KEY.AUTH);
  // ... can add more
};

// clear all keys from the sessionStorage
export const encryptedStorageClearItem = async () => {
  return await asyncEncrypStorage.clear();
};
