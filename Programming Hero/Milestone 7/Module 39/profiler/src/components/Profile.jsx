import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Mail,
  Phone,
  Globe,
  Search,
  MapPin,
  Briefcase,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Profiler = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-8 flex flex-col items-center justify-center">
        <Loader2 className="h-16 w-16 text-white animate-spin mb-4" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Loading Users...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-8 flex items-center justify-center">
        <Alert
          variant="destructive"
          className="max-w-lg bg-red-100 border-red-400"
        >
          <AlertTitle className="text-red-800 font-bold">Error</AlertTitle>
          <AlertDescription className="text-red-700">
            {error.message || "An error occurred while fetching users."}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-500 to-slate-500 p-8">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Profiles
      </motion.h1>
      <motion.div
        className="max-w-md mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name or email"
            className="pl-12 pr-4 py-3 w-full rounded-full border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-white/10 text-white placeholder-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>
      <AnimatePresence>
        <motion.div
          className="mx-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: user.id * 0.1 }}
            >
              <Card className="backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-t border-l border-white/20">
                <CardHeader className="flex flex-row items-center gap-6">
                  <Avatar className="h-20 w-20 ring-2 ring-pink-500 ring-offset-2 ring-offset-transparent">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?u=${user.email}`}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-indigo-400 text-white font-bold text-xl">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-white">
                      {user.name}
                    </CardTitle>
                    <p className="text-lg text-gray-300">@{user.username}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-lg text-gray-200">
                      <Mail className="mr-2 h-5 w-5 opacity-70" /> {user.email}
                    </div>
                    <div className="flex items-center text-lg text-gray-200">
                      <Phone className="mr-2 h-5 w-5 opacity-70" /> {user.phone}
                    </div>
                    <div className="flex items-center text-lg text-gray-200">
                      <Globe className="mr-2 h-5 w-5 opacity-70" />{" "}
                      {user.website}
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-semibold py-3 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
                    onClick={() => handleViewProfile(user)}
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300">
              User Profile
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-300">
              Detailed information about the selected user.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Avatar className="h-24 w-24 mr-6 ring-2 ring-pink-500 ring-offset-2 ring-offset-transparent">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?u=${selectedUser.email}`}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-pink-400 to-indigo-400 text-white font-bold text-2xl">
                    {selectedUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    {selectedUser.name}
                  </h3>
                  <p className="text-xl text-gray-300">
                    @{selectedUser.username}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-lg text-gray-200">
                  <Users className="mr-2 h-5 w-5 opacity-70" /> Company:{" "}
                  {selectedUser.company.name}
                </div>
                <div className="flex items-center text-lg text-gray-200">
                  <MapPin className="mr-2 h-5 w-5 opacity-70" /> Address:{" "}
                  {selectedUser.address.street}, {selectedUser.address.city}
                </div>
                <div className="flex items-center text-lg text-gray-200">
                  <Briefcase className="mr-2 h-5 w-5 opacity-70" /> Company:{" "}
                  {selectedUser.company.name}
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profiler;
