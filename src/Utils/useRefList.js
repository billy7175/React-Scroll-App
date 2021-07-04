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
    [hasMore, setPageNumber]
  );

  // focus
  const inputWrapperObserver = useRef();
  const inputObserver = useRef();
  function inputFocus() {
    inputObserver.current.focus();
    inputWrapperObserver.current.style.borderColor = "rgba(59, 130, 246, 1)"; 
  }

  function removeInputFocus(){
    inputWrapperObserver.current.style.borderColor = "#777"; 
  }

  return { lastPostElement,inputWrapperObserver,inputObserver, inputFocus, removeInputFocus  }
}
