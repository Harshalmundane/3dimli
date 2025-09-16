import React from 'react';
import { Search, Upload, User, ShoppingCart, Download, Heart, Star, Headphones, Grid3x3, Tag, Users } from 'lucide-react';

export default function LandingPage() {
  const floatingIcons = [
    { icon: Grid3x3, position: { top: '15%', left: '8%' }, color: 'from-purple-500 to-blue-500', delay: 0 },
    { icon: ShoppingCart, position: { top: '20%', right: '8%' }, color: 'from-green-500 to-teal-500', delay: 0.5 },
    { icon: Tag, position: { top: '35%', left: '12%' }, color: 'from-orange-500 to-red-500', delay: 1 },
    { icon: Users, position: { bottom: '35%', left: '6%' }, color: 'from-pink-500 to-purple-500', delay: 1.5 },
    { icon: Download, position: { bottom: '25%', left: '15%' }, color: 'from-blue-500 to-cyan-500', delay: 2 },
    { icon: Heart, position: { bottom: '20%', left: '8%' }, color: 'from-red-500 to-pink-500', delay: 2.5 },
    { icon: Star, position: { bottom: '30%', right: '35%' }, color: 'from-yellow-500 to-orange-500', delay: 3 },
    { icon: Headphones, position: { bottom: '35%', right: '25%' }, color: 'from-indigo-500 to-purple-500', delay: 3.5 },
    { icon: Search, position: { top: '45%', right: '12%' }, color: 'from-cyan-500 to-blue-500', delay: 4 },
    { icon: Upload, position: { bottom: '20%', right: '8%' }, color: 'from-teal-500 to-green-500', delay: 4.5 },
    { icon: Grid3x3, position: { bottom: '15%', right: '18%' }, color: 'from-purple-500 to-pink-500', delay: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative">
      {/* Animated floating icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br opacity-20 flex items-center justify-center animate-pulse"
          style={{
            ...item.position,
            animationDelay: `${item.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center backdrop-blur-sm border border-white/10`}>
            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
        </div>
      ))}

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-white">3dimli</span>
            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">BETA</span>
            <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full">1.0.1</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Discover</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-40"
              />
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <span className="text-sm">Discord</span>
            </button>
            
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Upload className="w-4 h-4" />
              <span className="hidden md:inline text-sm">Upload</span>
            </button>
            
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block">Instant Payouts,</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Full Control, No Limits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Your one-stop digital platform for 3D models and digital creations.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join our community of creators and collectors today.
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Explore all products
          </button>
        </div>
      </main>

      {/* Additional floating elements for more dynamic feel */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}