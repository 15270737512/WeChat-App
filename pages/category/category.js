// pages/category/category.js

let datas = require("../../datas/list-category.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cateItems:[],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  /**选择分类 获得 点击对象 跳转回发布商品 */
  navigatorToRelease(e){
    /**赋值到全局数据中 */
    getApp().tapCate = e.currentTarget.dataset;
    wx.navigateBack({
      url: '/pages/release/release',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   this.setData({
     cateItems:datas
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