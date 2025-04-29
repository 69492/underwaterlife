
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Factory, Water } from "lucide-react";

const Solutions = () => {
  const solutionCategories = [
    {
      title: "Agricultural Solutions",
      description: "Methods to reduce pollution from farming activities",
      solutions: [
        "Precision fertilizer application to reduce runoff",
        "Buffer zones between farmland and water bodies",
        "Sustainable pest management techniques"
      ]
    },
    {
      title: "Industrial Solutions",
      description: "Approaches to minimize industrial water pollution",
      solutions: [
        "Advanced wastewater treatment technologies",
        "Closed-loop water recycling systems",
        "Stricter regulations on chemical disposal"
      ]
    },
    {
      title: "Urban Management",
      description: "Urban planning and infrastructure improvements",
      solutions: [
        "Green infrastructure for stormwater management",
        "Permeable pavements to reduce runoff",
        "Improved street sweeping programs"
      ]
    },
    {
      title: "Community Actions",
      description: "Ways individuals and communities can help",
      solutions: [
        "Regular community cleanup events",
        "Proper disposal of household chemicals",
        "Water conservation practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green-700 text-white py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Solutions for Water Protection</h1>
          <p className="text-xl text-green-100">
            Discover effective approaches to safeguard our water resources from pollution
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Protecting Our Waters Together
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Addressing water pollution requires a comprehensive approach involving 
              individuals, communities, industries, and governments. By implementing 
              proven solutions and developing innovative technologies, we can significantly 
              reduce the impact of land-based activities on our precious water resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/community">Share Your Solution</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/problems">View Problems</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Water className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-700">Our Approach</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Identify and categorize pollution sources and their impacts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Research and develop effective, science-based solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Engage communities in implementing and monitoring solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Advocate for policies that protect water resources
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Solutions By Category
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {solutionCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-green-700 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mb-16">
          <div className="flex justify-center mb-4">
            <Factory className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Partner With Us</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Are you a business, organization, or government agency interested in 
            implementing water protection solutions? We'd love to collaborate with you.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">Contact Us</Button>
        </div>
      </div>
      
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Water Life Project</h3>
              <p className="text-green-200">Protecting our water resources together</p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-green-200 hover:text-white">Home</Link>
              <Link to="/problems" className="text-green-200 hover:text-white">Problems</Link>
              <Link to="/community" className="text-green-200 hover:text-white">Community</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-green-200 text-sm">
            &copy; {new Date().getFullYear()} Water Life Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;
