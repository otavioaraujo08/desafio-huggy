<template>
    <div class="form">
        <div class="formHeader">
            <h1 class="title">Login</h1>

            <input type="email" placeholder="E-mail ou usuário" class="input" />

            <button class="button">Continuar</button>
        </div>

        <FormDashedText text="Ou" />

        <FormGroupButton />

        <p>ou</p>

        <tr />

        <div>
            <p>Termos e privacidade</p>
            <p>Português (Brasil)</p>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    gap: 1rem;
    width: 28rem;
    height: 34rem;
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e5e5;
}

.formHeader {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 1.6rem;
    width: 80%;
    height: auto;
    color: #000000;
}

.title {
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    color: #333333;
}

.input {
    height: 3.5rem;
    padding: 1rem;
    background: #f4f5f5;
    color: #909090;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
}

.button {
    height: 2.5rem;
    background: #4707ff;
    border: none;
    border-radius: 2rem;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: 0.1px;
}
</style>
