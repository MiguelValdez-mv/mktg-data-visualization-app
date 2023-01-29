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
  disabled,
  onChange,
  accept = ".jpg, .jpeg, .png",
  multiple,
}) {
  const inputRef = useRef();
  const [preview, setPreview] = useState("");

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
        <Avatar name={name} src={preview} size={100} />

        {!disabled && (
          <IconButton
            className="bg-primary drop-shadow-surface p-2 rounded-full absolute top-16 left-20"
            onClick={handleClick}
            hoverable={false}
          >
            <IconEdit className="text-white" />
          </IconButton>
        )}
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
  avatar: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
};
