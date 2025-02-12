"use client";
import { AccessContextTypeProps } from "@/types/accessContextType";
import { createContext, useContext, useEffect, useState } from "react";

const AccessContext = createContext<AccessContextTypeProps | undefined>(
  undefined
);

export const AccessProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const storedAccess = localStorage.getItem("hasAccess") === "true";
    setHasAccess(storedAccess);
  }, []);

  const grantAccess = () => {
    setHasAccess(true);
    localStorage.setItem("hasAccess", "true");
  };

  if (hasAccess === null) {
    return null;
  }

  return (
    <AccessContext.Provider value={{ hasAccess, grantAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error("useAccess must be used within an AccessProvider");
  }
  return context;
};
