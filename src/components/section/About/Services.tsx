import { services } from "@/constants";
import { memo } from "react";
import ServiceCard from "./ServiceCard";

const Services = memo(() => (
  <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
  </div>
));

export default Services;
