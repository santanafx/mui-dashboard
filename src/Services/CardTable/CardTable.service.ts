import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../../../firebaseConfig.js';
import { FoodTableProps } from '../../components/Molecules/CardTable/CardTable.interface.js';

const foodCollection = collection(db, 'foods');

export const getFoodTable = async () => {
  try {
    const data = await getDocs(foodCollection);
    const allData = data.docs.map((doc) => ({
      name: doc.data().name,
      calories: doc.data().calories,
      fat: doc.data().fat,
      carbs: doc.data().carbs,
      protein: doc.data().protein,
      id: doc.id,
    }));
    return allData;
  } catch (error) {
    console.error(error);
  }
};

export const addFood = async (foodInfo: FoodTableProps) => {
  try {
    await addDoc(foodCollection, {
      name: foodInfo.name,
      calories: foodInfo.calories,
      fat: foodInfo.fat,
      carbs: foodInfo.carbs,
      protein: foodInfo.protein,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteFood = async (id: string) => {
  const foodDoc = doc(db, 'foods', id);
  try {
    await deleteDoc(foodDoc);
  } catch (error) {
    console.error(error);
  }
};

export const editFood = async (id: string, foodInfo: FoodTableProps) => {
  const foodDoc = doc(db, 'foods', id);
  try {
    await updateDoc(foodDoc, {
      name: foodInfo.name,
      calories: foodInfo.calories,
      fat: foodInfo.fat,
      carbs: foodInfo.carbs,
      protein: foodInfo.protein,
    });
  } catch (error) {
    console.error(error);
  }
};
