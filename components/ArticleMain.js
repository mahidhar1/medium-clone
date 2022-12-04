import { useState, useEffect, useContext } from 'react';
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineLink } from 'react-icons/hi'; 
import { BiBookmarks } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi'; 
import Qazi from '../static/qazi.jpg';
import BannerImage from '../static/banner.png'; 
import { MediumContext } from '../context/MediumContext';


const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen w-full overflow-scroll p-[2rem]`,
  postHeaderContainer: 'flex items-center justify-between mt-[2.2rem] mb-[1.2rem]',
  authorContainer: 'flex-gap-[1rem]',
  authorProfileImageContainer: 'h-[4rem] w-[4rem] rounded-full grid center overflow-hidden',
  column: 'flex-1 flex flex-col justify-center',
  postDetails: `flex gap-[0.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[0.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: 'w-[0.5rem]', 
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`, 
  articleMainContainer: 'flex flex-col gap-[1rem]', 
  title: 'font-bold text-3xl',
  subtitle: 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
  articleText: 'font-mediumSerif text-[1.4rem] text-[#292929]'
  
  
  
}

const ArticleMain = ({ article, authorData }) => {
  // const { users } = useContext(MediumContext);
  // const [ authorData, setAuthorData ] = useState({}); 
  
  // useEffect(() => {
  //   setAuthorData(
  //     users?.find(user => (user.id === article?.data?.author))
  //   )
  // }, [article])
  
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image 
                className={`object-cover`}
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.data?.imageUrl}`}
                width={100}
                height={100}
              />
            </div>
          </div>
         
          <div className={styles.column}>
              <div>{authorData?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>
                   {
                     new Date(article?.data?.postedOn).toLocaleString('en-US', { day: 'numeric', month: 'short'})
                   } &#x2022; 
                   { 
                    article?.data?.readingTime
                    } read 
                    &#x2022;  
                </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> 
                  Listen 
                </span>
              </div>
            </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space}></div>
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
         
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image 
              className={'object-cover'}
              src={`https://res.cloudinary.com/demo/image/fetch/${article?.data?.bannerImage}`}  
              width={800}
              height={400}
            />
            
          </div>
          <h1 className={styles.title}>{ article?.data?.title }</h1>
          <h4 className={styles.subtitle}>
            <div>
              { authorData?.data?.name },{' '}
              { 
                new Date(article?.data?.postedOn).toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})
              }
            </div>
            <div>{article?.data?.brief}</div>
          </h4>

          <div className={styles.articleText}>
            {article?.data?.body}
          </div>
        </div>
        
        
      </div>
    </div> 
      
  
  )
}

export default ArticleMain