import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//will affect all requests sent anywhere in the app in all files 
//In the request You need to return the request in order to app work properly
axios.interceptors.request.use(request => {
    console.log('Interceptors request: ',request);
    return request;
},error => {
    console.log('Global error request: ',error);
    //So the rror will be handled
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Interceptors response: ',response);
    return response;
},error => {
    console.log('Global error response: ',error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
