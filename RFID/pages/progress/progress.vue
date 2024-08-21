<template>
  <view class="container">
    <view>
      <image class="image" src="../../static/progress.jpg" mode="widthFix"></image>
    </view>
    <text v-if="!loadingComplete" class="loading-message">RFID正在读取中请适当放缓步频</text>
    <text v-if="loadingComplete" class="success-message">加载成功</text>
    <view class="progress-bar">
      <view class="progress" :style="{ width: progress + '%' }"></view>
    </view>
   <!-- <button v-if="loadingComplete" class="complete-button" @click="goto('/pages/my/my')" >完成</button> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      loadingComplete: false
    };
  },
  mounted() {
    this.startLoading();
  },
  methods: {
	goto(url) {
			  uni.navigateTo({
			    url: url
			  });
	},
    startLoading() {
      let interval = setInterval(() => {
        if (this.progress >= 100) {
          clearInterval(interval);
          this.loadingComplete = true;
        } else {
          this.progress += 5;  // 每100ms增加2%，5秒内到100%
        }
      }, 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(to bottom, #d0f78d, #f7f8fa);
  height: 100%;
  padding: 35rpx;
  font-weight: 500;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  .image {
    padding: 20rpx;
    margin-top: 100rpx;
    border-radius: 20rpx;
    width: 600rpx;
  }
}

.progress-bar {
  width: 80%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress {
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.1s linear;
}

.loading-message {
  padding: 20rpx;	
  color: #000000;
  font-size: 18px;
  margin-bottom: 20rpx;
}

.success-message {
  color: #000000;
  padding: 20rpx;
  font-size: 18px;
}

.complete-button {
  width: 600rpx;
  height: 60rpx;
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  line-height: 60rpx;
  border-radius: 20rpx;
  position: absolute;
  bottom: 70rpx;
}
</style>


