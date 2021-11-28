import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value;
  } catch(e) {
    // error reading value
  }
}

export const isLoggedIn = async () => {
  const key = await AsyncStorage.getItem('jwt');
  if(key){
    return true;
  } else{
    return false;
  }
}
  