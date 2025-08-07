import React, { useState } from "react";
import { Code, Paintbrush, TrendingUp, Search } from "lucide-react";

const services = [
  {
    name: "Development",
    icon: Code,
    description: "Custom software solutions tailored to your needs",
    details:
      "Our development team specializes in creating robust, scalable applications using cutting-edge technologies. From web apps to mobile solutions, we deliver high-performance software that drives your business forward.",
    features: [
      "Full-stack development",
      "Cloud integration",
      "API development",
      "Performance optimization",
    ],
  },
  {
    name: "Design",
    icon: Paintbrush,
    description: "Stunning visuals that captivate your audience",
    details:
      "Our design team crafts beautiful, user-centric interfaces that elevate your brand. We focus on creating intuitive experiences that engage users and drive conversions.",
    features: [
      "UI/UX design",
      "Brand identity",
      "Responsive web design",
      "Prototyping",
    ],
  },
  {
    name: "Marketing",
    icon: TrendingUp,
    description: "Strategic campaigns to boost your market presence",
    details:
      "Our marketing experts develop data-driven strategies to increase your brand visibility and customer engagement. We leverage the latest digital marketing techniques to drive growth and ROI.",
    features: [
      "Content marketing",
      "Social media management",
      "Email campaigns",
      "Analytics and reporting",
    ],
  },
  {
    name: "SEO",
    icon: Search,
    description: "Optimize your online visibility and search rankings",
    details:
      "Our SEO specialists employ white-hat techniques to improve your search engine rankings and drive organic traffic. We focus on sustainable, long-term strategies that align with search engine best practices.",
    features: [
      "Keyword research",
      "On-page optimization",
      "Link building",
      "Local SEO",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="mx-auto p-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-2xl">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-800">
        Our Services
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className={`flex items-center text-lg cursor-pointer p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                  selectedService === service
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-indigo-800 hover:bg-indigo-100"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <service.icon className="mr-3 h-6 w-6" />
                <span>{service.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4 text-indigo-800 flex items-center">
            <selectedService.icon className="mr-3 h-8 w-8" />
            {selectedService.name}
          </h3>
          <p className="text-xl text-indigo-600 mb-4">
            {selectedService.description}
          </p>
          <p className="text-gray-700 mb-6">{selectedService.details}</p>
          <h4 className="text-xl font-semibold mb-3 text-indigo-800">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {selectedService.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
