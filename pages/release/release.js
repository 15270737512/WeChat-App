// pages/release/release.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadImages:[],
    chooceCate:{},
    cateType:false
  },

  uploadImage(){
    console.log("tap this ")
    wx.chooseImage({
      count:3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success : (res) => {
        console.log(res.tempFilePaths)
        this.setData({
          uploadImages:res.tempFilePaths
        })
      },
    })
  },
  /**前往分类页 */
  goToCategoryPage(){
    wx.navigateTo({
      url: '/pages/category/category',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    let cate = getApp().tapCate;
    /**用作判断是否显示 选着分类 */
    let typeCate =Object.keys(cate).length;
    if (typeof (cate) != "undefined"&&typeCate!=0){
      this.setData({
        chooseCate: cate,
        cateType:true
      })  
    }
    
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