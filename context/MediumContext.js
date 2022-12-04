import { createContext, useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db, auth, provider } from '../firebase'; 
import { signInWithPopup } from 'firebase/auth';

const MediumContext = createContext();

const MediumProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]); 
    const [currentUser, setCurrentUser] = useState(null); 
  
    useEffect(() => {
      const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'users')); 
        setUsers(querySnapshot.docs.map(doc => {
          return {
            id: doc.id, 
            data: {
              ...doc.data()
            }, 
          }
        }));
      }

      const getArticles = async () => {
        const querySnapshot = await getDocs(collection(db, 'articles')); 
        setArticles(querySnapshot.docs.map(doc => {
          return {
            id: doc.id, 
            data: {
              author: doc.data().author, 
              bannerImage: doc.data().bannerImage, 
              body: doc.data().body, 
              brief: doc.data().brief, 
              category: doc.data().category,
              postedOn: doc.data().postedOn.toDate(), 
              readingTime: doc.data().readingTime, 
              title: doc.data().title, 
            }, 
          }
        }));
      }
      getUsers();
      getArticles(); 
  
    }, []);

    const addUserToFirebase = async (user) => {
      await setDoc(doc(db, 'users', user.email), {
        email: user.email, 
        name: user?.displayName ?? 'name', 
        imageUrl: user?.photoUrl ?? '', 
        followerCount: 0, 
      })
      
    }

    const handleUserAuth = async () => {
      const userData = await signInWithPopup(auth, provider);
      const user = userData?.user;
      console.log(user);
      setCurrentUser(user);
      addUserToFirebase(user);
    }
  
    return (
      <MediumContext.Provider
        value={{ users, articles, handleUserAuth, currentUser }}
      >
        { children }
      </MediumContext.Provider>
    )
  
}



  
export { MediumContext, MediumProvider } 