import { getAllRect } from "../../miniprogram_npm/@vant/weapp/common/utils";
import { imageProps } from "../../miniprogram_npm/@vant/weapp/uploader/shared";

const app = getApp<IAppOption>()

// pages/info/info.ts
Component({
  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    userName:"",
    gender:"",
    age:"",
    arrs:false,
    arrstt:false,
    arrsdh:false,
    // company:"",
    inviteCode:"",
    
    showPrivacyPopup: false, // 隐私弹窗显示标识
    privacyContent: '', // 后台配置的隐私手册名称

    basicHiddenFlag:false,
    aHiddenFlag:true,
    a3HiddenFlag:true,
    bHiddenFlag:true,
    cHiddenFlag:true,
    c2HiddenFlag:true,
    dHiddenFlag:true,
    eHiddenFlag:true,
    fHiddenFlag:true,
    gHiddenFlag:true,
    hHiddenFlag:true,
    iHiddenFlag:true,
    jHiddenFlag:true,
    kHiddenFlag:true,
    lHiddenFlag:true,
    mHiddenFlag:true,
    nHiddenFlag:true,
    oHiddenFlag:true,
    pHiddenFlag:true,
    p31HiddenFlag:true,
    qHiddenFlag:true,
    rHiddenFlag:true,
    sHiddenFlag:true,
    tHiddenFlag:true,
    uHiddenFlag:true,
    vHiddenFlag:true,
    wHiddenFlag:true,
    xHiddenFlag:true,
    yHiddenFlag:true,
    z1HiddenFlag:true,
    z2HiddenFlag:true,

    Avalue:[], // A1	头晕  A2	头沉 A3	头痛
    A3childvalue:[],  // A31	前额 A32	两侧 A33	头顶 A34	后脑
    Bvalue:[],  // B1	容易感冒 B2	容易低烧
    Cvalue:'',  // C1	无汗 C2	多汗
    C2childvalue:[], // C21	头部  C22	手脚心 C23	其他部位
    Dvalue:[], // D1	明显怕风吹 D2	经常肢体麻木 D3	四肢疼痛 D4	四肢沉重
    Evalue:[],// E1	感到明显怕冷 E2	感到明显怕热 E3	手脚冰凉 E4	手脚心热
    Fvalue:[], // F1	烦躁 F2	不顺心 F3	压抑 F4	焦虑 F5	心慌 F6	胸闷
    Gvalue:[],// G1	梦多  G2	易醒 G3	入睡难
    Hvalue:[],  // H1	口渴 H2	喝水解渴 H3	喝水不解渴  H4	口苦 H5	唇干 H6	眼睛干涩 H7	视物模糊
    Ivalue:[],  // I1	口腔溃疡 I2	面部长痘 I3	皮肤油 I4	面部暗黄
    Jvalue:[], // J1	食欲下降 J2	经常恶心 J3	经常打嗝 J4	烧心反酸 J5	胃胀（肚脐上） J6	腹胀（肚脐下）
    Kvalue:[],  // K1	午饭后明显犯困  K2	平时乏力没精神 K3	气短、叹气
    Lvalue:[], // L1	吃凉腹泻 L2	吃凉腹痛 L3	吃凉食没事
    Mvalue:[],  // M1	肠鸣（咕咕叫） M2	排气（放屁）
    Nvalue:[],  // N1	便干 N2	便稀 N3	先干后稀 N4	数日解1次
    Ovalue:[],  // O1	尿频  O2	尿急  O3	尿不尽 O4	泡沫尿
    Pvalue:[],  // P1	腰酸 P2	腰痛 P3	水肿（明显浮肿或按压有坑）
    P31value:'',  // P31	水肿部位
    Qvalue:[], // Q1	提前（7天以上）  Q2	错后（7天以上） Q3	忽前忽后（7天以上） Q4	经期时长超过7天以上
    Rvalue:[],  // R1	量多 R2	量少  R3	颜色暗  R4	颜色淡 R5	明显血块 R6	痛经  R7	 乳房胀痛 R8	小腹坠胀感 R9	小腹摸到包块 R10	阴道瘙痒
    Svalue:[],  // S1	白色 S2	黄色 S3	粘稠 S4	稀薄 S5	偏多 S6	偏少
    Tvalue:[], // T1	阴囊潮湿 T2	勃起无力 T3	时间短
    Uvalue:[], // U1	烟酒嗜好 U2	熬夜习惯 U3	容易过敏
    V1value:'',  // V1	既往病史（含检查指标、现服用药物）
    W1value:'',  // W1	心率
    Xvalue:'', // X1	迫切需要治疗 X2	不严重 X3	先检查了解一下
    Yvalue:'',  //  Y1	很认可 Y2	一般 Y3	不认可
    Z1Value:'', // 简要描述您最想解决的疾病问题
    Z2value:'', // X1	舌苔
    fileList:[], // X1	舌苔
    index: -1,
  },
  methods: {
    onLoad: function (options) {
      console.log(app.globalData.mobile)
      this.setData({
        mobile:app.globalData.mobile
      })
     
    },

    toPrePage() {
     
      if(this.data.index === -1)return;
       

      // if(this.data.index === 2){
      //   // if(this.data.Avalue.includes("A3")){
      //   //   console.log("选中A3")
      //   //   this.setData({
      //   //     index:2,
      //   //   })
      //   // }else{
      //   //   console.log("未选中A3")
      //   //   this.setData({
      //   //     index:1,
      //   //   })
      //   // }
      // }

      if(this.data.index === 5){
        if(this.data.Cvalue.includes("C2")){
          console.log("选中C2")
          this.setData({
            index:5,
          })
        }else{
          console.log("未选中C3")
          this.setData({
            index:4,
          })
        }
      }

      this.setData({
        index: this.data.index - 1,
        current:1
      })
     

      if(this.data.gender === 'male'){
        if(this.data.index === -1){
          this.noshow();
          this.setData({
            basicHiddenFlag:false,
          })
        }else if(this.data.index === 0){
          this.noshow();
          this.setData({
            aHiddenFlag:false,
          })
        }else if(this.data.index === 1){
          this.noshow();
          this.setData({
            bHiddenFlag:false,
          })
        }else if(this.data.index === 2){
          this.noshow();
          this.setData({
            cHiddenFlag:false,
          })
        }else if(this.data.index === 3){
          this.noshow();
          this.setData({
            dHiddenFlag:false,
          })
        }else if(this.data.index === 4){
          this.noshow();
          this.setData({
            eHiddenFlag:false,
          })
        }else if(this.data.index === 5){
          this.noshow();
          this.setData({
            fHiddenFlag:false,
          })
        }else if(this.data.index === 6){
          this.noshow();
          this.setData({
            gHiddenFlag:false,
          })
        }else if(this.data.index === 7){
          this.noshow();
          this.setData({
            hHiddenFlag:false,
          })
        }else if(this.data.index === 8){
          this.noshow();
          this.setData({
            iHiddenFlag:false,
          })
        }else if(this.data.index === 9){
          this.noshow();
          this.setData({
            jHiddenFlag:false,
          })
        }else if(this.data.index === 10){
          this.noshow();
          this.setData({
            kHiddenFlag:false,
          })
        }else if(this.data.index === 11){
          this.noshow();
          this.setData({
            lHiddenFlag:false,
          })
        }else if(this.data.index === 12){
          this.noshow();
          this.setData({
            mHiddenFlag:false,
          })
        }else if(this.data.index === 13){
          this.noshow();
          this.setData({
            nHiddenFlag:false,
          })
        }else if(this.data.index === 14){
          this.noshow();
          this.setData({
            oHiddenFlag:false,
          })
        }else if(this.data.index === 15){
          this.noshow();
          this.setData({
            pHiddenFlag:false,
          })
        }else if(this.data.index === 16){
          this.noshow();
          this.setData({
            tHiddenFlag:false,
          })
        }else if(this.data.index === 17){
          this.noshow();
          this.setData({
            uHiddenFlag:false,
          })
        }else if(this.data.index === 18){
          this.noshow();
          this.setData({
            vHiddenFlag:false,
          })
        }else if(this.data.index === 19){
          this.noshow();
          this.setData({
            z1HiddenFlag:false,
          })
        }else if(this.data.index === 20){
          this.noshow();
          this.setData({
            wHiddenFlag:false,
          })
        }else if(this.data.index === 21){
          this.noshow();
          this.setData({
            xHiddenFlag:false,
          })
        }else if(this.data.index === 22){
          this.noshow();
          this.setData({
            yHiddenFlag:false,
          })
        }else if(this.data.index === 23){
          this.noshow();
          this.setData({
            z2HiddenFlag:false,
          })
        }
      }else  if(this.data.gender === 'female'){
        if(this.data.index === -1){
          this.noshow();
          this.setData({
            basicHiddenFlag:false,
          })
        }else if(this.data.index === 0){
          this.noshow();
          this.setData({
            aHiddenFlag:false,
          })
        }else if(this.data.index === 1){
          this.noshow();
          this.setData({
            bHiddenFlag:false,
          })
        }else if(this.data.index === 2){
          this.noshow();
          this.setData({
            cHiddenFlag:false,
          })
        }else if(this.data.index === 3){
          this.noshow();
          this.setData({
            dHiddenFlag:false,
          })
        }else if(this.data.index === 4){
          this.noshow();
          this.setData({
            eHiddenFlag:false,
          })
        }else if(this.data.index === 5){
          this.noshow();
          this.setData({
            fHiddenFlag:false,
          })
        }else if(this.data.index === 6){
          this.noshow();
          this.setData({
            gHiddenFlag:false,
          })
        }else if(this.data.index === 7){
          this.noshow();
          this.setData({
            hHiddenFlag:false,
          })
        }else if(this.data.index === 8){
          this.noshow();
          this.setData({
            iHiddenFlag:false,
          })
        }else if(this.data.index === 9){
          this.noshow();
          this.setData({
            jHiddenFlag:false,
          })
        }else if(this.data.index === 10){
          this.noshow();
          this.setData({
            kHiddenFlag:false,
          })
        }else if(this.data.index === 11){
          this.noshow();
          this.setData({
            lHiddenFlag:false,
          })
        }else if(this.data.index === 12){
          this.noshow();
          this.setData({
            mHiddenFlag:false,
          })
        }else if(this.data.index === 13){
          this.noshow();
          this.setData({
            nHiddenFlag:false,
          })
        }else if(this.data.index === 14){
          this.noshow();
          this.setData({
            oHiddenFlag:false,
          })
        }else if(this.data.index === 15){
          this.noshow();
          this.setData({
            pHiddenFlag:false,
          })
        }else if(this.data.index === 16){
          this.noshow();
          this.setData({
            qHiddenFlag:false,
          })
        }else if(this.data.index === 17){
          this.noshow();
          this.setData({
            rHiddenFlag:false,
          })
        }else if(this.data.index === 18){
          this.noshow();
          this.setData({
            sHiddenFlag:false,
          })
        }else if(this.data.index === 19){
          this.noshow();
          this.setData({
            uHiddenFlag:false,
          })
        }else if(this.data.index === 20){
          this.noshow();
          this.setData({
            vHiddenFlag:false,
          })
        }else if(this.data.index === 21){
          this.noshow();
          this.setData({
            z1HiddenFlag:false,
          })
        }else if(this.data.index === 22){
          this.noshow();
          this.setData({
            wHiddenFlag:false,
          })
        }else if(this.data.index === 23){
          this.noshow();
          this.setData({
            xHiddenFlag:false,
          })
        }else if(this.data.index === 24){
          this.noshow();
          this.setData({
            yHiddenFlag:false,
          })
        }else if(this.data.index === 25){
          this.noshow();
          this.setData({
            z2HiddenFlag:false,
          })
        }
      }
    },

     // 点击按钮请求数据  
     fetchData: function() {  
      var that = this;//把this对象复制到临时变量that
        wx.request({   
         url: 'https://www.xiangruzy.cn/wechat/submit-health', // 替换为你的接口地址  
        //url: 'https://localhost/wechat/submit-health',
        method: 'POST', // 或者 'POST'  
        // 如果是POST请求，可以通过 data 字段发送数据  
        data: {
          userName:that.data.userName,
          gender:that.data.gender,
          age:that.data.age,
          mobile:that.data.mobile,
          // company:that.data.company,
          inviteCode:that.data.inviteCode,
          avalue:that.data.Avalue,
          a3childvalue:that.data.A3childvalue,
          bvalue:that.data.Bvalue,
          cvalue:that.data.Cvalue,
          c2childvalue:that.data.C2childvalue,
          dvalue:that.data.Dvalue,
          evalue:that.data.Evalue,
          fvalue:that.data.Fvalue,
          gvalue:that.data.Gvalue,
          hvalue:that.data.Hvalue,
          ivalue:that.data.Ivalue,
          jvalue:that.data.Jvalue,
          kvalue:that.data.Kvalue,
          lvalue:that.data.Lvalue,
          mvalue:that.data.Mvalue,
          nvalue:that.data.Nvalue,
          ovalue:that.data.Ovalue,
          pvalue:that.data.Pvalue,
          p31value:that.data.P31value,
          qvalue:that.data.Qvalue,
          rvalue:that.data.Rvalue,
          svalue:that.data.Svalue,
          tvalue:that.data.Tvalue,
          uvalue:that.data.Uvalue,
          v1value:that.data.V1value,
          w1value:that.data.W1value,
          xvalue:that.data.Xvalue,
          yvalue:that.data.Yvalue,
          z1Value:that.data.Z1Value,
          z2value:that.data.Z2value,
          current:2,
        },  
        header: {  
            'content-type': 'application/json;charset=UTF-8' // 默认值  
            // 如果需要，可以在这里添加其他自定义的header  
        },  
        success: function(res) {  
            // 请求成功时执行的回调函数  
            console.log(res)
            if (res.statusCode === 200 && res.data.respCode === '0000') {  
              wx.showModal({
                title: '提示',
                  content: '提交成功，请24小时以后可查看报告',
              
              })
              
              setTimeout(function() {
                wx.navigateTo({
                
                  url :"../home/home",
                })
              }, 1000)
              
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
    openPrivacyContract(){
  
        wx.openPrivacyContract({
          success: res => {
            console.log('openPrivacyContract success')
          },
          fail: res => {
            console.error('openPrivacyContract fail', res)
          }
        })
      
    },
    toNextPage() {
      console.log(this.data.index)
     
      if(this.data.index === -1) {
        if(this.data.userName === ''){
          wx.showToast({
              title: '姓名必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
        if(this.data.gender === ''){
          wx.showToast({
              title: '性别必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
        if(this.data.age === ''){
          wx.showToast({
              title: '年龄必填',
              icon: 'error',
              duration: 1000
            })
            return;
        }
        wx.showModal({
          title: '提示',
            content: '首次中医体检免费，再次体检每次收费300元；当你成为会员后，每季度可免费体检一次。',
        
        })
        // wx.showToast({
        //   title: '首次中医体检免费，再次体检每次交费300元，成为会员后，每90天可免费体检一次。',
        //   icon: 'error',
        //   duration: 4000
        // })
      
       
        
      }
     
    if(this.data.gender === 'male'){
      if(this.data.index ===21) {
        if(this.data.Xvalue === ''){
          wx.showToast({
              title: '请选择健康看法',
              icon: 'error',
              duration: 1000
            })
            return;
        }
      }
      if(this.data.index ===22) {
        if(this.data.Yvalue === ''){
          wx.showToast({
              title: '请选择中药接受程度',
              icon: 'error',
              duration: 1000
            })
            return;
        }else if(this.data.Yvalue === 'Y3'){
			this.showPopup()
			           return;
		}
      }
    }
    if(this.data.gender === 'female'){
      if(this.data.index ===23) {
        if(this.data.Xvalue === ''){
          wx.showToast({
              title: '请选择健康看法',
              icon: 'error',
              duration: 1000
            })
            return;
        }
      }
      else if(this.data.index ===24) {
        if(this.data.Yvalue === ''){
          wx.showToast({
              title: '请选择中药接受程度',
              icon: 'error',
              duration: 1000
            })
            return;
        }else if(this.data.Yvalue === 'Y3'){
			this.showPopup()
			           return;
		}
      }
    }
      if(this.data.gender === 'male'){
        console.log(this.data.gender+this.data.Xvalue+this.data.Yvalue)
    if(this.data.index === 23) {
           this.showPopup()
           return;
         }
      
      }else if(this.data.gender === 'female'){
        if(this.data.index === 25) {
            this.showPopup()
            return;
          }
      
      }
     
      // if(this.data.index === 0){
      //   // if(this.data.Avalue.includes("A3")){
      //   //   console.log("选中A3")
      //   //   this.setData({
      //   //     index:0,
      //   //   })
      //   // }else{
      //   //   console.log("未选中A3")
      //   //   this.setData({
      //   //     index:1,
      //   //   })
      //   // }
      // }

      if(this.data.index === 3){
        if(this.data.Cvalue.includes("C2")){
          console.log("选中C2")
          this.setData({
            index:3,
          })
        }else{
          console.log("未选中C3")
          this.setData({
            index:4,
          })
        }
      }
      // if(this.data.gender === 'male'){
      //   if(this.data.index === 23){
      //     if(this.data.Xvalue == 'X1' && this.data.Yvalue == 'Y1'){
      //       console.log("选中X1、Y1")
      //       this.setData({
      //         index:23,
      //       })
      //     }else{
      //       console.log("未选中X1、Y1")
      //       return;
      //     }
      //   }
      // }else if(this.data.gender === 'female'){
      //   if(this.data.index === 25){
      //     if(this.data.Xvalue == 'X1' && this.data.Yvalue == 'Y1'){
      //       console.log("选中X1、Y1")
      //       this.setData({
      //         index:25,
      //       })
      //     }else{
      //       console.log("未选中X1、Y1")
      //       return;
      //     }
      //   }
      // }
    
      this.setData({
        index: this.data.index + 1,
        current:0,
        shows:true,
      })
     
      if(this.data.gender === 'male'){
        if(this.data.index === 0){
          this.noshow();
          this.setData({
            aHiddenFlag:false,
          })
        }else if(this.data.index === 1){
          this.noshow();
          this.setData({
            bHiddenFlag:false,
          })
        }else if(this.data.index === 2){
          this.noshow();
          this.setData({
            cHiddenFlag:false,
          })
        }else if(this.data.index ===3){
          this.noshow();
          this.setData({
            dHiddenFlag:false,
          })
        }else if(this.data.index === 4){
          this.noshow();
          this.setData({
            eHiddenFlag:false,
          })
        }else if(this.data.index === 5){
          this.noshow();
          this.setData({
            fHiddenFlag:false,
          })
        }else if(this.data.index === 6){
          this.noshow();
          this.setData({
            gHiddenFlag:false,
          })
        }else if(this.data.index === 7){
          this.noshow();
          this.setData({
            hHiddenFlag:false,
          })
        }else if(this.data.index === 8){
          this.noshow();
          this.setData({
            iHiddenFlag:false,
          })
        }else if(this.data.index === 9){
          this.noshow();
          this.setData({
            jHiddenFlag:false,
          })
        }else if(this.data.index === 10){
          this.noshow();
          this.setData({
            kHiddenFlag:false,
          })
        }else if(this.data.index === 11){
          this.noshow();
          this.setData({
            lHiddenFlag:false,
          })
        }else if(this.data.index === 12){
          this.noshow();
          this.setData({
            mHiddenFlag:false,
          })
        }else if(this.data.index === 13){
          this.noshow();
          this.setData({
            nHiddenFlag:false,
          })
        }else if(this.data.index === 14){
          this.noshow();
          this.setData({
            oHiddenFlag:false,
          })
        }else if(this.data.index === 15){
          this.noshow();
          this.setData({
            pHiddenFlag:false,
          })
        }else if(this.data.index === 16){
          this.noshow();
          this.setData({
            tHiddenFlag:false,
          })
        }else if(this.data.index === 17){
          this.noshow();
          this.setData({
            uHiddenFlag:false,
          })
        }else if(this.data.index === 18){
          this.noshow();
          this.setData({
            vHiddenFlag:false,
          })
        }else if(this.data.index === 19){
          this.noshow();
          this.setData({
            z1HiddenFlag:false,
          })
        }else if(this.data.index === 20){
          this.noshow();
          this.setData({
            wHiddenFlag:false,
          })
        }else if(this.data.index === 21){
          this.noshow();
          this.setData({
            xHiddenFlag:false,
          })
        }else if(this.data.index === 22){
          this.noshow();
          this.setData({
            yHiddenFlag:false,
          })
        }else if(this.data.index === 23){
          this.noshow();
          this.setData({
            z2HiddenFlag:false,
          })
        }
      }else  if(this.data.gender === 'female'){
        if(this.data.index === 0){
          this.noshow();
          this.setData({
            aHiddenFlag:false,
          })
        }else if(this.data.index === 1){
          this.noshow();
          this.setData({
            bHiddenFlag:false,
          })
        }else if(this.data.index === 2){
          this.noshow();
          this.setData({
            cHiddenFlag:false,
          })
        }else if(this.data.index === 3){
          this.noshow();
          this.setData({
            dHiddenFlag:false,
          })
        }else if(this.data.index === 4){
          this.noshow();
          this.setData({
            eHiddenFlag:false,
          })
        }else if(this.data.index === 5){
          this.noshow();
          this.setData({
            fHiddenFlag:false,
          })
        }else if(this.data.index === 6){
          this.noshow();
          this.setData({
            gHiddenFlag:false,
          })
        }else if(this.data.index === 7){
          this.noshow();
          this.setData({
            hHiddenFlag:false,
          })
        }else if(this.data.index === 8){
          this.noshow();
          this.setData({
            iHiddenFlag:false,
          })
        }else if(this.data.index === 9){
          this.noshow();
          this.setData({
            jHiddenFlag:false,
          })
        }else if(this.data.index === 10){
          this.noshow();
          this.setData({
            kHiddenFlag:false,
          })
        }else if(this.data.index === 11){
          this.noshow();
          this.setData({
            lHiddenFlag:false,
          })
        }else if(this.data.index === 12){
          this.noshow();
          this.setData({
            mHiddenFlag:false,
          })
        }else if(this.data.index === 13){
          this.noshow();
          this.setData({
            nHiddenFlag:false,
          })
        }else if(this.data.index === 14){
          this.noshow();
          this.setData({
            oHiddenFlag:false,
          })
        }else if(this.data.index === 15){
          this.noshow();
          this.setData({
            pHiddenFlag:false,
          })
        }else if(this.data.index === 16){
          this.noshow();
          this.setData({
            qHiddenFlag:false,
          })
        }else if(this.data.index === 17){
          this.noshow();
          this.setData({
            rHiddenFlag:false,
          })
        }else if(this.data.index === 18){
          this.noshow();
          this.setData({
            sHiddenFlag:false,
          })
        }else if(this.data.index === 19){
          this.noshow();
          this.setData({
            uHiddenFlag:false,
          })
        }else if(this.data.index === 20){
          this.noshow();
          this.setData({
            vHiddenFlag:false,
          })
        }else if(this.data.index === 21){
          this.noshow();
          this.setData({
            z1HiddenFlag:false,
          })
        }else if(this.data.index === 22){
          this.noshow();
          this.setData({
            wHiddenFlag:false,
          })
        }else if(this.data.index === 23){
          this.noshow();
          this.setData({
            xHiddenFlag:false,
          })
        }else if(this.data.index === 24){
          this.noshow();
          this.setData({
            yHiddenFlag:false,
          })
        }else if(this.data.index === 25){
          this.noshow();
          this.setData({
            z2HiddenFlag:false,
          })
        }
      }
    },

    noshow(){
      this.setData({
        basicHiddenFlag:true,
        aHiddenFlag:true,
        a3HiddenFlag:true,
        bHiddenFlag:true,
        cHiddenFlag:true,
        c2HiddenFlag:true,
        dHiddenFlag:true,
        eHiddenFlag:true,
        fHiddenFlag:true,
        gHiddenFlag:true,
        hHiddenFlag:true,
        iHiddenFlag:true,
        jHiddenFlag:true,
        kHiddenFlag:true,
        lHiddenFlag:true,
        mHiddenFlag:true,
        nHiddenFlag:true,
        oHiddenFlag:true,
        pHiddenFlag:true,
        qHiddenFlag:true,
        rHiddenFlag:true,
        sHiddenFlag:true,
        tHiddenFlag:true,
        uHiddenFlag:true,
        vHiddenFlag:true,
        wHiddenFlag:true,
        xHiddenFlag:true,
        yHiddenFlag:true,
        z1HiddenFlag:true,
        z2HiddenFlag:true,
      })
    },

    // 点击性别事件
    OnRadioChangeGender(event){
      this.setData({
        gender: event.detail
        });
   },
   onChangeA(event) {
    this.setData({
      Avalue: event.detail
    });
  },
  resetA3Data(){
    this.setData({
      A3childvalue:'',  // A31	前额 A32	两侧 A33	头顶 A34	后脑
    })
  },
  onChangeA3Child(event) {
    console.log(event.detail)
    this.setData({
      A3childvalue: event.detail
    }); 
  },
  onChangeB(event) {
      this.setData({
        Bvalue: event.detail
      });
  },
  onChangeC(event) {
    console.log(event.detail)
      this.setData({
        Cvalue: event.detail
      });

      if(this.data.Cvalue.includes("C2")){
        this.setData({
          
        });
      }else{
        this.setData({
        
        });
      
      }
  },
  onChangeC2Child(event) {
    this.setData({
      C2childvalue: event.detail
    })
    console.log(this.data.C2childvalue)
},
onChangeD(event) {
      this.setData({
        Dvalue: event.detail
      });
  },

  onChangeE(event) {
      this.setData({
        Evalue: event.detail
      });
  },
  onChangeF(event) {
      this.setData({
        Fvalue: event.detail
      });
  },
  onChangeG(event) {
      this.setData({
        Gvalue: event.detail
      });
  },
  onChangeH(event) {
      this.setData({
        Hvalue: event.detail
      });
  },
  onChangeI(event) {
      this.setData({
        Ivalue: event.detail
      });
  },
  onChangeJ(event) {
      this.setData({
        Jvalue: event.detail
      });
  },
  onChangeK(event) {
      this.setData({
        Kvalue: event.detail
      });
  },
  onChangeL(event) {
      this.setData({
        Lvalue: event.detail
      });
  },
  onChangeM(event) {
      this.setData({
        Mvalue: event.detail
      });
  },
  onChangeN(event) {
      this.setData({
        Nvalue: event.detail
      });
  },
  onChangeO(event) {
      this.setData({
        Ovalue: event.detail
      });
  },
  onChangeP(event) {
      this.setData({
        Pvalue: event.detail
      });
      if(this.data.Pvalue.includes("P3")){
        this.setData({
          p31HiddenFlag: false
        });
      }else{
        this.setData({
          p31HiddenFlag: true
        });
       
      }
  },
  onChangeQ(event) {
      this.setData({
        Qvalue: event.detail
      });
  },
  onChangeR(event) {
      this.setData({
        Rvalue: event.detail
      });
  },
  onChangeS(event) {
      this.setData({
        Svalue: event.detail
      });
  },
  onChangeT(event) {
      this.setData({
        Tvalue: event.detail
      });
  },
  onChangeU(event) {
      this.setData({
        Uvalue: event.detail
      });
  },
  btns(event) {
    this.setData({
      arrs: !this.data.arrs
      
    });
    console.log(this.data.arrs)
},
btnstt(event) {
  this.setData({
    arrstt: !this.data.arrstt
    
  });

},
btnsdh(event) {
  this.setData({
    arrsdh: !this.data.arrsdh
    
  });

},
btnsdhs(event) {
  this.setData({
    arrsdh: false
    
  });

},
  onChangeX(event) {
      this.setData({
        Xvalue: event.detail
      });

  },
  onChangeY(event) {
    this.setData({
      Yvalue: event.detail
    });
     
  },
  afterRead(event){
    const { file } = event.detail;
    console.log(event.detail);
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    let that=this;
    wx.uploadFile({
      //url:"https://localhost/wechat/upload",
      url: 'https://www.xiangruzy.cn/wechat/upload', // 替换为你的接口地址 
      method:'POST',
      filePath: file.url,
      name: 'file',
      success(res) {
        console.log(res);
        console.log(res.statusCode);
        console.log(res.data);
        console.log(res.data.respCode);


        var resData = res.data.replace(" ", "");
        //去掉utf8编码的BOM头
        resData = resData.replace(/\ufeff/g, "");
        console.log('test2: '+resData);
        var jsonObj = JSON.parse(resData);
        console.log('respCode=' + jsonObj['respCode'] );
        console.log('respMsg=' + jsonObj['respMsg'] );

        if (res.statusCode === 200 && jsonObj['respCode'] === '0000') {  
          let dat = jsonObj['respMsg'].split("|");
            // 上传完成需要更新 fileList
            const { fileList = [] } = that.data;
            fileList.push({ ...file, url: dat[0] });
            that.setData({ fileList });
            that.setData({
              Z2value: dat[1]
            })
        }else{
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
          title: err.errMsg,
          icon: 'error',
          duration: 2000
        })
    }  
    });
  
  },
  delete(event){
      this.setData({
        fileList:[]
      })
  },

  showPopup() {
    this.setData({
      showPrivacyPopup:true
    }),
    wx.getPrivacySetting({
        success: res => {
            this.setData({
                privacyContent: res.privacyContractName
            })
        }
    })
  },
  onClose() {
    
    this.setData({
      showPrivacyPopup:false
    })
 },
 handleDisagree(e) {
   console.log(this.data)
  wx.showToast({
    title: '未同意，已退出',
    icon: 'error',
    duration: 2000
  })
  this.onClose()
},
handleAgree(e) {
  this.fetchData()
  this.onClose()
  
},

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
  onShareAppMessage() {

  }
})