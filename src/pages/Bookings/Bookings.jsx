// import { useContext} from "react";
import { useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useAuth();
  // const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] = useState([]);

  const url = `/bookings?email=${user?.email}`;
  // const url = ` https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data));

    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    // fetch(url,{credentials: include})
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure want to delete");
    if (proceed) {
      fetch(
        ` https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/bookings/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted success");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(
      ` https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/bookings/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // updated State
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "Confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Your bookings : {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
