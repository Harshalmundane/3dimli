"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search,
  User,
  Upload,
  ShoppingCart,
  Download,
  Heart,
  Star,
  Headphones,
  Grid3X3,
} from "lucide-react";

// Define interfaces for component props to ensure type safety
interface DiscordIconProps {
  className?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ghost";
  size?: "default" | "lg" | "icon";
  [key: string]: unknown;
}

interface InputProps {
  className?: string;
  [key: string]: unknown;
}

interface FloatingIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  style?: React.CSSProperties;
}

// Discord Icon Component: Renders a custom SVG icon for Discord
const DiscordIcon = ({ className = "w-5 h-5" }: DiscordIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Button Component: Reusable button with customizable variants and sizes
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component: Reusable input field with consistent styling
const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// FloatingIcon Component: Displays icons in circular containers with positioning
const FloatingIcon = ({ icon: Icon, className, style }: FloatingIconProps) => (
  <div
    className={`absolute w-20 h-20 bg-gray-800/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/30 ${className}`}
    style={style}
  >
    <Icon className="w-7 h-7 text-gray-300" />
  </div>
);

// AnimatedText Component: Creates a typewriter effect for alternating text
const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoized array of texts to cycle through
  const texts = useMemo(
    () => [
      "Discover, Buy, and Sell\nDigital Products",
      "Buy Once, Download Anytime, Keep Forever",
    ],
    []
  );

  // Effect to handle typing and deleting animation
  useEffect(() => {
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const pauseTime = 2000;

    let timer: NodeJS.Timeout;
    const currentText = texts[index];

    if (!isDeleting && displayText.length < currentText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts]);

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight mb-8">
      {displayText.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          {i < displayText.split("\n").length - 1 && <br />}
        </span>
      ))}
      <span className="inline-block animate-pulse">|</span>
    </h1>
  );
};

// Home Component: Main page layout with header, floating icons, and animated text
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Floating Icons: Decorative icons positioned on the left side */}
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
        style={{ top: "15%", left: "6%" }}
      />
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            %
          </div>
        )}
        style={{ top: "35%", left: "4%" }}
      />
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-green-500 rounded flex items-center justify-center">
            <Download className="w-4 h-4 text-white" />
          </div>
        )}
        style={{ top: "60%", left: "8%" }}
      />
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
        )}
        style={{ bottom: "25%", left: "5%" }}
      />
      {/* Floating Icons: Decorative icons positioned on the right side */}
      <FloatingIcon icon={ShoppingCart} style={{ top: "18%", right: "6%" }} />
      <FloatingIcon icon={Search} style={{ top: "40%", right: "4%" }} />
      <FloatingIcon icon={Upload} style={{ bottom: "35%", right: "7%" }} />
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center">
            <Grid3X3 className="w-4 h-4 text-white" />
          </div>
        )}
        style={{ bottom: "15%", right: "3%" }}
      />
      {/* Floating Icons: Decorative icons positioned at the bottom */}
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
        )}
        style={{ bottom: "12%", left: "25%" }}
      />
      <FloatingIcon
        icon={() => (
          <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center">
            <Headphones className="w-4 h-4 text-white" />
          </div>
        )}
        style={{ bottom: "18%", right: "35%" }}
      />
      {/* Header: Contains logo, navigation, search, and action buttons */}
      <header className="flex items-center justify-between p-6 px-8 relative z-10 bg-[#171717]">
        <div className="flex items-center space-x-10 flex-1">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-5xl font-extrabold bg-gradient-to-b from-[#3b5bff] to-[#8a3cff] bg-clip-text text-transparent tracking-wide">
                3dimli
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-white font-light">BETA</span>
              <span className="text-[10px] text-white font-light">1.0.1</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            <a
              href="#"
              className="text-white font-medium hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <div className="relative flex-1 max-w-xl mr-8">
              <Input
                placeholder="Search..."
                className="w-full bg-gray-800/60 border-gray-600/50 text-white placeholder-gray-400 pr-10 h-10 focus:border-cyan-400/50 focus:ring-cyan-400/20"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="ml-1 bg-gradient-to-r from-[#0d1b4d] to-[#0a3d91] hover:from-[#0f255c] hover:to-[#0c4aa6] text-white px-6 h-11 rounded-xl shadow-md transition-all duration-200 flex items-center">
            <DiscordIcon className="w-5 h-5 text-white" />
            <span className="ml-2">Discord</span>
          </Button>
          <Button className="bg-gradient-to-r from-[#0d1b4d] to-[#0a3d91] hover:from-[#0f255c] hover:to-[#0c4aa6] text-white px-6 h-11 rounded-xl shadow-md transition-all duration-200 flex items-center">
            <Upload className="w-4 h-4 text-white" />
            <span className="ml-2">Upload</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-full hover:border-white/40 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-200"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>
      {/* Main Content: Displays animated text and call-to-action */}
      <main className="flex flex-col items-center justify-center min-h-[75vh] px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <AnimatedText />
          <div className="space-y-4 mb-12">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your one-stop digital platform for{" "}
              <span className="">3D models</span> and digital creations.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join our community of creators and collectors today.
            </p>
          </div>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-transparent text-white px-10 py-4 text-lg rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              Explore all products
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}