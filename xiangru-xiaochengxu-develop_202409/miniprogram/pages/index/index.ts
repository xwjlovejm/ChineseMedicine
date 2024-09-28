import Toast from '@vant/weapp/toast/toast';

const app = getApp<IAppOption>()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:"1",
    codeText:'获取验证码',
    counting:false,
    username:'',
    id:'',
    password:'',
    reusername:'',
    resmscode:'',
    repassword:'',
    repasswordR:'',
    arr:[
      'https://www.xiangruzy.cn/wechat/image/banner1.jpg',
      'https://www.xiangruzy.cn/wechat/image/banner2.jpg',
      'https://www.xiangruzy.cn/wechat/image/banner3.jpg',
    ],
  },
  forgetregister(){
    var that = this;
    wx.request({   
      url: 'https://www.xiangruzy.cn/wechat/check-register', // 替换为你的接口地址  
     method: 'GET', // 或者 'POST'  
     // 如果是POST请求，可以通过 data 字段发送数据  
     data:{
       mobile:this.data.username
     },  
     success: function(res) {  
       console.log(res)
  
         // 请求成功时执行的回调函数  
         if (res.statusCode === 200 && res.data.respCode === '0000') {
       wx.showToast({
         title: '账号未注册',
         icon: 'loading',
         duration: 1000
       })
          that.setData({
                current:"0"
              })
         }else if(res.statusCode === 200 && res.data.respCode === '1000'){
        that.setData({
              current:"2"
            });
          
        if (!that.data.counting) {
    
          wx.request({   
            url: 'https://www.xiangruzy.cn/wechat/send-message-code', // 替换为你的接口地址  
          //  url: 'https://localhost/wechat/send-message-code', // 替换为你的接口地址  
          method: 'GET', // 或者 'POST'  
          // 如果是POST请求，可以通过 data 字段发送数据  
          data:{
            mobile:that.data.username
          },  
          success: function(res) {  
      console.log(res)
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
         }else{
     wx.showToast({
       title: '填写正确号码',
       icon: 'error',
       duration: 1000
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
    console.log(this.data.current)
  },
  loginXiangru(){
    console.log(this.data)
    console.log(this.data.current)
    console.log(this.data.current === "0")
    // 注册
    if(this.data.current === "0"){
      console.log(this.data)
      if(this.data.reusername === ''){
        wx.showToast({
            title: '手机号必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.resmscode === ''){
        wx.showToast({
            title: '验证码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repassword === ''){
        wx.showToast({
            title: '密码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repasswordR === ''){
        wx.showToast({
            title: '确认密码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repasswordR !== this.data.repassword){
        wx.showToast({
            title: '密码不一致',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      var that = this;//把this对象复制到临时变量that
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/register', // 替换为你的接口地址  
        // url: 'https://localhost/wechat/register', // 替换为你的接口地址  
       method: 'POST', // 或者 'POST'  
       // 如果是POST请求，可以通过 data 字段发送数据  
       data: {
        mobile:this.data.reusername,
        smsCode:this.data.resmscode,
        password:this.data.repassword,
        shareMobile:this.data.id,
        passwordR:this.data.repasswordR
       },
       header: {  
           'content-type': 'application/json;charset=UTF-8' // 默认值  
       },  
       success: function(res) {  
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200 && res.data != null && res.data.respCode == "0000") {
            app.globalData.mobile = that.data.username
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 1000,
              success:function(){
                setTimeout(function () { 
                  wx.redirectTo({ 
                    url:"../index/index",
                   }) 
               }, 1000) 
              }
            })
          } else {  
            wx.showToast({
              title: res.data.respMsg,
              icon: 'error',
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
      // 登录
    }else if(this.data.current === "1"){
      if(this.data.username === ''){
          wx.showToast({
              title: '手机号必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
        if(this.data.password === ''){
          wx.showToast({
              title: '密码必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
      var that = this;//把this对象复制到临时变量that
      wx.request({   
         url: 'https://www.xiangruzy.cn/wechat/login', // 替换为你的接口地址  
       // url: 'https://localhost/wechat/login', // 替换为你的接口地址  
       method: 'POST', // 或者 'POST'  
       // 如果是POST请求，可以通过 data 字段发送数据  
       data: {
        mobile:this.data.username,
        password:this.data.password
       },
       header: {  
           'content-type': 'application/json;charset=UTF-8' // 默认值  
       },  
       success: function(res) {  
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200 && res.data != null && res.data.respCode == "0000") {
            app.globalData.mobile = that.data.username
            app.globalData.roleCode = res.data.respData.roleCode
           console.log(res)
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1000,
              success:function(){
                setTimeout(function () { 
                  wx.redirectTo({ 
                      url: '../home/home'
                   }) 
               }, 1000) 
              }
            })
          } else {  
            wx.showToast({
              title: res.data.respMsg,
              icon: 'error',
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
    }else   if(this.data.current === "2"){
      //修改密码
      console.log(this.data)
    
      if(this.data.resmscode === ''){
        wx.showToast({
            title: '验证码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repassword === ''){
        wx.showToast({
            title: '密码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repasswordR === ''){
        wx.showToast({
            title: '确认密码必填',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      if(this.data.repasswordR !== this.data.repassword){
        wx.showToast({
            title: '密码不一致',
            icon: 'error',
            duration: 1000
          })
          return;
      }
      var that = this;//把this对象复制到临时变量that
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/reset-password', // 替换为你的接口地址  
 
       method: 'POST', // 或者 'POST'  
       // 如果是POST请求，可以通过 data 字段发送数据  
       data: {
        mobile:this.data.username,
        smsCode:this.data.resmscode,
        newPassword:this.data.repassword,
        newPasswordR:this.data.repasswordR
       },
       header: {  
           'content-type': 'application/json;charset=UTF-8' // 默认值  
       },  
       success: function(res) {  
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200 && res.data != null && res.data.respCode == "0000") {
            app.globalData.mobile = that.data.username
            
            
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              duration: 1000,
              success:function(){
                setTimeout(function () { 
                  wx.redirectTo({ 
                    url:"../index/index",
                   }) 
               }, 1000) 
              }
            })
          } else {  
            wx.showToast({
              title: res.data.respMsg,
              icon: 'error',
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
      
   
  }
    
  },
 
    //用户点击右上角分享给好友，要现在分享到好友这个设置menu的两个参数，才可以实现分享到朋友圈
    
 


  saveSuccess(){
    
  },
  // 登陆注册监听
  click(e){
    let index = e.currentTarget.dataset.code;
    console.log(index)
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
      console.log(res)
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
    if (count == 0 ) {
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
    var id=options.id;
    console.log(id)
    this.setData({
      id:options.id
    })
    console.log(this.data.id)
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
  onShareAppMessage:function(){
    return {};
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
