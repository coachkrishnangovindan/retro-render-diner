import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have wandered off the menu. 
            Let's get you back to something delicious!
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="btn-hero inline-flex items-center"
          >
            Return to Home
          </a>
          
          <div className="text-sm text-muted-foreground">
            <p>Or call us directly:</p>
            <a 
              href="tel:(206)624-1234" 
              className="text-primary hover:underline font-medium"
            >
              (206) 624-1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
