Component({
    data: {
        title: "用户隐私保护提示",
        desc1: "请仔细阅读",
        desc2: "当您点击“同意并继续”时，即表示你已理解并同息该条款内容。如您“不同意并退出”，将无法申请广告位功能。",
        showPrivacy: false,
        privacyContractName:'',
    },
    lifetimes: {
      attached: function() {
        if (wx.getPrivacySetting) {
          wx.getPrivacySetting({
            success: res => {
                console.log("是否需要授权：", res.needAuthorization, "隐私协议的名称为：", res.privacyContractName)
                this.setData({
                  privacyContractName: res.privacyContractName
                })
                if (res.needAuthorization) {
                  this.popUp()
                } else{
                  this.triggerEvent("agree")
                } 
            },
            fail: () => { },
            complete: () => { },
          })
        } else {
          // 低版本基础库不支持 wx.getPrivacySetting 接口，隐私接口可以直接调用
          this.triggerEvent("agree")
        }
      },
    },
    methods: {
        handleDisagree(e) {
            this.triggerEvent("disagree")
            this.hidenPopUp()
        },
        handleAgree(e) {
            this.triggerEvent("agree")
            this.hidenPopUp()
        },
        popUp() {
            this.setData({
              showPrivacy: true
            })
        },
        hidenPopUp() {
            this.setData({
              showPrivacy: false
            })
        },
        openPrivacyContract() {
          wx.openPrivacyContract({
            success: res => {
              console.log('openPrivacyContract success')
            },
            fail: res => {
              console.error('openPrivacyContract fail', res)
            }
          })
        }
    }
})
