// js/encode.js

function encode(eName) {
  eId = document.getElementById(eName);
  if ( eId && eId.value.substring(0,3) != '[|]') {
    eId.value = '[|]'+base64_encode(eId.value);
  }
}

function base64_encode( data ) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Bayron Guevara
  // +   improved by: Thunder.m
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)    
  // -    depends on: utf8_encode
  // *     example 1: base64_encode('Kevin van Zonneveld');
  // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof window['atob'] == 'function') {
  //    return atob(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = ac = 0, enc="", tmp_arr = [];
  data = utf8_encode(data);
  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);
    bits = o1<<16 | o2<<8 | o3;
    h1 = bits>>18 & 0x3f;
    h2 = bits>>12 & 0x3f;
    h3 = bits>>6 & 0x3f;
    h4 = bits & 0x3f;
    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);
  enc = tmp_arr.join('');
  switch( data.length % 3 ){
		case 1:
      enc = enc.slice(0, -2) + '==';
		break;
		case 2:
      enc = enc.slice(0, -1) + '=';
		break;
  }
  return enc;
}

function utf8_encode ( str_data ) {
  // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)    
  // *     example 1: utf8_encode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'
  str_data = str_data.replace(/\r\n/g,"\n");
  var tmp_arr = [], ac = 0;
  for (var n = 0; n < str_data.length; n++) {
    var c = str_data.charCodeAt(n);
    if (c < 128) {
      tmp_arr[ac++] = String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      tmp_arr[ac++] = String.fromCharCode((c >> 6) | 192);
      tmp_arr[ac++] = String.fromCharCode((c & 63) | 128);
    } else {
      tmp_arr[ac++] = String.fromCharCode((c >> 12) | 224);
      tmp_arr[ac++] = String.fromCharCode(((c >> 6) & 63) | 128);
      tmp_arr[ac++] = String.fromCharCode((c & 63) | 128);
    }
  }
  return tmp_arr.join('');
}
