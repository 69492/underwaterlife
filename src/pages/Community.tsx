
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MessageSquare, User, CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Community = () => {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems');
  const [submissions, setSubmissions] = useState({
    problems: [
      {
        id: 1,
        title: "Industrial waste in Green River",
        description: "There's been increasing chemical discharge into the Green River from the new factory.",
        location: "Green River, Springfield",
        category: "Industrial",
        user: "EcoWatcher",
        date: "2025-04-25"
      },
      {
        id: 2,
        title: "Agricultural runoff affecting local pond",
        description: "After heavy rains, fertilizer runoff is causing algal blooms in the community pond.",
        location: "Farmland County",
        category: "Agriculture",
        user: "WaterGuardian",
        date: "2025-04-22"
      }
    ],
    solutions: [
      {
        id: 1,
        title: "Community-led water monitoring program",
        description: "Our neighborhood started weekly water quality testing with affordable test kits.",
        category: "Community Action",
        user: "CleanWaterAdvocate",
        date: "2025-04-23"
      },
      {
        id: 2,
        title: "Rain gardens for urban runoff",
        description: "Installing rain gardens has significantly reduced pollution from stormwater runoff.",
        category: "Urban Management",
        user: "GreenCityPlanner",
        date: "2025-04-20"
      }
    ]
  });

  const problemForm = useForm({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      category: ""
    }
  });

  const solutionForm = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: ""
    }
  });

  const onSubmitProblem = (data: any) => {
    const newProblem = {
      id: submissions.problems.length + 1,
      title: data.title,
      description: data.description,
      location: data.location,
      category: data.category,
      user: "CurrentUser",
      date: new Date().toISOString().split('T')[0]
    };
    
    setSubmissions(prev => ({
      ...prev,
      problems: [newProblem, ...prev.problems]
    }));
    
    problemForm.reset();
    
    toast({
      title: "Problem submitted",
      description: "Thank you for contributing to water protection",
    });
  };

  const onSubmitSolution = (data: any) => {
    const newSolution = {
      id: submissions.solutions.length + 1,
      title: data.title,
      description: data.description,
      category: data.category,
      user: "CurrentUser",
      date: new Date().toISOString().split('T')[0]
    };
    
    setSubmissions(prev => ({
      ...prev,
      solutions: [newSolution, ...prev.solutions]
    }));
    
    solutionForm.reset();
    
    toast({
      title: "Solution submitted",
      description: "Thank you for sharing your solution",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
          <p className="text-xl text-purple-100">
            Share water pollution problems and solutions with the community
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-6">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-2 px-4 mr-2 font-medium ${
              activeTab === 'problems'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('problems')}
          >
            Report Problems
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'solutions'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('solutions')}
          >
            Share Solutions
          </button>
        </div>
        
        {activeTab === 'problems' ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Report a Water Problem</h2>
              
              <Form {...problemForm}>
                <form onSubmit={problemForm.handleSubmit(onSubmitProblem)} className="space-y-6">
                  <FormField
                    control={problemForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief title of the water pollution issue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={problemForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the water pollution problem in detail" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={problemForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State or Region" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={problemForm.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Agriculture, Industrial" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit Problem
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Problems</h2>
              
              <div className="space-y-6">
                {submissions.problems.map(problem => (
                  <div key={problem.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{problem.title}</h3>
                    <p className="text-gray-600 mb-4">{problem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {problem.category}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {problem.location}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {problem.user}
                      </div>
                      <div>{problem.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Share a Solution</h2>
              
              <Form {...solutionForm}>
                <form onSubmit={solutionForm.handleSubmit(onSubmitSolution)} className="space-y-6">
                  <FormField
                    control={solutionForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Solution Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief title of your solution" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={solutionForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your solution in detail" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={solutionForm.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Community Action, Technology" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit Solution
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Solutions</h2>
              
              <div className="space-y-6">
                {submissions.solutions.map(solution => (
                  <div key={solution.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {solution.category}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {solution.user}
                          </div>
                          <div>{solution.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 p-6 bg-purple-50 border border-purple-100 rounded-lg text-center">
          <MessageSquare className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Join the Conversation</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            By sharing your observations and solutions, you're helping build a global 
            knowledge base for water protection. Every contribution matters!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-purple-300">
              <Link to="/problems">Learn About Problems</Link>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <footer className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Water Life Project</h3>
              <p className="text-purple-200">Protecting our water resources together</p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-purple-200 hover:text-white">Home</Link>
              <Link to="/problems" className="text-purple-200 hover:text-white">Problems</Link>
              <Link to="/solutions" className="text-purple-200 hover:text-white">Solutions</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-purple-200 text-sm">
            &copy; {new Date().getFullYear()} Water Life Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Community;
