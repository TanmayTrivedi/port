import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path if needed

export async function incrementVisitCount() {
  const visitRef = doc(db, "siteMetrics", "visits");
  try {
    // Try to increment the count
    await updateDoc(visitRef, { count: increment(1) });
  } catch (error) {
    // If updateDoc fails (usually because doc doesn't exist), create the doc with count: 1
    // Optionally, check error.message to confirm it's a "No document to update" error
    await setDoc(visitRef, { count: 1 }, { merge: true });
  }
}

export async function getVisitCount() {
  const visitRef = doc(db, "siteMetrics", "visits");
  const snap = await getDoc(visitRef);
  if (snap.exists()) {
    return snap.data().count;
  }
  return 0;
}
