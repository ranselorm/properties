import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserData, logoutUser } from "./authService";
import { router } from "expo-router";

interface User {
  $id: string;
  name: string;
  email: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => Promise<void>;
  logout: () => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const userData = await getUserData();
      console.log("USER FETCHED");
      setUser(userData);
    } catch (error) {
      console.log("ERROR FETCHING USER");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.replace("/login"); // Redirect to login if not authenticated
  //   }
  // }, [loading, user]);

  const logout = async () => {
    await logoutUser();
    setUser(null);
    router.replace("/login");
  };

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn: !!user, user, loading, refetch: fetchUser, logout }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
