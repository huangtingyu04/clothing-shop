<template>
  <div class="message-alert">
    <div class="cart-alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
      <div class="cart-message">
        {{ item.message }}
      </div>
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        // {
        //   message: 訊息內容
        //   status: 'danger'
        //   timestamp: message_id
        // }
      ],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on('messsage:pushCart', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
    // vm.$bus.$emit('messsage:pushCart');
    //外層使用 on 去註冊，內層使用 $emit 去觸發
  },
};
</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  top: 40%;
  right: 50%;
  transform: translateX(50%);
  z-index: 1100;
}
.cart-message {
  padding-left: 7px;
}
.cart-alert {
  width: 350px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
 .success-checkmark {
    width: 80px;
    height: 115px;
    .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #4CAF50;
        
        &::before {
            top: 3px;
            left: -2px;
            width: 30px;
            transform-origin: 100% 50%;
            border-radius: 100px 0 0 100px;
        }
        
        &::after {
            top: 0;
            left: 30px;
            width: 60px;
            transform-origin: 0 50%;
            border-radius: 0 100px 100px 0;
            animation: rotate-circle 4.25s ease-in;
        }
        
        &::before, &::after {
            content: '';
            height: 100px;
            position: absolute;
            background: #d4edda;
            transform: rotate(-45deg);
        }
        
        .icon-line {
            height: 5px;
            background-color: #4CAF50;
            display: block;
            border-radius: 2px;
            position: absolute;
            z-index: 10;
            
            &.line-tip {
                top: 46px;
                left: 14px;
                width: 25px;
                transform: rotate(45deg);
                animation: icon-line-tip 0.75s;
            }
            
            &.line-long {
                top: 38px;
                right: 8px;
                width: 47px;
                transform: rotate(-45deg);
                animation: icon-line-long 0.75s;
            }
        }
        
        .icon-circle {
            top: -4px;
            left: -4px;
            z-index: 10;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            box-sizing: content-box;
            border: 4px solid rgba(76, 175, 80, .5);
        }
        
        .icon-fix {
            top: 8px;
            width: 5px;
            left: 26px;
            z-index: 1;
            height: 85px;
            position: absolute;
            transform: rotate(-45deg);
            background-color: #d4edda;
        }
    }
  }

  @keyframes rotate-circle {
      0% {
          transform: rotate(-45deg);
      }
      5% {
          transform: rotate(-45deg);
      }
      12% {
          transform: rotate(-405deg);
      }
      100% {
          transform: rotate(-405deg);
      }
  }

  @keyframes icon-line-tip {
      0% {
          width: 0;
          left: 1px;
          top: 19px;
      }
      54% {
          width: 0;
          left: 1px;
          top: 19px;
      }
      70% {
          width: 50px;
          left: -8px;
          top: 37px;
      }
      84% {
          width: 17px;
          left: 21px;
          top: 48px;
      }
      100% {
          width: 25px;
          left: 14px;
          top: 45px;
      }
  }

  @keyframes icon-line-long {
      0% {
          width: 0;
          right: 46px;
          top: 54px;
      }
      65% {
          width: 0;
          right: 46px;
          top: 54px;
      }
      84% {
          width: 55px;
          right: 0px;
          top: 35px;
      }
      100% {
          width: 47px;
          right: 8px;
          top: 38px;
      }
  }
}
</style>