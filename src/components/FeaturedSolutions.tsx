
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const FeaturedSolutions = () => {
  const solutions = [
    {
      title: "Sustainable Farming Practices",
      description: "Reduce agricultural runoff through precision farming and organic methods",
      imageUrl: "placeholder.svg",
      link: "/solutions#agriculture"
    },
    {
      title: "Water Treatment Technologies",
      description: "Advanced filtration and purification methods for industrial wastewater",
      imageUrl: "placeholder.svg",
      link: "/solutions#industrial"
    },
    {
      title: "Community Monitoring Programs",
      description: "Citizen science initiatives to track and report water quality issues",
      imageUrl: "placeholder.svg",
      link: "/solutions#community"
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {solutions.map((solution, index) => (
        <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img 
            src={solution.imageUrl} 
            alt={solution.title} 
            className="w-full h-48 object-cover"
          />
          <div className="flex flex-col flex-grow p-6">
            <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to={solution.link}>Read More</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedSolutions;
