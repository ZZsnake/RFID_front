<template>
	<view class="container">
		<uni-card class="device">
			<view class="RFID">
				<image class="RFIDdevice" src="../../static/RFIDdevice.jpg" mode="widthFix"></image>
				<view class="RFIDtext">
					入户检测区域
				</view>
			</view>
			<uni-grid column="4" show-border="false" square="false">
				<view class="grid-item-box" style="background-color: #fff;">
					<view class="textup">状态</view>
					<uni-icons style="margin-bottom: 20rpx;" type="eye" :size="30" color="#777" />
					<view class="text">运行中</view>
				</view>
				<view class="grid-item-box" style="background-color: #fff;">
					<view class="textup">登记人数</view>
					<uni-icons style="margin-bottom: 20rpx;" type="contact" :size="30" color="#777" />
					<view class="text">3名成员</view>
				</view>
				<view class="grid-item-box" style="background-color: #fff;">
					<view class="textup">运行消息</view>
					<uni-icons style="margin-bottom: 20rpx;" type="bars" :size="30" color="#777" />
					<view class="text">4条未读</view>
				</view>
				<view class="grid-item-box" style="background-color: #fff;">
					<view class="textup">网关</view>
					<uni-icons style="margin-bottom: 20rpx;" type="smallcircle" :size="30" color="#777" />
					<view class="text">已连接</view>
				</view>
			</uni-grid>
			<view class="add" @click="goto('/pages/add/add')">
				<text>添加注册人员</text>
				<image src="../../static/Right右.png" style="width: 40rpx;" mode="widthFix"></image>
			</view>
		</uni-card>
		<uni-card>
			<view class="monitor">
				<text class="monitorText">
					"我的家庭"检测区
				</text>
				<image class="home" src="../../static/home.jpg" mode="widthFix"></image>
				<uni-card class="deviceButton">
					<text class="deviceButtonText">查看设备详情</text>
				</uni-card>
			</view>
		</uni-card>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goto(url) {
					uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		// background-image: url('~@/static/background.jpg');
		padding: 15px;
		font-size: 16px;
		line-height: 30px;
		.device{
			.RFID{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.RFIDdevice{
					
					width: 200rpx;
					margin-bottom: 30rpx;
					// display: flex;
					// flex-direction:column;
					// justify-content: flex-start;
					// align-items: center;
				}
				.RFIDtext{
					// display: flex;
					// flex-direction: column;
					// align-items: center;
					font-size:30rpx;
					font-weight: 600;
					margin-bottom: 30rpx;
				}
			}
			.grid-item-box{
				padding: 15rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.textup{
					margin-bottom: 20rpx;
				}
			}
			.add{
				margin-top: 30rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				font-size: 30rpx;
				font-weight: 600;
			}
		}
		.monitor{
			.monitorText{
				font-weight: 600;
				font-size: 30rpx;
			}
			
			.home{
				margin-top: 30rpx;
				width: 540rpx;
			}
			.deviceButton{
				.deviceButtonText{
					font-size: 30rpx;
					
				}
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 40rpx;
			}
		}
		
	}
	
</style>
