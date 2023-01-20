import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";

import { IconEdit } from "@/assets/svgs/IconEdit";
import { Avatar } from "@/components/atoms/Avatar";
import { Label } from "@/components/atoms/Label";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";

export function AvatarInput({
  avatar,
  label,
  id,
  name,
  onChange,
  accept = ".jpg, .jpeg, .png",
  multiple,
}) {
  const inputRef = useRef();
  const [preview, setPreview] = useState(undefined);

  const handleClick = () => inputRef.current?.click();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof avatar === "object") {
      const objectUrl = URL.createObjectURL(avatar);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(avatar);
  }, [avatar]);

  return (
    <Col>
      {label && (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Spacing bottom={1} />
        </>
      )}

      <Col className="relative">
        <Avatar name={name} src={preview} />

        <IconButton
          className="bg-cyan drop-shadow-surface p-1 rounded-full absolute top-6 left-6"
          onClick={handleClick}
          hoverable={false}
        >
          <IconEdit className="w-4 h-4 text-white" />
        </IconButton>
      </Col>

      <input
        ref={inputRef}
        className="hidden"
        type="file"
        id={id}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
      />
    </Col>
  );
}

AvatarInput.propTypes = {
  avatar: PropTypes.object, // eslint-disable-line
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
};
