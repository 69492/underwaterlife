
import React from "react";
import { Link } from "react-router-dom";
import { Factory, Droplet, Waves, Building2 } from "lucide-react";
import { Button } from "./ui/button";

const ProblemCategories = () => {
  const categories = [
    {
      id: "agriculture",
      title: "Agriculture",
      description: "Fertilizers, pesticides, and soil erosion from farms",
      icon: <Waves className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "industrial",
      title: "Industrial Discharge",
      description: "Chemical waste and pollutants from factories",
      icon: <Factory className="h-8 w-8 text-red-500" />,
      color: "bg-red-50 border-red-200"
    },
    {
      id: "urban",
      title: "Urban Runoff",
      description: "Pollution from cities and residential areas",
      icon: <Droplet className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "waste",
      title: "Waste Management",
      description: "Improper disposal of waste affecting water bodies",
      icon: <Building2 className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-50 border-amber-200"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <div 
          key={category.id}
          className={`rounded-lg border ${category.color} p-6 transition-all hover:shadow-md`}
        >
          <div className="mb-4">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <Button asChild variant="outline" size="sm">
            <Link to={`/problems#${category.id}`}>Learn More</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProblemCategories;
