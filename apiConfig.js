const host = "http://localhost:3000";

const apiConfig = {
  host,

  //登陆
  login:`${host}/login/cellphone`,
  //获取每日推荐歌单
  resource: `${host}/recommend/resource`,
  //推荐新音乐
  newsong: `${host}/personalized/newsong`,
  //获取音乐 url
  songurl: `${host}/music/url`,
  //可获取推荐歌单
  personalized: `${host}/personalized`,
  //获取歌词
  lyric: `${host}/lyric`,

}



module.exports = apiConfig  