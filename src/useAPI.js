import { useEffect, useState } from 'react';
import axios from 'axios';

// export default function postAPI(pageNumber) {
export default function useAPI( pageNumber ) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method:'GET',
      url: `https://recruit-api.yonple.com/recruit/712391/a-posts?`,
      params: {page: pageNumber}
    }).then(res => {
      setContents(prev => {
        return [...prev, ...res.data];
      })
      setLoading(false);
    }).catch(e => {
      console.log(`${e} 가 발생했습니다.`);
      setError(true);
    })
  }, [pageNumber]);
  return { loading, error, contents};
}
