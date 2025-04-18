'use client';

import { useState, useEffect } from "react";
import { addClient, getClients, deleteClient } from "@/utils/firestore";
import { auth } from "@/utils/firebase";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch clients on mount
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const data = await getClients();
    setClients(data);
  };

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
  
    await addClient({ name, email, goal, coachId: user.uid });
  
    setName("");
    setEmail("");
    setGoal("");
    setSuccess("Client added successfully!");
  
    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  
    fetchClients();
  };
  

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");
    if (!confirmDelete) return;
    await deleteClient(id);
    fetchClients();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleAddClient} className="space-y-3 mb-6">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Client Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Client Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add Client
        </button>
      </form>

      <div className="space-y-2">
        {clients.map((client) => (
          <div
            key={client.id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{client.name}</p>
              <p className="text-sm text-gray-600">{client.email} – {client.goal}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 text-sm"
              onClick={() => handleDelete(client.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
