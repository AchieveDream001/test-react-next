import { getSortedPostsData } from '../../lib/ports';

export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths:[
      {
        params:{
          ab:'1'
        }
      },
      {
        params:{
          ab:'2'
        }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  console.log(params)
  const allPostsData = await getSortedPostsData();
  let res={}
  if(params.ab==='1'){
    res=allPostsData[0]
  }else if(params.ab==='2'){
    res=allPostsData[1]
  }
  return {
    props:{
      ...res
    }
  }
}
export default function About(props){
  console.log(props)
  return <div>测试{props.title}</div>
}