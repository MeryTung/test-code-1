;(function () {
  // axios buildURL
  // https://github.com/axios/axios/blob/master/lib/helpers/buildURL.js

  var toString = Object.prototype.toString;

  function isPlainObject (field) {
    return toString.call(field) === '[object Object]';
  }

  function isDate (field) {
    return toString.call(field) === '[object Date]';
  }

  function isURLSearchParams (val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }

  function encode (val) {
    return encodeURIComponent(val)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  function buildURL (url, params) {
    if (!params) {
      return url;
    }
  
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
  
      Object.keys(params).forEach(key => {
        const val = params[key];
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (Array.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }
  
        val.forEach((v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isPlainObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      const hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
  
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };

  console.log(buildURL('https://github.com/zhaoyiming0803?a=1', {
    b: [
      1, 
      2, 
      3, 
      {
        a: 1, 
        b: {
          c: 123
        }
      }
    ]
  }));

})();