
// import { initializeApp } from "firebase/app";
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDtW5AYEjpw7DNTJuJtaLhRYpz6zfCzIck",
//   authDomain: "auth-fbb2a.firebaseapp.com",
//   projectId: "auth-fbb2a",
//   storageBucket: "auth-fbb2a.appspot.com",
//   messagingSenderId: "404540198736",
//   appId: "1:404540198736:web:560fc551e311e909b2a655",
//   measurementId: "G-0K5JJXLLVJ"
// };
// const app = initializeApp(firebaseConfig);

// export {app};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7AY59Dr2yDGoOMYYbKuI2aywA_cXe9Mc",
  authDomain: "phoneauth-3d64d.firebaseapp.com",
  projectId: "phoneauth-3d64d",
  storageBucket: "phoneauth-3d64d.appspot.com",
  messagingSenderId: "960929564067",
  appId: "1:960929564067:web:b4c7e8ec9e48197b41c616",
  measurementId: "G-2EBETMNFRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app};
