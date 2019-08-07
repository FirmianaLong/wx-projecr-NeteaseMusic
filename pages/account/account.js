// pages/account/account.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginViewShow: 1,
    accountInfo: {
      "data": {
        "loginType": 1,
        "clientId": "ff1853ac4fd7bf839545712bb6898d50fdb2645674ab5bd233bc58c067df9ad99e81aa3249075862cc2a56909533bc46",
        "effectTime": 2147483647,
        "code": 200,
        "account": {
          "id": 75906691,
          "userName": "1_13612301271",
          "type": 1,
          "status": 0,
          "whitelistAuthority": 0,
          "createTime": 1434855332092,
          "salt": "[B@1ff3ae3f",
          "tokenVersion": 0,
          "ban": 0,
          "baoyueVersion": 0,
          "donateVersion": 0,
          "vipType": 0,
          "viptypeVersion": 0,
          "anonimousUser": false
        },
        "profile": {
          "userId": 75906691,
          "gender": 1,
          "accountStatus": 0,
          "vipType": 0,
          "city": 440100,
          "nickname": "省港澳流川枫",
          "remarkName": null,
          "mutual": false,
          "defaultAvatar": false,
          "avatarUrl": "http://p1.music.126.net/1cBWIiISEuri8MiyGBz4GA==/109951163248576464.jpg",
          "birthday": 662659200000,
          "province": 440000,
          "avatarImgId": 109951163248576460,
          "backgroundImgId": 109951162980863700,
          "userType": 0,
          "experts": {},
          "expertTags": null,
          "authStatus": 0,
          "backgroundUrl": "http://p1.music.126.net/wi3ovn7AbGJY4F30j-hFRQ==/109951162980863690.jpg",
          "detailDescription": "",
          "djStatus": 0,
          "followed": false,
          "avatarImgIdStr": "109951163248576464",
          "backgroundImgIdStr": "109951162980863690",
          "description": "",
          "signature": "24K纯帅Ծ ̮ Ծ",
          "authority": 0,
          "avatarImgId_str": "109951163248576464"
        },
        "bindings": [{
          "userId": 75906691,
          "tokenJsonStr": "{\"countrycode\":\"\",\"cellphone\":\"13612301271\",\"hasPassword\":true}",
          "url": "",
          "expiresIn": 2147483647,
          "expired": false,
          "refreshTime": 1434855686,
          "id": 35650065,
          "type": 1
        }, {
          "userId": 75906691,
          "tokenJsonStr": "{\"allow_all_act_msg\":true,\"favourites_count\":903,\"urank\":28,\"verified_trade\":\"\",\"weihao\":\"\",\"verified_source_url\":\"\",\"province\":\"44\",\"screen_name\":\"秋景有时飞独鸟\",\"id\":2126764622,\"geo_enabled\":true,\"like_me\":false,\"like\":false,\"verified_type\":-1,\"access_token\":\"2.00Mdgv_C0Gg4617a88207cd9ROlp_C\",\"pagefriends_count\":0,\"domain\":\"\",\"following\":false,\"name\":\"秋景有时飞独鸟\",\"cover_image_phone\":\"http://ww1.sinaimg.cn/crop.0.0.640.640.640/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg\",\"idstr\":\"2126764622\",\"follow_me\":false,\"friends_count\":30,\"credit_score\":80,\"gender\":\"m\",\"city\":\"1000\",\"profile_url\":\"u/2126764622\",\"description\":\"\",\"created_at\":\"Mon May 02 00:16:10 +0800 2011\",\"remark\":\"\",\"ptype\":0,\"verified_reason_url\":\"\",\"block_word\":0,\"uid\":\"2126764622\",\"avatar_hd\":\"http://tvax1.sinaimg.cn/crop.0.0.751.751.1024/7ec3da4ely8fr4eokk0rpj20kv0kv0ts.jpg\",\"mbtype\":0,\"bi_followers_count\":9,\"scope\":\"follow_app_official_microblog\",\"user_ability\":33554432,\"verified_reason\":\"\",\"story_read_state\":-1,\"video_status_count\":0,\"mbrank\":0,\"lang\":\"zh-cn\",\"expires_in\":2687953,\"class\":1,\"remind_in\":\"2687953\",\"star\":0,\"allow_all_comment\":true,\"online_status\":0,\"verified\":false,\"profile_image_url\":\"http://tvax1.sinaimg.cn/crop.0.0.751.751.50/7ec3da4ely8fr4eokk0rpj20kv0kv0ts.jpg\",\"block_app\":0,\"url\":\"\",\"avatar_large\":\"http://tvax1.sinaimg.cn/crop.0.0.751.751.180/7ec3da4ely8fr4eokk0rpj20kv0kv0ts.jpg\",\"statuses_count\":2,\"vclub_member\":0,\"followers_count\":30,\"location\":\"广东\",\"isRealName\":\"true\",\"insecurity\":{\"sexual_content\":false},\"verified_source\":\"\"}",
          "url": "http://weibo.com/u/2126764622",
          "expiresIn": 2687953,
          "expired": false,
          "refreshTime": 1533140446,
          "id": 6645715725,
          "type": 2
        }, {
          "userId": 75906691,
          "tokenJsonStr": "{\"openId\":\"0F446D73770E66E4CA45B8713C3D2AE1\",\"nick\":\"隆\",\"uid\":\"0F446D73770E66E4CA45B8713C3D2AE1\",\"refresh_token\":\"43134f5ae6c06249880a9d3d3d261682\",\"access_token\":\"9999f9dd4c4a9951728fd45b5578d8b3\",\"name\":\"CCTV___________\",\"expires_in\":8035200}",
          "url": "http://t.qq.com/CCTV___________",
          "expiresIn": 8035200,
          "expired": true,
          "refreshTime": 1451216047,
          "id": 35642862,
          "type": 6
        }, {
          "userId": 75906691,
          "tokenJsonStr": "{\"access_token\":\"652A49D2D529A9E21B10DED2256E5C9E\",\"refresh_token\":\"6208C6778497D13960618B6E0FDC7FD4\",\"openid\":\"50F390D8D1EBC8D1B61724877A160690\",\"nickname\":\"L\",\"expires_in\":7776000}",
          "url": "",
          "expiresIn": 7776000,
          "expired": false,
          "refreshTime": 1532706990,
          "id": 6594397689,
          "type": 5
        }]
      },
      "header": {
        "X-Powered-By": "Express",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "__csrf=6bc0b1c252620f096bbddddbed0e9bc9; Domain=; Expires=Fri, 31-Aug-2018 04:20:39 GMT; Path=/,MUSIC_U=93a81504305949fa4f692b49500515cbfb8afa51f95d56a1b23dcf691fffc9829ea8583a11865e9464caa875b34cc855fe2897047e8106fb; Expires=Tue, 03 Sep 2086 07:34:36 GMT; Path=/; HttpOnly; Domain=,appver=1.5.9;Path=/,os=osx;Path=/,channel=netease;Path=/,osver=%E7%89%88%E6%9C%AC%2010.13.2%EF%BC%88%E7%89%88%E5%8F%B7%2017C88%EF%BC%89;Path=/",
        "Content-Length": "4057",
        "ETag": "W/\"fd9-lGy92uaiFnHGK+dtvrp15ulbWUY\"",
        "cache-control": "max-age=120",
        "Date": "Thu, 16 Aug 2018 04:18:59 GMT",
        "Connection": "keep-alive"
      },
      "statusCode": 200,
      "errMsg": "request:ok"
    },
    animationData: {}
  },
  showInput() {
    this.setData({
      loginViewShow: 2
    })
    // if (this.data.loginViewShow) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.translateX(-375).step()
    this.setData({
      animationData: animation.export()
    })
    // }
  },
  showLogin() {
    this.setData({
      loginViewShow: 1
    })
    wx.switchTab({
      url: 'page/home/home'
    })
  },
  formSubmit(e) {
    app.util.request('POST', app.apiConfig.login, {
      phone: e.detail.value.phone_value || "13612301271",
      password: e.detail.value.password_value || "qq6647787"
    }).then(data => {
      console.log("登录状态：" + JSON.stringify(data))
      wx.setStorageSync("sessionid", data.header["Set-Cookie"])
      this.setData({
        loginViewShow: 3,
        accountInfo: data.data
      })
    }, error => {
      console.log("登录错误状态：" + JSON.stringify(error))
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.login()
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