// pages/list/list.js

let datas = require('../../datas/list-data.js')

Page({


  /**
   * 页面的初始数据
   */
  data: {
    //循环列表数据
    listArr:[]
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
      this.setData({
        listArr: datas.list_data
      })
  },



  linkToDetail(){   
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideLoading()
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     console.log("12")
        setTimeout(function () {
         wx.stopPullDownRefresh()
         },1000)

 

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})