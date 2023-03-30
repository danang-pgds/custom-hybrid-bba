'use strict';

const Salt = ()=>{
    const salt = 'merchant-api-key';
    return salt;
}
const mHash = (text)=>{
    const fcrypt = btoa(text);
    return btoa(fcrypt+Salt());
}
const mDecode = (text)=>{
    const fcrypt = atob(text);
    const result = atob(fcrypt.slice(0,fcrypt.length-Salt().length));
    return result;
}