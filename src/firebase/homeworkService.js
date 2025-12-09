// homeworkService.js
import { db } from "./firebaseConfig";
import { 
  ref, 
  push, 
  set, 
  onValue, 
  remove, 
  update, 
  query, 
  orderByChild
} from "firebase/database";

// Function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  return new Date().toISOString().slice(0, 10);
};

// Function to get tomorrow's date in YYYY-MM-DD format
const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10);
};

// Check if Firebase is initialized
const checkFirebaseInitialized = () => {
  if (!db) {
    console.error("Firebase is not initialized. Check firebaseConfig.js");
    return false;
  }
  return true;
};

// Add homework to Firebase Realtime Database
export const addHomework = async (selectedClass, subject, homework) => {
  try {
    if (!checkFirebaseInitialized()) {
      throw new Error("Firebase not initialized");
    }

    const today = getTodayDate();
    const homeworkRef = ref(db, `homework/${selectedClass}/${today}`);
    
    // Create a new reference with a unique ID
    const newHomeworkRef = push(homeworkRef);
    
    // Set the data at the new reference
    await set(newHomeworkRef, {
      id: newHomeworkRef.key,
      subject,
      homework,
      class: selectedClass,
      date: today,
      createdAt: new Date().toISOString(),
      expiresAt: getTomorrowDate()
    });
    
    console.log("Homework added successfully:", newHomeworkRef.key);
    return { success: true, id: newHomeworkRef.key };
  } catch (error) {
    console.error("Error adding homework:", error);
    throw error;
  }
};

// Fetch homework realtime
export const fetchHomeworkRealtime = (selectedClass, callback) => {
  try {
    if (!checkFirebaseInitialized()) {
      console.error("Firebase not initialized");
      return () => {};
    }

    const today = getTodayDate();
    const homeworkRef = ref(db, `homework/${selectedClass}/${today}`);
    
    // Listen for realtime changes
    const unsubscribe = onValue(homeworkRef, (snapshot) => {
      const homeworkList = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          homeworkList.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
      }
      
      // Sort by subject
      homeworkList.sort((a, b) => a.subject.localeCompare(b.subject));
      
      callback(homeworkList);
    }, (error) => {
      console.error("Error in realtime listener:", error);
    });
    
    return unsubscribe;
  } catch (error) {
    console.error("Error setting up realtime listener:", error);
    return () => {}; // Return empty unsubscribe function
  }
};

// Delete homework by id
export const deleteHomework = async (selectedClass, id) => {
  try {
    if (!checkFirebaseInitialized()) {
      throw new Error("Firebase not initialized");
    }

    const today = getTodayDate();
    const homeworkRef = ref(db, `homework/${selectedClass}/${today}/${id}`);
    await remove(homeworkRef);
    console.log("Homework deleted successfully:", id);
    return { success: true };
  } catch (error) {
    console.error("Error deleting homework:", error);
    throw error;
  }
};

// Update homework by id
export const updateHomework = async (selectedClass, id, subject, homework) => {
  try {
    if (!checkFirebaseInitialized()) {
      throw new Error("Firebase not initialized");
    }

    const today = getTodayDate();
    const homeworkRef = ref(db, `homework/${selectedClass}/${today}/${id}`);
    
    await update(homeworkRef, {
      subject,
      homework,
      updatedAt: new Date().toISOString()
    });
    
    console.log("Homework updated successfully:", id);
    return { success: true };
  } catch (error) {
    console.error("Error updating homework:", error);
    throw error;
  }
};

// Auto-delete yesterday's homework (simplified version)
export const cleanupOldHomework = async () => {
  try {
    if (!checkFirebaseInitialized()) {
      console.error("Firebase not initialized for cleanup");
      return;
    }

    console.log("Cleanup old homework started...");
    // For now, just log that cleanup would happen
    // We'll implement actual cleanup once Firebase is working
    const today = getTodayDate();
    console.log(`Today's date: ${today}`);
    console.log("Cleanup would delete homework older than:", today);
    
    return { success: true, message: "Cleanup scheduled" };
  } catch (error) {
    console.error("Error in cleanupOldHomework:", error);
  }
};

// Run cleanup on app start (but don't call if Firebase not initialized)
if (checkFirebaseInitialized()) {
  cleanupOldHomework();
}