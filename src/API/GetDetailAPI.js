import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function GetDetailAPI(type = "a") {
  const [postDetail, setPostDetail] = useState({});
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    axios({
      method:'GET',
      url:`https://recruit-api.yonple.com/recruit/712391/${type}-posts/${id}`
    }).then(res => {
      console.log('I am postDetail API.');
      console.log(res.data);
      setPostDetail(res.data);
    })
    // setInterval
  }, [id])
  return { postDetail };
}
