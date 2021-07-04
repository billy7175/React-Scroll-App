import {useRef, useCallback} from 'react';


export default function useRefList(setPageNumber, hasMore) {
  const observer = useRef();
  const lastPostElement = useCallback(
    (ele) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("reached bottom.");
          setPageNumber((prev) => prev + 1);
        }
      });
      if (ele) observer.current.observe(ele);
    },
    [hasMore]
  );
  return { lastPostElement}
}
