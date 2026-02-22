import { getUserTestDrives } from "@/actions/test-drive";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReservationsList } from "./_components/reservations-list";

export const metadata = {
  title: "My Reservations | Veycle",
  description: "Manage your test drive reservations",
};

export default async function ReservationsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  }

  // Fetch reservations on the server
  const reservationsResult = await getUserTestDrives();

  return (
    <div className="container mx-auto px-4 md:px-28 py-12">
      <h1 className="text-2xl md:text-4xl mb-6 gradient-title">Your Reservations</h1>
      <ReservationsList initialData={reservationsResult} />
    </div>
  );
}
