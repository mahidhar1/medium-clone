import { useContext, useState } from 'react';
import { useRouter } from "next/router"; 
import { MediumContext } from '../context/MediumContext'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; 


const styles = {
  wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`, 
  title: `my-[2rem] font-bold text-3xl`, 
  smallField: `w-full flex justify-between gap-[1rem]`,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
 
  
}

const WriteArticle = () => {
  const { currentUser } = useContext(MediumContext); 
  const router = useRouter(); 

  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [category, setCategory] = useState('');
  const [readingTime, setReadingTime] = useState('0');
  const [bannerImage, setBannerImage] = useState('');
  const [body, setBody] = useState('');

  const addPostToFirebase = async (event) => {
    event.preventDefault(); 
    await addDoc(
      collection(db, 'articles'), {
        bannerImage, 
        body, 
        category, 
        brief, 
        readingTime, 
        postedOn: serverTimestamp(), 
        title, 
        author: currentUser.email, 
      }
    );
    router.push('/'); 
    
  }
  
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Write an article</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Title
        </span>
        <span className={styles.inputContainer}>
          <input 
            className={styles.inputField}
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Brief
        </span>
        <span className={styles.inputContainer}>
          <input 
            className={styles.inputField}
            type='text'
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Banner Image Url
        </span>
        <span className={styles.inputContainer}>
          <input 
            className={styles.inputField}
            type='text'
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Category
        </span>
        <span className={styles.inputContainer}>
          <input 
            className={styles.inputField}
            type='text'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Reading Time (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input 
            className={styles.inputField}
            type='text'
            value={readingTime}
            onChange={(event) => setReadingTime(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Article Text
        </span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            rows={12}
            type='text'
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </span>
      </div>

      <button 
        className={styles.accentedButton}
        onClick={addPostToFirebase}
      >
        Submit
      </button>
    </div>
  )
  
}

export default WriteArticle; 