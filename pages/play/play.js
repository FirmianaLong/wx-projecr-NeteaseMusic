// pages/play/play.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl:"",
    lrc:{}
  },
//获取url
  getSongUrl: function (id) {
    app.util.request('POST', app.apiConfig.songurl, {
      id: id
    }).then(data => {
      this.playMusic(data.data.data[0].url)
    }, error => {
      console.log("登录错误状态：" + JSON.stringify(error))
    })
  },
  //播放
  playMusic: function (data) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '-'
    backgroundAudioManager.epname = '-'
    backgroundAudioManager.singer = '-'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = data // 设置了 src 之后会自动播放
  },
  //获取url
  getLrc: function (id) {
    app.util.request('POST', app.apiConfig.lyric, {
      id: id
    }).then(data => {
      this.setData({
        lrc: data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSongUrl(options.id)
    this.getLrc(options.id)
    this.setData({
      picUrl: decodeURIComponent(options.picUrl)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})