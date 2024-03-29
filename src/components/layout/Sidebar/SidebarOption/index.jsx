import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { twMerge } from "@/utils/twMerge";

export function SidebarOption({ to, icon: Icon, name, closeSidebar }) {
  const { pathname } = useLocation();
  const isSelected = pathname.includes(to);

  return (
    <Link to={to} onClick={closeSidebar}>
      <Surface
        className={twMerge(
          "flex-row items-center p-2",
          isSelected ? "bg-white" : "bg-transparent"
        )}
      >
        <Surface className={twMerge("p-2", isSelected && "bg-primary")}>
          <Icon className={isSelected ? "text-white" : "text-primary"} />
        </Surface>
        <Spacing right={2} />

        <Text bold={isSelected}>{name}</Text>
      </Surface>
    </Link>
  );
}

SidebarOption.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};
