import { db } from "@/lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore/lite";
import { logDev } from "@/lib/utils";

export async function fetchUserHoldings(uid: string) {
  const docRef = doc(db, "holdings", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    logDev("No document found for user's holdings");
    throw new Error("No record exists");
  }

  return docSnap.data();
}
