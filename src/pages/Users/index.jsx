import View from "./View";
import useActions from "./useActions";

function Container(props) {
  const actions = useActions(props);

  // eslint-disable-next-line
  return <View {...props} {...actions} />;
}

Container.propTypes = {};

export default Container;
