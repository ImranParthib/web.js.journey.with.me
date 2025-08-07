import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { to: "/home", icon: <Home size={20} />, label: "Home" },
    { to: "/about", icon: <User size={20} />, label: "About" },
    { to: "/education", icon: <BookOpen size={20} />, label: "Education" },
    { to: "/experience", icon: <Briefcase size={20} />, label: "Experience" },
    { to: "/project", icon: <Code size={20} />, label: "Projects" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    {
      icon: <Mail size={20} />,
      href: "mailto:email@example.com",
      label: "Email",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="bg-slate-900 text-white h-full flex flex-col items-center p-6 shadow-lg rounded-lg">
      {/* Profile Section */}
      <div className="relative group mb-8">
        <div className="relative">
          <img
            src="/api/placeholder/96/96"
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-slate-700 group-hover:border-blue-500 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* User Info */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Imran Parthib
        </h2>
        <p className="text-slate-400 text-sm mt-1">Full Stack Developer</p>
      </div>

      {/* Navigation */}
      <nav className="w-full mb-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-all duration-200 group mb-1"
          >
            <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
              {item.icon}
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Social Links */}
      <div className="mt-auto pt-8 border-t border-slate-800 w-full">
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
