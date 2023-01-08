import { createContext, useMemo, useState, useEffect } from "react";

import { PROP } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLargeScreen } = useDimensions();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => !isLargeScreen && setIsSidebarOpen(false);

  const value = useMemo(
    () => ({ isSidebarOpen, openSidebar, closeSidebar }),
    [isSidebarOpen, isLargeScreen]
  );

  useEffect(() => {
    if (isLargeScreen) openSidebar();
    else closeSidebar();
  }, [isLargeScreen]);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
