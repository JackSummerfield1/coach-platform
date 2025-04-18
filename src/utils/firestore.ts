import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const clientsCollection = collection(db, "clients");

// Add new client
export async function addClient(data: {
  name: string;
  email: string;
  goal: string;
  coachId: string;
}) {
  return await addDoc(clientsCollection, data);
}

// Get all clients for a specific coach
export async function getClients() {
  const snapshot = await getDocs(clientsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Delete client
export async function deleteClient(id: string) {
  return await deleteDoc(doc(db, "clients", id));
}
