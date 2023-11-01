import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;

  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      price: price,
    };
    console.log(booking);

    fetch("https://car-doctor-server-six-rust.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book success");
        }
      });
  };

  return (
    <form onSubmit={handleBookService} className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            name="dueAmount"
            defaultValue={" $ " + price}
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="form-control mt-6">
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Order Confirm"
        />
      </div>
    </form>
  );
};

export default CheckOut;
