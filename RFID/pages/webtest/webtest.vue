<!-- <template>
  <view>
    <text v-if="message">{{ message }}</text>
  </view>
</template>

<script setup>
import io from '@hyoga/uni-socket.io';

const socket = io('ws://127.0.0.1:5000', {
  query: {},
  transports: [ 'websocket', 'polling' ],
  timeout: 5000,
});

socket.on('connect', () => {
  // ws连接已建立，此时可以进行socket.io的事件监听或者数据发送操作
  // 连接建立后，本插件的功能已完成，接下来的操作参考socket.io官方客户端文档即可
  console.log('ws 已连接');
  // socket.io 唯一连接id，可以监控这个id实现点对点通讯
  const { id } = socket;
  socket.on(id, (message) => {
    // 收到服务器推送的消息，可以跟进自身业务进行操作
    console.log('ws 收到服务器消息：', message);
  });
  // 主动向服务器发送数据
  socket.emit('send_data', {
    time: +new Date(),
  });
});

// socket.on('error', (msg: any) => {
//   console.log('ws error', msg);
// });
socket.on('error', (msg) => {
  console.log('ws error', msg);
});
</script -->>
<template>
  <view>
    <text v-if="message">{{ message }}</text>
  </view>
</template>

<script setup>
import io from '@hyoga/uni-socket.io';
import {ref} from "vue";

const socket = io('ws://127.0.0.1:5000', {
  transports: ['websocket', 'polling'],
  timeout: 5000,
});

const message = ref(null);

socket.on('connect', () => {
  console.log('WebSocket 已连接');
});

socket.on('update', (data) => {
  console.log('收到服务器消息：', data);
  message.value = data.msg;  // 更新消息
});

socket.on('error', (err) => {
  console.error('WebSocket 错误：', err);
});
</script>
