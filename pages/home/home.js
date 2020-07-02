// pages/home/home.js
const app = getApp();
Page({

   /**
    * 页面的初始数据
    */
   data: {
      campusServerImg: ['/image/index/icon_tushuguan@2x.png', '/image/index/icon_fantanfenliu@2x.png', '/image/index/icon_jinxiaosaoma@2x.png'],
      tempArr:['/image/entercanteen/commom_fuhe@2x.png','/image/entercanteen/comom_bufuhe@2x.png'],
      passImg:'/image/enterCanteen/commom_fuhe@2x.png',
      nopassImg:'/image/enterCanteen/comom_bufuhe@2x.png',
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
      indexList: 0,
      typeArray: [
         '云音乐新歌榜',
         '云音乐热歌榜',
         '网易原创歌曲榜',
         '云音乐飙升榜',
         '云音乐电音榜',
         'UK排行榜周榜',
         '美国Billboard周榜',
         'KTV嗨榜',
         'iTunes榜',
         'Hit FM Top榜',
         '日本Oricon周榜',
         '韩国Melon排行榜周榜',
         '韩国Mnet排行榜周榜',
         '韩国Melon原声周榜',
         '中国TOP排行榜(港台榜)',
         '中国TOP排行榜(内地榜)',
         '香港电台中文歌曲龙虎榜',
         '华语金曲榜',
         '中国嘻哈榜',
         '法国 NRJ EuroHot 30周榜',
         '台湾Hito排行榜',
         'Beatport全球电子舞曲榜',
         '云音乐ACG音乐榜',
         '云音乐嘻哈榜',
      ],
      listsong: [],
      searchsong: [],
      word: "",
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
   // onPullDownRefresh: function() {
   //    wx.startPullDownRefresh()
   // },
   //跳转播放界面
   toPlay: function(e) {
      wx.navigateTo({
         url: "../play/play?id=" + e.currentTarget.dataset.id + "&picUrl=" + encodeURIComponent(e.currentTarget.dataset.picurl)
      })
   },
   bindPickerChange: function (e) {
      this.setData({
         indexList: e.detail.value
      })
      this.getList(this.data.indexList);
   },
   //热歌榜
   getList: function(idx) {
      app.util.request('POST', app.apiConfig.list, {
         idx:idx
      }).then(data => {
         this.setData({
            listsong: data.data.playlist.tracks
         })
      })
   },
   //搜索
   getWord: function(e) {
      this.setData({
         word: e.detail.value
      })
   },
   search: function() {
      app.util.request('POST', app.apiConfig.search, {
         keywords: this.data.word
      }).then(data => {
         this.setData({
            searchsong: data.data.result.songs
         })
      })
   },
   clear: function() {
      this.setData({
         searchsong: [],
         word: ""
      })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      this.imageLoad();
      // this.requestCellphone();
      // this.requestMusicPlayList();
      this.getPersonalized();
      this.getNewSong();
      this.getList(this.data.indexList);
      this.search();
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