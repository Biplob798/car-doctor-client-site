// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const services = useServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(" https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className="my-6">
      <div className="text-center space-y-4 p-4">
        <h3 className="text-[#FF3811] font-bold">Our Services</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="card-actions flex justify-center items-center my-6">
        <button className="btn btn-primary text-[#ff3811] bg-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
