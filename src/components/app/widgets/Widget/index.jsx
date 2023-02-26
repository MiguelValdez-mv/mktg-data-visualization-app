import { Text } from "@/components/atoms/Text";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";

export function Widget({ widget }) {
  const { title } = widget;

  return (
    <Surface className="w-full h-full">
      {title && <Text bold>{title}</Text>}
    </Surface>
  );
}

Widget.propTypes = {
  widget: PROP.WIDGET,
};
