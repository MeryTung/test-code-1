;(function () {

  // simple mock Axios

  function Axios () {
    this.requestConfig = {}
    this.responseConfig = {}
  }

  Axios.prototype.intercepters = {
    request: {
      use: function useRequest (callback) {
        this.requestConfig = Object.assign({}, this.requestConfig, callback(this.requestConfig))
      }
    },
    response: {
      use: function useResponse (callback) {
        this.responseConfig = Object.assign({}, this.responseConfig, callback(this.responseConfig))
      }
    }
  }

  Axios.prototype.get = function get () {

  }

  Axios.prototype.post = function post () {

  }

  Axios.prototype.request = function request ({
    url, 
    method, 
    headers,
    data
  }) {

  }

})();