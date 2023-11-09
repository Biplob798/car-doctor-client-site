// import { useEffect } from "react";
// import { useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  // short
  const [asc, setAsc] = useState(true);
  // const [min, setMi] = useState(undefined);
  // const [max, setMax] = useState(undefined);

  // search state
  const [search, setSearch] = useState("");

  const services = useServices(asc, search);

  // const [services, setServices] = useState([]);

  // useEffect(() => {
  // fetch(" https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services")

  // sort api dyinamik korte hobya

  // fetch(" https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services?sort=${asc? 'asc' : 'desc'}")
  // text search api
  // fetch(" https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services?search=${search}")

  // othoba sort & search akshatheya pathano jai
  // / fetch(" https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/sort=${asc? 'asc' : 'desc'}&services?search=${search}")

  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //       console.log(data);
  //     });
  // }, []);

  // search handle

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };

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

        {/* search form  */}
        <form onSubmit={handleSearch} className="my-6 border">
          <input
            className="border bg-black text-white"
            type="text"
            name="search"
          />
          <input type="submit" value="search" className="btn btn-primary" />
        </form>

        {/* higher and lower toggle and sort button  */}
        <button onClick={() => setAsc(!asc)} className="btn btn-primary">
          {asc ? "  Price High to Low" : "  Price Low to  High"}
        </button>
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
