'use strict';

var Salt = function Salt() {
    var salt = 'merchant-api-key';
    return salt;
};
var mHash = function mHash(text) {
    var fcrypt = btoa(text);
    return btoa(fcrypt + Salt());
};
var mDecode = function mDecode(text) {
    var fcrypt = atob(text);
    var result = atob(fcrypt.slice(0, fcrypt.length - Salt().length));
    return result;
};