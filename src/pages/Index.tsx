
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProblemCategories from "@/components/ProblemCategories";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import CommunityForum from "@/components/CommunityForum";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            Protecting Our Water Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join our mission to identify, understand, and solve water pollution problems
            caused by land-based activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700" size="lg">
              <Link to="/problems">Explore Problems</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/solutions">Discover Solutions</Link>
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-10 animate-bounce"
          onClick={() => {
            document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown />
        </Button>
      </section>
      
      {/* Main Content */}
      <div id="content" className="container mx-auto py-16 px-6">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
            Common Water Pollution Sources
          </h2>
          <ProblemCategories />
        </section>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
            Featured Solutions
          </h2>
          <FeaturedSolutions />
        </section>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
            Community Forum
          </h2>
          <CommunityForum />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Water Life Project</h3>
              <p className="text-blue-200">Protecting our water resources together</p>
            </div>
            <div className="flex gap-4">
              <Link to="/problems" className="text-blue-200 hover:text-white">Problems</Link>
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

export default Index;
