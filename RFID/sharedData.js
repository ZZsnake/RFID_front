// sharedData.js

let isEnabled = false; // 共享的布尔值

function toggleStatus() {
    isEnabled = !isEnabled; // 切换布尔值
}

function getStatus() {
    return isEnabled; // 返回当前状态
}

export default {
    toggleStatus,
    getStatus
};
