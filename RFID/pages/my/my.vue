<template>
	<view class="container">
		<view class="user">
			<view class="userName">
				<text>Tommy</text>
				<!-- <uni-card class="detail">
					<text>身份 | 家庭管理员</text>
				</uni-card> -->
				<view class="detail">
					身份信息 | 家庭管理员
				</view>
			</view>
			<uni-icons type="right" size=""></uni-icons>
			<image class="userImg" src="../../static/头像.jpg" mode="widthFix"></image>
		</view>
		<view class="familyBox">
			<text class="title">
				Tommy的家庭
			</text>
			<view class="detail">
				3名成员
			</view>
			<view class="family">
				<view class="member">
					<text>Tommy</text>
					<image class="memberImg" src="../../static/adult.png" mode="widthFix"></image>
				</view>
				<view class="member">
					<text>Monica</text>
					<image class="memberImg" src="../../static/oldman.png" mode="widthFix"></image>
				</view>
				<view class="member">
					<text>Lucy</text>
					<image class="memberImg" src="../../static/baby.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="setting">
			<view class="left">
				<uni-icons type="gear" size="18"></uni-icons>
				<text style="margin-left: 10rpx;">更多设置</text>
			</view>
			<view class="right">
				<image src="../../static/Right右.png" style="width: 50rpx; display: flex; flex-direction: row;justify-content: center;" mode="widthFix"></image>
			</view>
		</view>
		<view class="exit">
			<text style="color: firebrick;">退出</text>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.container {
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		padding: 15px;
		font-size: 16px;
		line-height: 30px;
		display: flex;
		flex-direction: column;
		.user{
			padding: 20rpx;
			display: flex;
			// flex-direction: row;
			// align-items: flex-start;
			justify-content: space-between;
			
			.userName{
				display: flex;
				flex-direction: column;
				font-size: 40rpx;
				.detail{
					margin-top: 20rpx;
					padding: 10rpx;
					background-color: rgba(255, 255, 255, 0.5);
					font-size: 20rpx;
					font-weight: 300;
					border-radius: 15rpx;
				}
			}
			.userImg{
				position: absolute;
				right: 40rpx;
				width: 180rpx;
				border-radius: 100rpx;
			}
		}
		.familyBox{
			margin-top: 50rpx;
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 15rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			.detail{
				font-size: 20rpx;
				font-weight: 300;
			}
			.family{
				background-color: #f7f8fa;
				display: flex;
				flex-direction: column;
				border: 1px solid #cfcfcf;
				border-radius: 20rpx;
				.member{
					padding: 10rpx;
					margin-top: 10rpx;
					margin-bottom: 10rpx;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #cfcfcf;
					.memberImg{
						width:75rpx;
						margin-left: 400rpx;
						border: 1px solid #cfcfcf;
						border-radius: 20rpx;
					}
				}
			}
		}
		.setting{
			margin-top: 30rpx;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			border-radius: 20rpx;
			background-color: #ffffff;
			.left{
				display: flex;
				flex-direction: row;
				justify-content: center;
				
			}
			.right{
			}
		}
		.exit{
			margin-bottom: 20rpx;
			padding: 15rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: fixed; /* 设置元素为固定定位 */
			bottom: 0; /* 距离底部为 0 */
			width: 88%; /* 宽度占满容器 */
			background-color:#ffffff;
			border-radius: 15rpx;
			border: 1px solid #cfcfcf;
		}
	}
	
</style>


<script>
	//import {  } from "@/common/api/{$}.js";
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