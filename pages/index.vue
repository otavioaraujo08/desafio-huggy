<template>
    <div class="pageStyles">
        <div class="titleBox">
            <h2 class="title">Área de Login</h2>
            <p class="subtitle">
                Faça login para acessar nosso super-aplicativo
            </p>
        </div>

        <button class="button">Fazer login com a Huggy</button>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

.pageStyles {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
    gap: 4rem;
}

.titleBox {
    width: auto;
    min-width: 20.8rem;
    height: 4.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
}

.title {
    font-size: 2rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    line-height: 0.5rem;
    color: #2934a5;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
}

.subtitle {
    font-size: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    line-height: 1.75rem;
    color: #46464a;

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
}

.button {
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #293ea5;
    border: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 550;
    line-height: 1rem;
    letter-spacing: 1px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #1e2d7a;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 600px) {
        width: 50%;
        max-width: 14rem;
        font-size: 0.7rem;
    }
}
</style>
