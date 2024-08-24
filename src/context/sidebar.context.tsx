'use client'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface SideBarContextInterface {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const initialSidebar: SideBarContextInterface = {
  sidebarOpen: false,
  setSidebarOpen: () => null,
};

export const SidebarContext = createContext(initialSidebar);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(initialSidebar.sidebarOpen);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;
