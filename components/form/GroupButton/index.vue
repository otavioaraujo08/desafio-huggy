<template>
    <div class="buttonGroup">
        <button class="buttonLogin">
            <Icon name="logos:google-icon" size="1.4rem" class="icon" />
            Continuar com o Google
        </button>
        <button class="buttonLogin">
            <Icon name="logos:facebook" size="1.4rem" class="icon" />
            Continuar com o Facebook
        </button>
        <button class="buttonLogin">
            <Icon name="logos:apple" size="1.4rem" class="icon" />
            Continuar com a Apple
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

.buttonGroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
}

.buttonLogin {
    height: 2.5rem;
    width: 22rem;
    background: #ffffff;
    border: 2px solid #efefef;
    border-radius: 2rem;
    font-weight: 500;
    font-family: 'Noto Sans', sans-serif;
    color: #000000;
    font-size: 1rem;
    letter-spacing: 0.1px;
    cursor: pointer;
}

.icon {
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;
}
</style>
