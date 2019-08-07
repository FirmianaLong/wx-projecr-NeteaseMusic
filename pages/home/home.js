// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonList: [
      //功能选项列表
      {
        text: "推荐音乐"
      },
      {
        text: "热歌榜"
      },
      {
        text: "搜索"
      }
    ],
    buttonOpiton: 0,
    personalized: [],
    newsong: [],



    itemUrls: [{
      url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      navigatorUrl: "/pages/imgList/imgList"
    }, {
      url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      navigatorUrl: "/pages/audio/audio"
    }, {
      url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      navigatorUrl: "/pages/map/map"
    }, ],
    imageWidth: 0,
    getApiData: ""
  },

  imageLoad: function() {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth, //图片宽度
    })
  },
  getPhoneNumber: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  onGotUserInfo: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setData({
      avater: e.detail.userInfo.avatarUrl,
      nickName: e.detail.userInfo.nickName + "-",
      gender: (e.detail.userInfo.gender ? "男" : "女") + "-",
      city: e.detail.userInfo.city
    })
  },
  //选项卡 -->
  isbuttonChecked: function(e) {
    this.setData({
      buttonOpiton: e.currentTarget.dataset.index
    })
  },
  getPersonalized: function() {
    app.util.request('POST', app.apiConfig.personalized, {}).then(data => {
      console.log(data)
      this.setData({
        personalized: data.data.result
      })
    }, error => {
      console.log("登录错误状态：" + JSON.stringify(error))
    })
  },
  getNewSong: function() {
    app.util.request('POST', app.apiConfig.newsong, {}).then(data => {
      this.setData({
        newsong: data.data.result
      })
    }, error => {
      console.log("登录错误状态：" + JSON.stringify(error))
    })
  },
  //页面下拉刷新
  onPullDownRefresh: function() {
    console.log(111)
    wx.startPullDownRefresh()
  },
  //跳转播放界面
  toPlay: function(e) {
    wx.navigateTo({
      url: "../play/play?id=" + e.currentTarget.dataset.id + "&picUrl=" + encodeURIComponent(e.currentTarget.dataset.picurl)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(encodeURIComponent('我'))
    this.imageLoad();
    // this.requestCellphone();
    // this.requestMusicPlayList();
    this.getPersonalized();
    this.getNewSong();
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