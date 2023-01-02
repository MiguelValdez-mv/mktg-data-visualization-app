import { Suspense } from "react";

import { Loader } from "@/components/layout/Loader";

export function LazyPage(Page) {
  // eslint-disable-next-line func-names
  return function (props) {
    return (
      <Suspense fallback={<Loader />}>
        <Page {...props} />
      </Suspense>
    );
  };
}
