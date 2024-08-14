<template>
	<view class="container">
		<view class="uni-column">
			<view class="myhome">
				我的家庭
			</view>
			<view class="explore">
				<view class="text_explore" >探索</view>
				<view class="pic" >
					<image style="width: 100%" :src="exploreImgSrc" mode="widthFix"></image>
				</view>		
			</view>
			<view class="message">
				<view class="text_message">消息</view>
				<!-- <uni-section title="两条消息未读" type="circle" >
							<uni-card title="冰箱" sub-title="我的家庭 | 餐厅"  :thumbnail="fridge" @click="onClick">
								<text class="uni-body">昨日13:31已关门 已登记人员儿童Lucy操作</text>
							</uni-card>
							<uni-card title="智能洗衣机" sub-title="我的家庭 | 洗漱间"  :thumbnail="washer" @click="onClick">
								<text class="uni-body">昨日13:31已结束 已登记人员成人Tommy操作</text>
							</uni-card>
							
				</uni-section> -->
				<view class="message-bar">
				      <!-- <view v-for="(item, index) in latestMessages" :key="index">
				        <view class="msg" @click="redirect(item.type)">
				          <text>{{ item.msg }}</text>
				          <text>{{ item.time }}</text>
				        </view>
				      </view> -->
					  <view class = "messages" v-for="(item, index) in latestMessages" :key="index">
						<view @click="redirect(item.type)">
					  	<uni-section :title="item.time" type="line" >
					  		<view class="content">{{item.msg}}</view>
					  	</uni-section>
						</view>
					  </view>
				</view>
				<view class="moreMessage">
					<button size="mini" type="default"
						hover-class="is-hover"
						@click="goto('/pages/message/message')">消息详情</button>
				</view>
			</view>
		</view>
		
		<!-- <uni-popup ref="infoPopup">
			弹窗
		</uni-popup> -->
		<uni-popup ref="popup" @change="change">
			<view class="popup-content" @click="redirect(msgType)">
				<view class="title">
					<uni-icons type="gear-filled"></uni-icons>
					<text class="title">系统消息</text>
				</view>
				<text class="time">{{time}}</text>
				<text class="text">{{message}}</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
  import io from '@hyoga/uni-socket.io';
    import { ref } from "vue";
  
    export default {
      data() {
        return {
          exploreImgSrc: '/static/home.jpg',
          fridge: '/static/冰箱.png',
          washer: '/static/智能洗衣机.png',
          message: null,
          msgType: null,
          time: null,
          latestMessages: [],  // 存储最新的两条消息
        };
      },
      methods: {
        goto(url) {
          uni.navigateTo({
            url: url
          });
        },
        redirect(msgType) {
          console.log(msgType); // 打印 type 的数据类型
          let url = '';
          switch(msgType) {
            case 1:
              url = '/pages/msgToiletIn/msgToiletIn'; 
              break;
            case 2:
              url = '/pages/msgToiletOut/msgToiletOut'; 
              break;
            case 3:
              url = '/pages/msgKitchen/msgKitchen'; 
              break;
            case 4:
              url = '/pages/msgKitchenOut/msgKitchenOut'; 
              break;
            case 5:
              url = '/pages/msgCloseDoor/msgCloseDoor'; 
              break;
            case 6:
              url = '/pages/msgDoor/msgDoor'; 
              break;
            case 9:
              url = '/pages/msgToilet/msgToilet'; 
              break;
            default:
              console.warn('未匹配到对应的页面路由');
              return;
          }
          console.log(url);
          this.goto(url); // 使用已有的 goto 方法进行页面跳转
        },
        change(e) {
          console.log('当前模式：' + e.type + ',状态：' + e.show);
        },
        toggle(type) {
          this.type = type;
          // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
          this.$refs.popup.open(type);
		  let messages = uni.getStorageSync('messages') || [];
		  // 更新最新的两条消息
		  this.latestMessages = messages.slice(-2).reverse();
        },
        setupWebSocket() {
          const socket = io('ws://122.9.40.140:5001', {
            transports: ['websocket', 'polling'],
            timeout: 5000,
          });
  
          socket.on('connect', () => {
            console.log('WebSocket 已连接');
			let messages = uni.getStorageSync('messages') || [];
			// 更新最新的两条消息
			this.latestMessages = messages.slice(-2).reverse();
          });
  
          socket.on('update', (data) => {
            console.log('收到服务器消息：', data);
            this.message = data.msg;  // 更新消息
            this.msgType = data.type;
            this.time = data.time;
            // 获取当前保存的消息列表
            let messages = uni.getStorageSync('messages') || [];
            
            // 添加新消息到消息列表
            messages.push({
              msg: data.msg,
              type: data.type,
              time: data.time
            });
            
            // 如果消息数超过50条，删除最旧的50条
            if (messages.length > 50) {
              messages = messages.slice(-50);
            }
            
            // 将更新后的消息列表保存到本地
            uni.setStorageSync('messages', messages);
            
            
            this.toggle('top');
          });
  
          socket.on('error', (err) => {
            console.error('WebSocket 错误：', err);
          });
        }
      },
      mounted() {
        this.setupWebSocket();
      }
    };
</script>
<style lang="scss" scoped>
	.container {
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		// background-image: url('~@/static/background.jpg');
		padding: 15px;
		font-size: 16px;
		line-height: 30px;
		.myhome{
			font-weight: 500;
		}
		.explore{
			font-size: 20px;
			font-weight: 600;
			margin-bottom: 20rpx;
			.text_explore{
				margin-bottom: 20rpx;
			}
			.pic{
				border-radius: 15rpx;
				overflow: hidden;
			}
		}
		.message{
			font-size: 20px;
			padding: 10rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
			.text_message{
				margin-bottom: 20rpx;
				font-weight: 600;
			}
			// .msg{
			// 	// padding: 2rpx;
			// 	font-size: 25rpx;
			// 	margin-top: 5rpx;
			// 	margin-bottom: 5rpx;
			// 	border: 1px solid #cfcfcf;
			// 	border-radius: 20rpx;
			// }
			.messages{
				padding: 10rpx;
				.time{
					font-size: 36rpx;
					margin-bottom: 10
				}
				.content{
					font-size: 28rpx;
					color: #666;
				}
				border: 1px solid #cfcfcf;
				border-radius: 20rpx;
				margin-bottom: 10rpx;
			}
			.moreMessage{
				text-align: right; /* 使文本内容靠右对齐 */
				padding: 10px;
			}
			.is-hover {
				color: rgba(255, 255, 255, 0.6);
				background-color: #179b16;
				border-color: #179b16;
			  }
		}
		.popup-content {
			padding: 15px;
			// height: 50px;
			background-color: #ffffff;
			border-radius: 0rpx 0rpx 30rpx 30rpx;
			border: 1px solid #cfcfcf;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			// align-items: center;
			justify-content: center;
			.title{
				display: flex;
				flex-direction: row;
				font-weight: 600;
			}
			
		}

	}
	
</style>
