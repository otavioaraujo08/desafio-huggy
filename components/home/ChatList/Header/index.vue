<template>
    <div class="header">
        <div class="headerBox">
            <h2 class="headerTitle">Minhas mensagens</h2>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.header,
.headerBox {
    display: flex;
    align-items: center;
    height: 5rem;
}

.header {
    justify-content: center;
    width: 100%;
}
.headerBox {
    width: 95%;
    border-bottom: 1px solid #e8e8eb;
}

.headerTitle {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2934a5;
    line-height: 2.25rem;
    font-family: 'IBM Plex Sans', sans-serif;
}
</style>
