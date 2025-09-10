import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:(206)624-1234" className="hover:underline font-medium">
              (206) 624-1234
            </a>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="hidden sm:block">
            Hours: 9:00 – 5:00 • Closed on Tuesdays
          </div>
        </div>
        <div className="text-xs hidden md:block">
          Parties of 6 or more will be charged 15% gratuity
        </div>
      </div>
    </div>
  );
};

export default TopBar;