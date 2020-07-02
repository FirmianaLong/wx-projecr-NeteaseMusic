const host = "http://172.16.10.185:3000";


const apiConfig = {
   host,

   //登陆
   login: `${host}/login/cellphone`,
   //获取每日推荐歌单
   resource: `${host}/recommend/resource`,
   //推荐新音乐
   newsong: `${host}/personalized/newsong`,
   //获取音乐 url
   songurl: `${host}/song/url`,
   //可获取推荐歌单
   personalized: `${host}/personalized`,
   //获取歌词
   lyric: `${host}/lyric`,
   //所有榜单
   toplist: `${host}/toplist`,
   //排行榜
   list: `${host}/top/list`,
   //搜索
   search: `${host}/search`,

}



module.exports = apiConfig