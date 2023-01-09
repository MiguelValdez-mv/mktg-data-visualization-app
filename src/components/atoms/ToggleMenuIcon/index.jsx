import PropTypes from "prop-types";

import { IconChevronDown } from "@/assets/svgs/IconChevronDown";
import { IconChevronUp } from "@/assets/svgs/IconChevronUp";

export function ToggleMenuIcon({ menuIsOpen }) {
  return menuIsOpen ? <IconChevronUp /> : <IconChevronDown />;
}

ToggleMenuIcon.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};
