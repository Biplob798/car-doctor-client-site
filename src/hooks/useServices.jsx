import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      " https://car-doctor-server-3961cyx67-biplobs-projects-623841b5.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services;
};

export default useServices;
