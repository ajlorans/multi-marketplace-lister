// app/(dashboard)/layout.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/dashboard/listings", label: "Listings" },
  { href: "/dashboard/jobs", label: "Jobs" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="flex min-h-screen bg-zinc-50">
          <aside className="hidden w-64 flex-col border-r bg-white p-6 sm:flex">
            <div className="text-xl font-semibold">Multi-Marketplace</div>
            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="flex flex-1 flex-col">
            <header className="flex h-16 items-center justify-between border-b bg-white px-6">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </header>
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
