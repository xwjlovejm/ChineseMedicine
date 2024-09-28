import Toast from '@vant/weapp/toast/toast';

const app = getApp<IAppOption>()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    roleCodes:false,
    arr:[
      'https://www.xiangruzy.cn/wechat/image/banner1.jpg',
      'https://www.xiangruzy.cn/wechat/image/banner2.jpg',
      'https://www.xiangruzy.cn/wechat/image/banner3.jpg',
    ],
  },
  onLoad () {
    console.log(app.globalData.mobile)
    
    console.log(app.globalData.roleCode)
    this.setData({
      mobile:app.globalData.mobile,
      roleCode:app.globalData.roleCode
    })
    if(app.globalData.roleCode.indexOf('partner') !== -1){
      this.setData({
        roleCodes:true
      })
    }
  },
  onInfo(){
    wx.request({   
       url: 'https://www.xiangruzy.cn/wechat/query-health-flag', // 替换为你的接口地址  
      //url: 'https://localhost/wechat/query-health-flag', // 替换为你的接口地址  
      method: 'GET', // 或者 'POST'  
      // 如果是POST请求，可以通过 data 字段发送数据  
      data:{
        mobile:this.data.mobile
      },  
      success: function(res) {  
        console.log(res)
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200 && res.data.respCode === '0000') {  
            wx.navigateTo({
              url :"../info/info",
            })
          }else{
            wx.showToast({
              title: res.data.respMsg,
              icon: 'loading',
              duration: 2000
            })
          }
      },  
      fail: function(err) {  
          // 请求失败时执行的回调函数  
          console.error('请求发生错误：', err);  
          wx.showToast({
            title: '网络异常',
            icon: 'error',
            duration: 2000
          })
      }  
    }); 
  },
  onCooperate(){
    wx.navigateTo({
      url :"../distribution/distribution",
    })
  },
  onReport(){
    wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/report-health-flag', // 替换为你的接口地址  
     // url: 'https://localhost/wechat/report-health-flag', // 替换为你的接口地址  
      method: 'GET', // 或者 'POST'  
      // 如果是POST请求，可以通过 data 字段发送数据  
      data:{
        mobile:this.data.mobile
      },  
      success: function(res) {  
 
        console.log(res)
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200 && res.data.respCode === '0000') {  
            wx.navigateTo({
              url :"../report/report",
            })
          }else{
            wx.showToast({
              title: res.data.respMsg,
              icon: 'loading',
              duration: 2000
            })
          }
      },  
      fail: function(err) {  
          // 请求失败时执行的回调函数  
          console.error('请求发生错误：', err);  
          wx.showToast({
            title: '网络异常',
            icon: 'error',
            duration: 2000
          })
      }  
    }); 
  },
  onVideo(){
    wx.showToast({
      title: '该功能暂未开放，敬请期待',
      icon: 'info',
      duration: 2000
    })
  },
  onShareAppMessage:function(){
    console.log('321')
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
},

onShareTimeline:function(){
  return {
  title:'香薷中医体检',
  // imageUrl:'./share.png',
  imageUrl: 'https://www.xiangruzy.cn/wechat/image/wechat-forward.jpg', // 背景图片URL
  path: '/pages/index/index?id=' +this.data.mobile,
  
  }
},
onShareAppMessage: function () {  
  return {  
    title: '香薷中医体检',  
    imageUrl: 'https://www.xiangruzy.cn/wechat/image/wechat-forward.jpg', // 背景图片URL
    path: '/pages/index/index?id=' +this.data.mobile
  }  
 
},

  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */

})