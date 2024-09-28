// pages/report/report.ts

const app = getApp<IAppOption>()

Component({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    index:0,
    current:2,
    oneHiddenFlag:false,
    twoHiddenFlag:true,
    threeHiddenFlag:true,
    fourHiddenFlag:true,
    fiveHiddenFlag:true,
    sixHiddenFlag:true,
    sevenHiddenFlag:true,
    shows:false,
    showss:true,
    shownum:0,
    lists: [  
    ], 
    list: [  
      {label: '选项1'},  
      {label: '选项2'},  
      {label: '选项3'},  
    ], 
    listb: [    
    ], 
    listc: [  
      
    ], 
    listd: [  
      
    ], 
    liste: [  
       
    ],  
    submitQuestion:[],
    score:0,
    scoreColor:"255,0,0",
    tzzd:'',
    fbqx:'',
    numa:0,
    numb:0,
    numc:0,
    numd:0,
    nume:0,
    xy:0,
    jbzd:'',
    ysjy:'',
    jkla:0,
    jklb:0,
    jklc:0,
    jkld:0,
    jkle:0,
    jklalist:[],
    jklblist:[],
    jklclist:[],
    jkldlist:[],
    jklelist:[],
    xinColor:"46,51,102",
    ganColor:"46,51,102",
    shenColor:"46,51,102",
    feiColor:"46,51,102",
    piColor:"46,51,102",
    weiColor:"46,51,102",
    danColor:"46,51,102",
    changColor:"46,51,102",
  },
  methods: {
    onLoad() {
      console.log(app.globalData.mobile)
      
      this.setData({
        mobile:app.globalData.mobile
      })
      var that = this;//把this对象复制到临时变量that
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
              const query = wx.createSelectorQuery()
     query.select('.reportyu').boundingClientRect((rect) => {
      console.log(rect.width) // 元素的宽度
      console.log(rect.height) // 元素的高度
  })      
  query.exec()
              console.log(res.data.respData.tzzd.length)
              that.setData({
                score:res.data.respData.score,
                scoreColor:res.data.respData.scoreColor,
                lists:res.data.respData.submits,
                submitQuestion:res.data.respData.submitQuestion,
                jkpg:res.data.respData.jkpg,
                tzzd:res.data.respData.tzzd,
                fbqx:res.data.respData.fbqx,
                ysjy:res.data.respData.ysjy,
                jbzd:res.data.respData.jbzd,
                xinColor:res.data.respData.xinColor,
                ganColor:res.data.respData.ganColor,
                shenColor:res.data.respData.shenColor,
                feiColor:res.data.respData.feiColor,
                piColor:res.data.respData.piColor,
                weiColor:res.data.respData.weiColor,
                danColor:res.data.respData.danColor,
                changColor:res.data.respData.changColor,
              })
              let zfb=that.data.tzzd.replace(/\s+/g, '');

let zfc=that.data.fbqx.replace(/\s+/g, '');
let zfd=that.data.jbzd.replace(/\s+/g, '');
let zfe=that.data.ysjy.replace(/\s+/g, '');
              let result = [];
              let resultlistb = [];
              let resultlistc = [];
              let resultlistd = [];
              let resultliste = [];

		  for (let i = 0; i < that.data.lists.length; i += 12) {
		    result.push(that.data.lists.slice(i, i + 12));
      };
      
      let resultb = [];
		  for (let i = 0; i < zfb.length; i += 140) {
let ty=zfb.slice(i, i + 140);

		    resultb.push(ty.split("&"));
		  };
	
		  let resultc = [];
		  		  for (let i = 0; i < zfc.length; i += 140) {
		  		   let ty=zfc.slice(i, i + 140);

		    resultc.push(ty.split("&"));
		  		  };
				  let resultd = [];
				  		  for (let i = 0; i < zfd.length; i += 140) {
                  let ty=zfd.slice(i, i + 140);

                  resultd.push(ty.split("&"));
				  		  };
						  let resulte = [];
						  		  for (let i = 0; i < zfe.length; i += 140) {
						  		    let ty=zfe.slice(i, i + 140);

		    resulte.push(ty.split("&"));
                    };
              

                    console.log(that.data.submitQuestion.w1value)
                    console.log(that.data.submitQuestion.p31value)
                    console.log(that.data.submitQuestion.v1value)
                    console.log(that.data.submitQuestion.z1value)
                    console.log(that.data.submitQuestion.z2value)
                    let jkl=0;
					if(that.data.submitQuestion.w1value!==null&&that.data.submitQuestion.w1value!==''&&that.data.submitQuestion.w1value !== undefined){
            jkl=jkl+1
            that.setData({
              jkla:that.data.jkla+1
            })
					}
						
					 if(that.data.submitQuestion.p31value!==null&&that.data.submitQuestion.p31value!==''&&that.data.submitQuestion.p31value !== undefined){
            jkl=jkl+1
            that.setData({
              jklb:that.data.jklb+1
            })
					}
			
					 if(that.data.submitQuestion.v1value!==null&&that.data.submitQuestion.v1value!==''&&that.data.submitQuestion.v1value !== undefined){
            jkl=jkl+1
            that.setData({
              jklc:that.data.jklc+1
            })
					}
					
					 if(that.data.submitQuestion.z1value!==null&&that.data.submitQuestion.z1value!==''&&that.data.submitQuestion.z1value !== undefined){
            jkl=jkl+1
            that.setData({
              jkld:that.data.jkld+1
            })
					}
					
					 if(that.data.submitQuestion.z2value!==null&&that.data.submitQuestion.z2value!==''&&that.data.submitQuestion.z2value !== undefined){
            jkl=jkl+1
            that.setData({
              jkle:that.data.jkle+1
            })
					}
          let resultnum = 3+jkl+result.length+resultb.length+resultc.length+resultd.length+resulte.length;
              that.setData({
                list:result,
                numa:result.length,
                listb:resultb,
                numb:resultb.length,
                listc:resultc,
                numc:resultc.length,
                listd:resultd,
                numd:resultd.length,
                liste:resulte,
                nume:resulte.length,
                shownum:resultnum,
                xy:jkl,
              })
            } 
        },  
        fail: function(err) {  
            // 请求失败时执行的回调函数  
            console.error('请求发生错误：', err);  
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
      if(this.data.index === this.data.shownum){
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