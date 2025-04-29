
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageSquare, CheckCircle } from "lucide-react";

const CommunityForum = () => {
  // Sample data for recent posts
  const recentPosts = [
    {
      type: "problem",
      title: "Industrial waste in Green River",
      excerpt: "There's been increasing chemical discharge into the Green River...",
      author: "EcoWatcher",
      date: "2 days ago"
    },
    {
      type: "solution",
      title: "Community-led water monitoring program",
      excerpt: "Our neighborhood started weekly water quality testing with...",
      author: "CleanWaterAdvocate",
      date: "4 days ago"
    },
    {
      type: "problem",
      title: "Agricultural runoff affecting local pond",
      excerpt: "After heavy rains, fertilizer runoff is causing algal blooms...",
      author: "WaterGuardian",
      date: "1 week ago"
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Recent Community Posts</h3>
        <Button asChild variant="outline" size="sm">
          <Link to="/community">View All</Link>
        </Button>
      </div>
      
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 border-b border-gray-100 last:border-0"
          >
            {post.type === "problem" ? (
              <MessageSquare className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            )}
            <div>
              <h4 className="font-medium text-gray-900">{post.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{post.excerpt}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <span>Posted by {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-700 mb-4">Join the conversation about water protection</p>
        <div className="flex flex-col xs:flex-row gap-2 justify-center">
          <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
            <Link to="/community?tab=problems">Report Problem</Link>
          </Button>
          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
            <Link to="/community?tab=solutions">Share Solution</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
