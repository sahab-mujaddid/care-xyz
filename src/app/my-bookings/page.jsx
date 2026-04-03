"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import withAuth from "@/hoc/withAuth";
const Page = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/register/booking");
        const data = await res.json();

       
        if (session?.user?.email) {
          const userBookings = data.filter(
            (booking) => booking.userEmail === session.user.email
          );
          setBookings(userBookings);
        } else {
          setBookings([]);
        }
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchBookings();
    } else if (status !== "loading") {
      setLoading(false);
    }
  }, [session, status]);

  if (loading) {
    return <p className="text-center mt-10">Loading bookings...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-base-300 shadow-md">
          <thead className="bg-base-200">
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Location</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.serviceTitle}</td>
                <td>
                  {booking.duration} {booking.durationType}
                </td>
                <td>
                  {booking.division}, {booking.district}, {booking.city}
                </td>
                <td>{booking.totalCost} Taka</td>
                <td>{booking.status || "Pending"}</td>
                <td>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Cancel Booking
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No bookings found for your account.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAuth(Page);
