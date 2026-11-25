import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem(key);

        if (storedState !== null) {
          setState(JSON.parse(storedState));
        }
      } catch (error) {
        console.error("Failed to load state", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadState();
  }, [key]);

  useEffect(() => {
    if (!isLoaded) return;

    const saveState = async () => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save state", error);
      }
    };

    saveState();
  }, [key, state, isLoaded]);

  return [state, setState];
}
