import { Spinner } from "@/components/atoms/Spinner";
import { Col } from "@/components/layout/Col";

export function Loader() {
  return (
    <Col className="w-screen h-screen justify-center items-center">
      <Spinner className="w-6 h-6" primary />
    </Col>
  );
}
