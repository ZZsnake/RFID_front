<template>
	<view class="container">
		<view class="title" style="margin-left: 10rpx; font-size: 35rpx; margin-bottom: 20rpx;">注册人员权限设置</view>
		<view class="layout">
			<view class="box">
				<uni-grid column="2">
					<view class="leftbox">
						<image class="baby" src="../../static/baby.png" mode="widthFix"></image>
						 <uni-data-select
								class="select-picker"
						        v-model="value1"
						        :localdata="range1"
						        @change="change1"
						      ></uni-data-select>	
					</view>
					
					<view class="rightbox">
						<text class="rightboxTitle">
							5-12岁儿童组
						</text>
						<text class="rightboxContent">
							组内成员:
						</text>
						<text class="rightboxContent">
							Lucy
						</text>
					</view>
				</uni-grid>
			</view>
			<view class="canDoBox">
				<view class="canDoTitle">
					可以执行以下操作
					<uni-icons type="plus-filled" size="18"></uni-icons>
				</view>
				
				<view class="canDoBox1">
					<image class="icon" src="../../static/door .png" mode="widthFix"></image>
					<text class="boxText"> 通过大门 </text>
					<uni-icons type="clear" size="20" style="margin-left: 280rpx;" color="#777"></uni-icons>
				</view>
				<view class="canDoBox1">
					<image class="icon" src="../../static/衣柜2.png" mode="widthFix"></image>
					<text class="boxText"> 打开衣柜 </text>
					<uni-icons type="clear" size="20" style="margin-left: 280rpx;" color="#777"></uni-icons>
				</view>
			</view>
			<view class="canDoBox">
				<view class="canDoTitle">
					执行以下操作会发出通知
					<uni-icons type="plus-filled" size="18"></uni-icons>
				</view>
				
				<view class="canDoBox2">
					<view class="left">
						<image class="icon" src="../../static/notice.png"  mode="widthFix"></image>
						<text class="boxText"> 通知方式 </text>
					</view>
					
					<view class="right">
						<uni-data-select class="notice-picker"
					       v-model="value2"
					       :localdata="range2"
					       @change="change2"
					     ></uni-data-select>
					</view>
					
				</view>
				<view class="canDoBox1">
					<image class="icon" src="../../static/火焰.png" mode="widthFix"></image>
					<text class="boxText"> 靠近厨房灶台 </text>
					<uni-icons type="clear" size="20" style="margin-left: 220rpx;" color="#777"></uni-icons>
				</view>
				
			</view>
			<view class="start">
				<text style="color: aliceblue;">开始录入</text>
			</view>
		</view>
	</view>
	
	
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
		value2: 0,
        range1: [
          { value: 0, text: "5-12岁儿童" },
          { value: 1, text: "成年人" },
          { value: 2, text: "老人" },
        ],
		range2: [
		  { value: 0, text: "应用消息推送" },
		  { value: 1, text: "发送短信" },
		  { value: 2, text: "拨打紧急电话" },
		],
      };
    },
    methods: {
      change1(e) {
        console.log("e:", e);
      },
	  change2(e) {
	    console.log("e:", e);
	  },
    },
  };

</script>

<style lang="scss" scoped>
	// @import "@/components/iui-design/style/index.scss";
	.container{
		background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
		height: 100%;
		padding: 35rpx;
		font-weight: 500;
		line-height: 30px;
		.layout{
				
				display: flex;
				flex-direction: column;
				align-items: center;
				.title{
					font-size: 35rpx;
					font-weight: 500;
					margin-bottom: 20rpx;
				}
				.box{
					background-color: #f7f8fa;
					border-radius: 15rpx;
					padding: 15rpx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					.leftbox{
						padding: 18rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.baby{
							width: 100px;
						}
						.select-picker{
							margin-top: 10rpx;
							width: 130px;
						}
					}
					.rightbox{
						margin-left: 30rpx;
						padding: 18rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.rightboxTitle{
							font-size: 40rpx;
							font-weight: 600;
						}
					}
				}
				.canDoBox{
					margin-top: 30rpx;
					background-color: #f7f8fa;
					border-radius: 15rpx;
					padding: 15rpx;
					display: flex;
					flex-direction: column;
					.canDoTitle{
						font-size: 30rpx;
						font-weight: 500;
					}
					.canDoBox1{
						margin-top: 20rpx;
						padding:15rpx;
						background-color: #d0f78d;
						border-radius: 30rpx;
						display: flex;
						flex-direction: row;
						align-items: center;
						.icon{
							margin-left: 30rpx;
							width: 50rpx;
						}
						.boxText{
							margin-left: 20rpx;
						}
						.notice-picker{
							margin-left: 10rpx;
							width: 30rpx;
						}
					}
					.canDoBox2{
						margin-top: 20rpx;
						padding:15rpx;
						background-color: lemonchiffon;
						border-radius: 30rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						.left{
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							.icon{
								margin-left: 30rpx;
								width: 50rpx;
							}
							.boxText{
								margin-left: 20rpx;
							}
						}
						.right{
							.notice-picker{
								width: 80rpx;
							}
						}
					}
				}
				.start{
					margin-bottom: 30rpx;
					padding: 15rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					position: fixed; /* 设置元素为固定定位 */
					bottom: 0; /* 距离底部为 0 */
					width: 80%; /* 宽度占满容器 */
					background-color:#1eb0bb;
					border-radius: 15rpx;
				}
			}
		
	}
	</style>