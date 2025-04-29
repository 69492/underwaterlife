
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Problems = () => {
  const problemCategories = [
    {
      id: "agriculture",
      name: "Agriculture",
      description: "Pollution caused by agricultural activities",
      examples: [
        "Fertilizer runoff leading to algal blooms",
        "Pesticide contamination of groundwater",
        "Soil erosion causing sedimentation in water bodies"
      ]
    },
    {
      id: "industrial",
      name: "Industrial Discharge",
      description: "Pollution caused by industrial activities",
      examples: [
        "Chemical waste disposal in water bodies",
        "Heavy metal contamination",
        "Oil spills affecting aquatic ecosystems"
      ]
    },
    {
      id: "urban",
      name: "Urban Runoff",
      description: "Pollution from urban areas",
      examples: [
        "Road salt washing into streams",
        "Microplastics from urban waste",
        "Stormwater carrying pollutants to rivers"
      ]
    },
    {
      id: "waste",
      name: "Waste Management",
      description: "Pollution from improper waste disposal",
      examples: [
        "Landfill leachate contaminating groundwater",
        "Illegal dumping in waterways",
        "Inadequate sewage treatment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-800 text-white py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Water Pollution Problems</h1>
          <p className="text-xl text-blue-100">
            Explore the major categories of land-based threats to our water resources
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {problemCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-3">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Button asChild variant="outline">
                <Link to={`/problems/${category.id}`}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Problem Analysis</h2>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Common Issues</TableHead>
              <TableHead>Impact Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Agriculture</TableCell>
              <TableCell>Fertilizer runoff, Pesticide contamination, Soil erosion</TableCell>
              <TableCell>High</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Industrial Discharge</TableCell>
              <TableCell>Chemical waste, Heavy metals, Oil spills</TableCell>
              <TableCell>Very High</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Urban Runoff</TableCell>
              <TableCell>Road salt, Microplastics, Stormwater pollutants</TableCell>
              <TableCell>Medium</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Waste Management</TableCell>
              <TableCell>Landfill leachate, Illegal dumping, Inadequate sewage treatment</TableCell>
              <TableCell>High</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Have you identified a water pollution problem in your area?
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/community">Report a Problem</Link>
          </Button>
        </div>
      </div>
      
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Water Life Project</h3>
              <p className="text-blue-200">Protecting our water resources together</p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-blue-200 hover:text-white">Home</Link>
              <Link to="/solutions" className="text-blue-200 hover:text-white">Solutions</Link>
              <Link to="/community" className="text-blue-200 hover:text-white">Community</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Water Life Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Problems;
