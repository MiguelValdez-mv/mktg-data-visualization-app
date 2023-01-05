import { createContext, useMemo, useState, useEffect } from "react";

import { PROP } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLargeScreen } = useDimensions();

  const showSidebar = () => setIsOpen(true);
  const closeSidebar = () => !isLargeScreen && setIsOpen(false);

  const value = useMemo(
    () => ({ isSidebarOpen: isOpen, showSidebar, closeSidebar }),
    [isOpen]
  );

  useEffect(() => {
    if (isLargeScreen) {
      showSidebar();
    } else {
      closeSidebar();
    }
  }, [isLargeScreen]);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
