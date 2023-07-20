<template>
    <div class="container">
        <div class="chatListBox"><HomeChatList /></div>
        <div class="chatHistoryBox">Historico das conversas</div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
}

.chatListBox {
    width: 30%;
    background: #ffffff;
}

.chatHistoryBox {
    width: 70%;
}
</style>
