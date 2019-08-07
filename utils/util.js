const util = {

  formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },

  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  request(method = 'GET', url = '', data = {}, header = null,xhrFields= { withCredentials: true }) {
    let _header = {
      'content-type': 'application/x-www-form-urlencoded',
      'cookie': wx.getStorageSync("sessionid")//读取cookie
    }
    if (header) {
      _header = object.assign(_header,header)
    }
    wx.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header: _header,
        success: function(res) {
          if (res.data.code == 200) {
            return resolve(res);
          }else{
            return reject(res);
          }
        },
        fail: function (res) {
          return reject(res);
        },
        complete: function() {
          wx.hideLoading();
        },
      })
    })
  }
}


module.exports = util