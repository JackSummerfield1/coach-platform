'use client';

import { auth } from "@/utils/firebase";

export default function Home() {
  console.log("✅ Firebase Auth instance:", auth);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Firebase is Live 🚀
      </h1>
    </main>
  );
}
