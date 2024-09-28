// pages/report/report.ts

const app = getApp<IAppOption>()

Component({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    index:0,
    username:'',
    list: [  
    ],  
    datePartner:'0',
    jieZhiRi:'0',
    partnerType:"0",
    performance:'0',
    performanceAch:'0',
    performanceAchZf:'0',
    performanceAchYb:'0',
    performanceAchUn:'0',
    csumDirPerson:"0",
    csumDirAmo:"0",
    csumIndirPerson:"0",
    csumIndirAmo:"0",
    directCostPerson:'0',
    directCostAmount:'0',
    actualCustomRegisterCount:'0',
    detailVos:[
  
    ],
    indirectCostPerson:'0',
    indirectCostAmount:'0',
    jjdetailVos:[

    ],
    yydetailVos:[

    ],
    translateX: 0, // 位移x坐标 单位px
    translateY: 0, // 位移y坐标 单位px
    distance: 0, // 双指接触点距离
    scale: 1, // 缩放倍数
    rotate: 0, // 旋转角度
    oldRotate: 0, // 上一次旋转停止后的角度
    startMove: { // 起始位移距离
      x: 0,
      y: 0,
    },
    time:0,
    startTouches: []

  },
  methods: {
    onLoad() {
      console.log(app.globalData.mobile)
      this.setData({
        mobile:app.globalData.mobile
      })
    },
    touchStart(e) {
      console.log('1')
      const touches = e.touches
      const { translateX, translateY } = this.data
      const { pageX, pageY } = touches[0]
      this.data.startMove = {
        x: pageX - translateX,
        y: pageY - translateY
      }
      this.data.startTouches = touches
    },
    touchMove(e) {
      console.log('2')
      const touches = e.touches
      const { pageX: onePageX, pageY: onePageY } = touches[0]
      const { startMove, scale, distance: oldDistance, startTouches } = this.data
      if (touches.length === 2 && startTouches.length === 2) {
        console.log('双指')
        // 双指缩放
        const { pageX: twoPageX, pageY: twoPageY } = touches[1]
        // 求出当前双指距离
        const distance = Math.sqrt((twoPageX - onePageX) ** 2 + (twoPageY - onePageY) ** 2)
        this.data.distance = distance
        this.setData({
          scale: scale * (distance / (oldDistance || distance))
        })
      } else if (startTouches.length !== 2&&this.data.scale!==1) {
        console.log('拖拽')
        // 单指拖拽
        this.setData({
          translateX: onePageX - startMove.x,
          translateY: onePageY - startMove.y
        })
      }
    },
    sjbd(e){
      console.log(e)
      let times=e.timeStamp-this.data.time;
      this.setData({
        time:e.timeStamp
      })
      console.log(times)
      if(times<=500){
        let scalegb;
        if(this.data.scale==1){
          scalegb=2
        }else{
          scalegb=1
        }
        this.setData({
          translateX: 0, // 位移x坐标 单位px
        translateY: 0, // 位移y坐标 单位px
        distance: 0, // 双指接触点距离
        scale: scalegb, // 缩放倍数
        rotate: 0, // 旋转角度
        oldRotate: 0, // 上一次旋转停止后的角度
        startMove: { // 起始位移距离
          x: 0,
          y: 0,
        }
        })
      }
     
    },
  
    hsheader(){
      this.setData({
        index:0
      })
    },
    hhrsy(){
      this.setData({
        index:1
      })
      let that = this;
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/partner-performance-count', // 替换为你的接口地址  
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
              that.setData({
          datePartner:res.data.respData.datePartner,
              jieZhiRi:res.data.respData.jieZhiRi,
              partnerType:res.data.respData.partnerType,
              performance:res.data.respData.performance,
              performanceAch:res.data.respData.performanceAch,
              performanceAchZf:res.data.respData.performanceAchZf,
              performanceAchYb:res.data.respData.performanceAchYb,
              performanceAchUn:res.data.respData.performanceAchUn,
              csumDirPerson:res.data.respData.csumDirPerson,
              csumDirAmo:res.data.respData.csumDirAmo,
              csumIndirPerson:res.data.respData.csumIndirPerson,
              csumIndirAmo:res.data.respData.csumIndirAmo,
                           })
           }else{
             wx.showToast({
               title: res.data.respMsg,
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
    },
    hhrsyzt(){
      this.setData({
        index:2
      })
      let that = this;
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/direct-custom-cost', // 替换为你的接口地址  
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
              that.setData({
          directCostPerson:res.data.respData.directCostPerson,
              directCostAmount:res.data.respData.directCostAmount,
              detailVos:res.data.respData.detailVos,
             
           
                           })
                           console.log(that.data.detailVos)
           }else{
             wx.showToast({
               title: res.data.respMsg,
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
    },
    hhrsyjt(){
      this.setData({
        index:3
      })
      let that = this;
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/indirect-custom-cost', // 替换为你的接口地址  
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
              that.setData({
                indirectCostPerson:res.data.respData.indirectCostPerson,
                indirectCostAmount:res.data.respData.indirectCostAmount,
              jjdetailVos:res.data.respData.detailVos,
             
           
                           })
           }else{
             wx.showToast({
               title: res.data.respMsg,
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
    },
    hhrsyyy(){
      this.setData({
        index:4
      })
      let that = this;
      wx.request({   
        url: 'https://www.xiangruzy.cn/wechat/actual-custom-register', // 替换为你的接口地址  
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
              that.setData({
                actualCustomRegisterCount:res.data.respData.actualCustomRegisterCount,
              yydetailVos:res.data.respData.detailVos
             
           
                           })
           }else{
             wx.showToast({
               title: res.data.respMsg,
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
    },
    toPrePage(){
      if(this.data.index === 1){
        this.setData({
        
          shows:false,
        })
      }
      if(this.data.index === 0) return;

      console.log(this.data.index)
      this.setData({
        index: this.data.index - 1,
        showss:true,
        current:1
      })
      console.log(this.data.index)
      if(this.data.index === 0){
        this.setData({
          oneHiddenFlag:false,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
        return;
      }
      if(this.data.index === 1) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:false,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 2) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:false,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 3) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:false,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 4) {
        
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:false,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }if(this.data.index === 5) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:false,
          sevenHiddenFlag:true
        })
      }if(this.data.index === 6) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:false
        })
        return;
      }
    
    },

    toNextPage() {
     
      console.log(this.data.index)
      this.setData({
        index: this.data.index + 1,
     shows:true,
     current:0
      })
      console.log(this.data.index)
      if(this.data.index === 7){
        this.setData({
        
          showss:false,
        })
      }
      if(this.data.index === 0){
        this.setData({
          oneHiddenFlag:false,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 1) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:false,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 2) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:false,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 3) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:false,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 4) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:false,
          sixHiddenFlag:true,
          sevenHiddenFlag:true
        })
      }
     
      if(this.data.index === 5) {
        
      
       
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:false,
          sevenHiddenFlag:true
        })
      }
      if(this.data.index === 6) {
        this.setData({
          oneHiddenFlag:true,
          twoHiddenFlag:true,
          threeHiddenFlag:true,
          fourHiddenFlag:true,
          fiveHiddenFlag:true,
          sixHiddenFlag:true,
          sevenHiddenFlag:false
        })
        
      }
    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var that = this;//把this对象复制到临时变量that
    console.log("界面初始")
    wx.request({   
       url: 'https://www.xiangruzy.cn/wechat/report-health', // 替换为你的接口地址  
      // url: 'https://localhost/wechat/report-health', // 替换为你的接口地址  
      method: 'GET', // 或者 'POST'  
      // 如果是POST请求，可以通过 data 字段发送数据  
      data:{
        mobile:that.data.mobile
      },  
      success: function(res) {  
        console.log(res)
          // 请求成功时执行的回调函数  
          if (res.statusCode === 200) {  
            that.setData({
              jkpg:res.data.jkpg,
              tzzd:res.data.tzzd,
              fbqx:res.data.fbqx,
              ysjy:res.data.ysjy,
              jbzd:res.data.jbzd,
            })
          } 
      },  
      fail: function(err) {  
          // 请求失败时执行的回调函数  
          console.error('请求发生错误：', err);  
      }  
    }); 
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