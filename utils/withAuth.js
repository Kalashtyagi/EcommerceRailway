import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../config';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    

    useEffect(() => {
    //   const auth = getAuth(app);
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (!user) {
    //       router.push('/'); // Redirect to login page if user is not authenticated
    //     }
    //     console.log(user,"uuuu")
    //   });

    //   return () => unsubscribe();
    // const pf = localStorage.getItem("pf");
    // const ppo = localStorage.getItem("ppo");
    // if(!pf || !ppo){
    //     router.push('/');   
    // }
  
    // if(!mNum && (!pf || !ppo)){
    //     router.push('/');
    // }
    const mNum = localStorage.getItem("mobile");
    const pf = localStorage.getItem("pf");
    const ppo = localStorage.getItem("ppo");

    if(mNum && (!pf &&  !ppo)){
        router.push('/Login')  
    }else if(!mNum && (!pf && !ppo)){
        router.push('/')

    }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
