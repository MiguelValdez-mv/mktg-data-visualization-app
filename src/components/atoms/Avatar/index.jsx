import PropTypes from "prop-types";
import ReactAvatar from "react-avatar";

import { twMerge } from "@/utils/twMerge";

export function Avatar({ className, email, name, value = "?", src }) {
  return (
    <ReactAvatar
      className={twMerge("rounded-xl", className)}
      email={email}
      name={name}
      value={value}
      src={src}
      size={40}
      maxInitials={2}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  src: PropTypes.string,
};
