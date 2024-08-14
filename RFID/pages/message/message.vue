<template>
	<view class="messageCenter" >
		<text>消息中心</text>
		<view class = "messages" v-for="item in msgs" :key="item.id">
			<view class="msg">
					<view @click="goto(item.type)">
						<view class="up">
							<image src="../../static/消息.png" mode="widthFix" style="width: 36rpx;"></image>
							<view class="time">{{item.time}}</view>
						</view>
						<view class="down">
							<view class="content">{{item.msg}}</view>
						</view>
						
					</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	
	// 定义消息列表
	const msgs = ref([]);
	
	// 读取本地存储中的消息
	function loadMessages() {
	  const storedMessages = uni.getStorageSync('messages') || [];
	  // 检查消息队列长度是否大于50条
	  if (storedMessages.length > 50) {
	    // 删除最旧的50条数据
	    storedMessages = storedMessages.slice(-50);
	    uni.setStorageSync('messages', storedMessages);
	    console.log('消息队列超出50条.');
	  }
	  console.log(storedMessages);
	  msgs.value = storedMessages.reverse();
	}
	// 清空本地存储中的消息
	function clearMessages() {
	  uni.removeStorageSync('messages');
	  console.log('消息队列已清空');
	}

	// 页面跳转方法
	function goto(msgType) {
		// 根据消息类型来决定跳转的页面
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
		uni.navigateTo({
			url: url
		});
	  
	}
	
	// 页面加载时读取消息
	onMounted(() => {
	  loadMessages();
	});
	// // 页面销毁时清空消息队列
	// onUnmounted(() => {
	//   clearMessages();
	// });
	
	// // 小程序隐藏时清空消息队列
	// onHide(() => {
	//   clearMessages();
	// });
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: CustomFont;
		src: url('./iconfont.ttf');
	}
	.messageCenter{
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		padding: 15px;
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		.messages{
			padding: 10rpx;
			margin-left: 10rpx;
			background-color:  rgba(255, 255, 255, 0.8);
			border-radius: 10rpx;
			margin-top: 15rpx;
			margin-bottom: 15rpx;
			.msg{
				padding: 12rpx;
				display: flex;
				flex-direction: column;
				.up{
					display: flex;
					flex-direction: row;
					align-items: center;
					border-bottom: 1px solid #cfcfcf;
					.time{
						margin-left: 10rpx;
						font-size: 25rpx;
					}
				}
				.down{
					.content{
						font-size: 28rpx;
						color: #666;
					}
				}
			}
			
			
		}
	}
</style>
