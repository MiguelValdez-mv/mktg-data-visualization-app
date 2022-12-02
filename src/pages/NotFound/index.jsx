import View from "./View";
import useActions from "./useActions";

function Container(props) {
  const actions = useActions(props);

  return <View {...props} {...actions} />;
}

export default Container;
