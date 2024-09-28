import Toast from '@vant/weapp/toast/toast';

const app = getApp<IAppOption>()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    codeText:'获取验证码',
    counting:false,
    username:'',
    password:'',
    isLogin:false,
  },
  loginXiangru(){
    var that = this;//把this对象复制到临时变量that
    wx.request({   
      url: 'https://www.xiangruzy.cn/user/login', // 替换为你的接口地址  
      // url: 'https://localhost/user/login', // 替换为你的接口地址  
     method: 'POST', // 或者 'POST'  
     // 如果是POST请求，可以通过 data 字段发送数据  
     data: this.data,  
     header: {  
         'content-type': 'application/json;charset=UTF-8' // 默认值  
     },  
     success: function(res) {  
       console.log(res)
         // 请求成功时执行的回调函数  
         if (res.statusCode === 200 && res.data != null) {
           if(res.data.respCode == "0000"){
            const cookie = res.data.respData;
            console.log(cookie);
            if(cookie.includes('JSESSIONID')){
              const timeStamp = Date.now() + 10 * 1000;
              wx.setStorageSync('cookie', JSON.stringify({ cookie, timeStamp }));
            }
            that.setData({
               isLogin :true
            })
           
            app.globalData.isLogin = true
            app.globalData.mobile = that.data.username
   
            wx.redirectTo({
              url:"./index",
            })
           }else{
            wx.showToast({
              title: res.data.respMsg,
              icon: 'error',
              duration: 2000
            })
           }
         } else {  
         // 处理请求失败的情况  
         console.error('请求失败：', res.statusCode);  
         }  
     },  
     fail: function(err) {  
         // 请求失败时执行的回调函数  
         console.error('请求发生错误：', err);  
     }  
     }); 

      
  },
  saveSuccess(){
    
  },
  // 登陆注册监听
  click(e){
    let index = e.currentTarget.dataset.code;
    this.setData({
      current:index
    })
  },
  //获取验证码 
  getCode(){
        console.log(this.data)
        if(this.data.reusername === ''){
          wx.showToast({
              title: '手机号必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
        var that = this;
        if (!that.data.counting) {
    
          wx.request({   
            url: 'https://www.xiangruzy.cn/wechat/send-message-code', // 替换为你的接口地址  
          //  url: 'https://localhost/wechat/send-message-code', // 替换为你的接口地址  
          method: 'GET', // 或者 'POST'  
          // 如果是POST请求，可以通过 data 字段发送数据  
          data:{
            mobile:that.data.reusername
          },  
          success: function(res) {  
             // 请求成功时执行的回调函数  
             if (res.statusCode === 200 && res.data != null && res.data.respCode == "0000") {
                wx.showToast({
                  title: '验证码已发送',
                })
                //开始倒计时60秒
                that.countDown(that, 60);
             } else {  
               wx.showToast({
                 title: res.data.respMsg,
                 icon: 'error',
                 duration: 2000
               })
             }  
          },  
          fail: function(err) {  
              // 请求失败时执行的回调函数  
              console.error('请求发生错误：', err);  
              wx.showToast({
                 title: '网络异常',
                 icon: 'error',
                 duration: 2000
               })
          }  
          }); 
       
        } 
      },
  //倒计时60秒
  countDown(that,count){
    if (count == 0) {
      that.setData({
        codeText: '获取验证码',
        counting:false
      })
      return;
    }
    that.setData({
      counting:true,
      codeText: count + '秒后重新获取',
    })
    setTimeout(function(){
      count--;
      that.countDown(that, count);
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

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
  onShareAppMessage() {

  }
})
