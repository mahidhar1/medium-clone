import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'; 
import ReadersNav from "../../components/ReadersNav"; 
import ArticleMain from "../../components/ArticleMain"; 
import Recommendations from "../../components/Recommendations"; 
import { MediumContext } from '../../context/MediumContext';


const styles = {
  content: 'flex'
}

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  const { articles, users } = useContext(MediumContext);

  const [article, setArticle] = useState({});
  const [authorData, setAuthorData] = useState({});
  
  useEffect(() => {
    if(articles.length === 0) {
      return 
    }  
    setArticle(
      articles?.find(article => (article.id === slug))
    ); 
    setAuthorData(
      users?.find(user => (user.id === article?.data?.author))
    )
  }, [article]);

  
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain article={article} authorData={authorData}/>
      <Recommendations />
    </div>
  )
}

export default Post;