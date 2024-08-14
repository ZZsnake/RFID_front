<template>
	<view class="layout">
		<view class="title">入户RFID检测区</view>
		<view class="box">
			<view class="pic">
				<image src="../../static/toilet.jpg" mode="widthFix"></image>
			</view>
		</view>
		<view class="text">已登记老人Monica在洗手间超过15分钟,请注意</view>
	</view>
</template>

<script>
export default {
	
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.name); //打印出上个页面传递的参数。
	}
}
</script>

<style lang="scss" scoped>
	.layout{
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		padding: 50rpx;
		font-weight: 500;
		line-height: 30px;
		.title{
			font-size: 20px;
			margin-bottom: 20rpx;
		}
		.box{
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			
		}
		.text{
			padding: 30rpx;
		}
	}
</style>

