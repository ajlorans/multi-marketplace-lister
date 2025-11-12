// app/(dashboard)/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Welcome back{user?.firstName ? `, ${user.firstName}` : ""}!
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          This is your command center for syncing products across marketplaces.
        </p>
      </div>

      <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-500">
        Start by adding products or connecting a marketplace adapter. We’ll
        surface recent sync activity and job health here soon.
      </div>
    </section>
  );
}
