// pages/detail/detail.js
let detaliData = require("../../datas/list-detail.js") // 商品详情 
let messageData = require("../../datas/list-message.js") //商品的留言
let flag = getApp().i;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgData: [] ,
    itemData:[],
    starUrl:"/images/icon/none-star.png"

  },
  // 点击收藏
  tapStar(){
    if (flag){
      this.setData({
        starUrl: "/images/icon/star.png"
      })
      flag=false
      wx.showToast({
        title: '已收藏',
      })
      return ;
    }
    if (!flag){
      this.setData({
        starUrl: "/images/icon/none-star.png"
      })
      wx.showToast({
        title: '已取消',
      })
      flag=true
      
    }
   
  },
  
  changeInputValue(ev) {
    this.setData({
      inputVal: ev.detail.value
    })
  },
  //删除留言
  DelMsg(ev) {
    wx.showModal({
      title: '删除',
      content: '确定要删除我？qaq',
      success : (reslut)=>{
        if(reslut.confirm){ //点击了删除
          var n = ev.target.dataset.index;
          var list = this.data.msgData;
          list.splice(n, 1);
          this.setData({
            msgData: list
          });
        }
      }
    })
  
  },
  //获取用户信息
  getUser:function(){
   
  },
  //添加留言
  addMsg() {
    wx.getUserInfo({
      success: (result) => {
        console.log(result)
        var list ={}
        let inputVal = this.data.inputVal;
        /**判断空格 */
        var re = /^\s+$/;
   
        if (inputVal != "" && inputVal != null && !re.exec(inputVal)) {
          //输入的内容放入变量中
          list={
            msg_author:result.userInfo.nickName,
            product_id:result.userInfo.id,
            msg_content: this.data.inputVal
          };
          //更新 发送请求 添加到数据库 然后刷新页面

        } else {
          wx.showToast({
            title: '留点什么吧:)',
            icon: "none"
          })
        }

    
      }
    })

  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      itemData: detaliData,
      msgData: messageData
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