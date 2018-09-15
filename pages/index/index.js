Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"huangh",
    //用户信息
    userInfo:{},
    //用户信息授权状态
    userState:true
  },
  hanldFater(){
    console.log("fater")
  },
  hanldKid(){
    console.log("kid")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
  },
  //获取用户的信息，判断是否授权
  getUserInfo(){
    //获取当前用户是否授权
    wx.getSetting({
      success: (data) => {
        //判断是否授权
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            userState: true
          })
          wx.navigateTo({
            url: '/pages/list/list',
          })
        } else {
          this.setData({
            userState: false
          })
        }

      }
    })

    wx.getUserInfo({
      success: (data) => {
        //设置用户信息
        this.setData({
          userInfo: data.userInfo,
          userState: true
        })
      },
      fail: () => {
        console.log('get userinfo error')
      }

    })
  },
  //获取用户信息窗口,点击的是否同意回调信息
  getUserTap(data){
    if(data.detail.rawData){
      //用户点击了同意
      this.getUserInfo();
      wx.navigateTo({
        url: '/pages/list/list',
      })
      
    }
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