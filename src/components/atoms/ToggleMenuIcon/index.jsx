import PropTypes from "prop-types";

import { IconChevronDown } from "@/assets/svgs/IconChevronDown";
import { IconChevronUp } from "@/assets/svgs/IconChevronUp";

export function ToggleMenuIcon({ isOpen }) {
  return isOpen ? (
    <IconChevronUp className="text-muted" />
  ) : (
    <IconChevronDown className="text-muted" />
  );
}

ToggleMenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
