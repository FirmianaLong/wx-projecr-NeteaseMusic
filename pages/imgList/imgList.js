var app = getApp()
var setTime = require('../../utils/util.js')
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
// var tempFilePath;
var encryptedData;
var iv;
Page({
  data: {
    tempFilePaths: [],
    recorderTempFilePath: "",
    runData: []
  },
  onLoad: function() {},
  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
        console.log(_this.data.tempFilePaths)
      }
    })
  },
  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: this.data.tempFilePaths[2],
      urls: this.data.tempFilePaths,
    })
    wx.getImageInfo({
      src: this.data.tempFilePaths[2],
      success: function(res) {
        console.log(res)
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(res) {}
        })
      }
    })
  },
  //开始录音的时候
  start: function() {

    const options = {
      duration: 10000, //指定录音的时长，单位 ms
      sampleRate: 44100, //采样率
      numberOfChannels: 1, //录音通道数
      encodeBitRate: 192000, //编码码率
      format: 'aac', //音频格式，有效值 aac/mp3
      frameSize: 500, //指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },
  //停止录音
  stop: function() {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.recorderTempFilePath = res.recorderTempFilePath;
      console.log('停止录音', res.recorderTempFilePath)

      const {
        recorderTempFilePath
      } = res
      console.log({
        recorderTempFilePath
      })
    })
  },
  //播放声音
  play: function() {

    innerAudioContext.autoplay = true
    innerAudioContext.src = this.recorderTempFilePath,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },
  getSport() {
    var that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          const code = res.code
          console.log(res)
          wx.getWeRunData({
            success(res) {
              this.encryptedData = res.encryptedData
              this.iv = res.iv
              wx.request({
                url: 'http://172.16.10.191:3000/get',
                method: 'GET',
                data: {
                  code: code,
                  encryptedData: this.encryptedData,
                  iv: this.iv
                },
                success: function(res) {
                  console.log(res)
                  that.setData({
                    runData: JSON.stringify(res.data.stepInfoList)|| 0
                  })
                },
                fail:function(res){
                  console.log(res)
                }
              })
            }
          })

        }
      }
    })
  },

  playMusic: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
  },
})