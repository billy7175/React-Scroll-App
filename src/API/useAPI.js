import { useEffect, useState } from 'react';
import axios from 'axios';

// export default function postAPI(pageNumber) {
export default function useAPI( type , pageNumber ) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contents, setContents] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  
  useEffect(() => {
    pageNumber = 0;
    setContents([]);
  }, [type]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method:'GET',
      url: `https://recruit-api.yonple.com/recruit/712391/${type}-posts?`,
      params: {page: pageNumber}
    }).then(res => {
      setContents(prev => {
        return [...prev, ...res.data];
      })
      // true when existing data
      setHasMore(res.data.length > 0);
      setLoading(false);
    }).catch(e => {
      console.log(`${e} 가 발생했습니다.`);
      setError(true);
      setLoading(false);
    })
  }, [type, pageNumber]);
  return { loading, error, contents, hasMore};
}