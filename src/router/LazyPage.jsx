import { Suspense } from "react";

export function LazyPage(Page) {
  // eslint-disable-next-line func-names
  return function (props) {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Page {...props} />
      </Suspense>
    );
  };
}
