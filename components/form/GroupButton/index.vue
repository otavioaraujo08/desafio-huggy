<template>
    <div class="buttonGroup">
        <button class="buttonLogin">
            <Icon name="logos:google-icon" class="icon" />
            Continuar com o Google
        </button>
        <button class="buttonLogin">
            <Icon name="logos:facebook" class="icon" />
            Continuar com o Facebook
        </button>
        <button class="buttonLogin">
            <Icon name="logos:apple" class="icon" />
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
}

.buttonLogin {
    height: 2.5rem;
    width: 80%;
    background: #ffffff;
    border: 2px solid #efefef;
    border-radius: 2rem;
    font-weight: 500;
    font-family: 'Noto Sans', sans-serif;
    color: #000000;
    font-size: 1rem;
    letter-spacing: 0.1px;
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media (max-width: 600px) {
        font-size: 0.6rem;
    }
}

.icon {
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;
    height: 1.4rem;
    width: 1.4rem;

    @media (max-width: 600px) {
        height: 1rem;
        width: 1rem;
    }

    @media (max-width: 300px) {
        height: 0.9rem;
        width: 0.9rem;
        padding-bottom: 0;
    }
}
</style>
