import { useState, useEffect } from 'react';
import Image from "next/image"; 
import Link from "next/link"; 
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore'; 


import { FiBookmark } from "react-icons/fi"; 
import QaziImage from "../static/qazi.jpg"; 

const styles = {
  wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer', 
  authorContainer: `flex gap-[0.4rem]`, 
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`, 
  authorImage: `obect-cover`, 
  authorName: `font-semibold`, 
  postTitle: `font-bold text-2xl`,
  postSubTitle: `text-[#787878]`, 
  postDetails: `flex-[2.5] flex flex-col`, 
  detailsContainer: `flex items-center justify-between text-[#787878]`, 
  articleDetails: `my-2 text-[0.8rem]`, 
  bookmarkContainer: `cursor-pointer`, 
  category: `bg-[#f2f2f2] p-1 rounded-full`
}

const PostCard = ({article}) => {
  const [authorData, setAuthorData] = useState({}); 
  useEffect(() => {
    const getAuthorData = async () => {
      let temp =  await getDoc(doc(db, 'users', article.data.author));
      setAuthorData(
       temp.data()
      ); 
    }
    getAuthorData();
  }, [article]);
  
  return (
    <Link href={`/post/${article.id}`}>
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImageContainer}>
            <Image 
              className={styles.authorImage}
              src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`} 
              width={50}
              height={50}
            />
          </div>
          <div className={styles.authorName}>{authorData?.name}</div>
        </div>
      
        <div className={styles.postTitle}>{article?.data?.title}</div>
        <div className={styles.postSubTitle}>{article?.data?.brief}</div>
        <div className={styles.detailsContainer}>
           <span> 
             {
               new Date(article?.data?.postedOn).toLocaleString('en-US', { day: 'numeric', month: 'short'})
             } &#x2022; 
             {
               article?.data?.readingTime
             } read &#x2022; 
             <span className={styles.category}>
               {article?.data?.category}
             </span>
           </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className={'h-5 w-5'} />
            </span>
        </div>
       
      </div>
      <div className={styles.postImage}>
        <Image src={`https://res.cloudinary.com/demo/image/fetch/${article?.data?.bannerImage}`} height={100} width={100}/>
      </div>
    </div>
      </Link>
  )
}

export default PostCard