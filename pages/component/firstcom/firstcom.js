// pages/component/firstcom/firstcom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    loginShow: true,
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickButton: function() {
      this.setData({
        myProperty: '已登录',
        loginShow: false
      })
    },
    clickButton2: function() {
      var myEventDetail = {
        myEventDetail: "myEventDetail"
      } // detail对象，提供给事件监听函数
      var myEventOption = {
        myEventOption: "myEventOption"
      } // 触发事件的选项
      this.triggerEvent('forEvent', myEventDetail, myEventOption)
    },
    imageLoad: function() {
      this.setData({
        imageWidth: wx.getSystemInfoSync().windowWidth, //图片宽度
      })
    },
   

  },




  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
})