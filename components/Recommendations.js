import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from 'react-icons/md';
import ReplitLogo from '../static/replit.png';
import TutorialImg from '../static/tutorial.jpg';
import CPLogo from '../static/cp.png';
import Qazi from '../static/qazi.jpg';
import JSLogo from '../static/jsLogo.png'; 

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`, 
  accentedButton: `flex items-center justify-center text-sm text-white bg-black my-[2rem] py-[0.6rem] rounded-full`, 
  searchBar: `flex items-center gap-[0.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: 'my-[2rem]',
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[0.2rem] mt-[1rem]`,
  authorFollowers: `text-[#787878]`,
  authorActions: `flex gap-[0.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[0.6rem] py-[0.4rem] text-sm`,
  recommendationContainer: ``,
  recommendationAuthorContainer: `flex items-center gap-[0.6rem]`, 
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden w-[1.4rem] h-[1.4rem]`, 
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`, 
  recommendationThumbnail: `object-cover`, 
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`, 
}

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>
        Get Unlimited Access
      </div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input 
          className={styles.searchInput}
          type='text'
          placeholder={'Search'}  
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image 
            src={Qazi}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>
          Mahidhar
        </div>
        <div className={styles.authorFollowers}>
          1M followers
        </div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}><MdMarkEmailUnread /></button>
        </div>
        <div className={styles.recommendationcontainer}>
          <div className={styles.title}>More from medium</div>
         
          <div className={styles.articlesContainer}>

            {
              recommendedPosts.map(post => {
                return (
                  <div className={styles.articleContentWrapper} key={post.title}>
                    <div className={styles.articleContent}>
                       <div className={styles.recommendationAuthorContainer}>
                        <div className={styles.recommendationAuthorProfileImageContainer}>
                          <Image src={post?.author?.image} width={100} height={100} />
                        </div>
                        <div className={styles.recommendationAuthorName}>
                          {post?.author.name}
                        </div> 
                      </div>
                       <div className={styles.recommendationTitle}> 
                         {post.title}
                       </div>
                     </div>
                    <div className={styles.recommendationThumbnailContainer}>
                        <Image 
                          className={styles.recommendationThumbnail}
                          src={post?.image} 
                        />
                       </div>
                  </div>
                  
                )
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'What can you do with Replit?',
    image: ReplitLogo, 
    author: {
      name: 'Mahidhar N', 
      image: Qazi, 
    }
  },
  {
    title: 'The ultimate javascript course for beginners',
    image: JSLogo, 
    author: {
      name: 'Mahidhar N', 
      image: Qazi, 
    }
  },
  {
    title: 'How to get ideas for Apps',
    image: ReplitLogo, 
    author: {
      name: 'Mahidhar N', 
      image: Qazi, 
    }
  }
]