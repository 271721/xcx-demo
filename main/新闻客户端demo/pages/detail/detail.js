//logs.js
Page({
  data: {
    title:'',
    url:''
  },
  onLoad: function (options) {
    this.setData({
      title:options.title,
      url:options.url
    })
  }
})
