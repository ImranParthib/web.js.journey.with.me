import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// Custom hook to use the UserContext
export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
