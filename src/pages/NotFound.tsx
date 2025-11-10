import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found - Ibn Al-Jazari Institute";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <img 
              src="https://ibnaljazariinstitute.org/wp-content/uploads/2020/07/website-header-Whithout-Logo_2020-1.png" 
              alt="Ibn Al-Jazari Institute Logo" 
              className="max-w-md mb-8"
            />
            <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
            <p className="text-gray-500 mb-8 max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
