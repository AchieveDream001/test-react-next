import { useEffect, useState } from "react"

export default function About(){
  const [nn,setNn]=useState('收到放松放松东方闪电')
  useEffect(()=>{
setTimeout(() => {
  setNn('发大水发大水')
}, 10000);
  },[])
  return <div>{nn}</div>
}