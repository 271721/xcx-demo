//index.js
//获取应用实例
Page({
  data: {
    topNews:[],
    techNews:[]
  },
  onLoad: function () {
    var that = this
  // 访问聚合数据的网络接口-头条新闻
  wx.request({
    url: 'http://v.juhe.cn/toutiao/index',
    data: {
     type: 'topNews' ,
     key: '482e213ca7520ff1a8ccbb262c90320a'
    },
    header: {
        'Content-Type': 'application/json'
    },
    success: function(res) {
      if (res.data.error_code == 0) {
        that.setData({
        topNews:res.data.result.data
        })
      } else {
        console.log('获取失败');
      }
    }
  })
// 访问聚合数据的网络接口-科技新闻
  wx.request({
    url: 'http://v.juhe.cn/toutiao/index',
    data: {
     type: 'keji' ,
     key: '482e213ca7520ff1a8ccbb262c90320a'
    },
    header: {
        'Content-Type': 'application/json'
    },
    success: function(res) {
      if (res.data.error_code == 0) {
        that.setData({
        techNews:res.data.result.data
        })
      } else {
        console.log('获取失败');
      }
    }
  })

  },
    //事件处理函数
  bindViewTap: function(event) {
    wx.navigateTo({
      url: '../detail/detail?title='+event.currentTarget.dataset.title+'&url='+event.currentTarget.dataset.url
    })
  },
})
