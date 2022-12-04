import { useContext } from 'react'; 
import Header from "../components/Header"; 
import Banner from "../components/Banner"; 
import PostCard from "../components/PostCard"; 
import { MediumContext } from "../context/MediumContext";

const styles = {
  wrapper: `mx-auto`, 
  main: 'flex justify-center', 
  container: `max-w-7xl flex-1`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
}

export default function Home() {
  const { users, articles } = useContext(MediumContext);
  console.log(users);
  console.log(articles); 
  
  return (
    <div className={styles.wrapper}>
     <Header />
     <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            {
              articles.map(article => (
                <PostCard key={article.id} article={article}/>
              ))
            }
            
           
          </div>
        </div>
      </div>
    </div>
  )
}
