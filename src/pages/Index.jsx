import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Research Portal</h1>
      <p className="text-lg">Explore our four sub-research projects:</p>
      <nav className="space-x-4">
        <Link to="/project1" className="text-blue-500 hover:underline">Project 1</Link>
        <Link to="/project2" className="text-blue-500 hover:underline">Project 2</Link>
        <Link to="/project3" className="text-blue-500 hover:underline">Project 3</Link>
        <Link to="/project4" className="text-blue-500 hover:underline">Project 4</Link>
      </nav>
    </div>
  );
};

export default Index;