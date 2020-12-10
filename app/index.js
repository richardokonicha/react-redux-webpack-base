import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import Todo from './Todo.js';
import store from './store';

import { ReactReduxFirebaseProvider , firebaseReducer } from 'react-redux-firebase';

import { ReactReduxContext } from 'react-redux';

const fbConfig = {
    apiKey: "AIzaSyD5CdtPsVHQWbLg53DTYatZPtn9V5hbqII",
    authDomain: "mobile-money-ddb7a.firebaseapp.com",
    databaseURL: "https://mobile-money-ddb7a.firebaseio.com",
    projectId: "mobile-money-ddb7a",
    storageBucket: "mobile-money-ddb7a.appspot.com",
    messagingSenderId: "564905005929",
    appId: "1:564905005929:web:b1e083aa8c99776b43a3f8",
    measurementId: "G-QQXQT5NM0T"
};

firebase.initializeApp(fbConfig);

// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 Hello World yep
//             </div>
//         )
//     }
// }

function App(){
    return(
        <Provider store={store}>
                <Todo/>
        </Provider>
    )
}

render(<App/>, document.getElementById('root'));