// utils/websocket.js
import io from '@hyoga/uni-socket.io';

let socket = null;

function setupWebSocket(onMessageCallback) {
  if (!socket) {
    socket = io('ws://122.9.40.140:5001', {
      transports: ['websocket', 'polling'],
      timeout: 5000,
    });

    socket.on('connect', () => {
      console.log('WebSocket 已连接');
      if (onMessageCallback) {
        let messages = uni.getStorageSync('messages') || [];
        onMessageCallback(messages.slice(-2).reverse());
      }
    });

    socket.on('update', (data) => {
      console.log('收到服务器消息：', data);
      
      let messages = uni.getStorageSync('messages') || [];
      messages.push({
        msg: data.msg,
        type: data.type,
        time: data.time,
      });

      if (messages.length > 50) {
        messages = messages.slice(-50);
      }

      uni.setStorageSync('messages', messages);

      if (onMessageCallback) {
        onMessageCallback(messages.slice(-2).reverse(), data);
      }
    });

    socket.on('error', (err) => {
      console.error('WebSocket 错误：', err);
    });
  }
}

export { setupWebSocket };