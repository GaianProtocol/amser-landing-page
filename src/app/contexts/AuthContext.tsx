"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { developers } from '../data/developers';

interface User {
  email: string;
  points: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      const storedUsers: { email: string; password: string }[] = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find((u) => u.email === email && u.password === password);
      
      if (user) {
        const developer = developers.find(dev => dev.email === email);
        const userData: User = {
          email: user.email,
          points: developer?.availableBounty || 0
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setError('');
        return true;
      }
      
      setError('Invalid email or password');
      return false;
    } catch {
      setError('An error occurred during login');
      return false;
    }
  };

  const register = async (email: string, password: string): Promise<boolean> => {
    try {
      const storedUsers: { email: string; password: string }[] = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (storedUsers.some((u) => u.email === email)) {
        setError('Email already registered');
        return false;
      }

      const newUser = { email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      const userData: User = {
        email,
        points: 0
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setError('');
      return true;
    } catch {
      setError('An error occurred during registration');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 