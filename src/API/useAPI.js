import { useEffect, useState } from "react";
import axios from "axios";

// export default function postAPI(pageNumber) {
export default function useAPI(type, pageNumber, query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contents, setContents] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    pageNumber = 0;
    setContents([]);
  }, [type, query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const fetchAPI = setTimeout(
      () =>
        axios({
          method: "GET",
          url: `https://recruit-api.yonple.com/recruit/712391/${type}-posts?`,
          params: { page: pageNumber, search: query ? query : "" },
        })
          .then((res) => {
            console.log("This is THEN THEN THEN");
            console.log(res.data);
            setContents((prev) => {
              return [...prev, ...res.data];
            });
            // true when existing data
            setHasMore(res.data.length > 0);
            setLoading(false);
          })
          .catch((e) => {
            console.log(`${e} 가 발생했습니다.`);
            setError(true);
            setLoading(false);
          }),
      150
    );
    return () => {
      console.log('Clear fetchAPI')
      clearTimeout(fetchAPI);
    }
  }, [type, pageNumber, query]);

  return { loading, error, contents, hasMore };
}
