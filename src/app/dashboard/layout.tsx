'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Clients", path: "/dashboard/clients" },
  { name: "Messages", path: "/dashboard/messages" },
  { name: "Payments", path: "/dashboard/payments" },
  { name: "Leads", path: "/dashboard/leads" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-white shadow-md p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">CoachFlow</h2>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-3 py-2 rounded hover:bg-blue-100 ${
              pathname === item.path ? "bg-blue-200 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
