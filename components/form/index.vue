<template>
    <div :class="{ form: true, error: emailError }">
        <div class="formHeader">
            <h1 class="title">Login</h1>

            <input
                type="email"
                v-model="email"
                placeholder="E-mail ou usuário"
                class="input"
                :class="{ inputError: emailError }"
            />

            <span class="helperText" v-if="emailError">{{ emailError }}</span>

            <button class="button" @click="validateAndRedirect">
                Continuar
            </button>
        </div>

        <FormDashedText text="Ou" />

        <FormGroupButton />

        <p class="registerText">Cadastrar</p>

        <tr />

        <div class="lgpdBox">
            <span class="lgpdText">Termos e privacidade</span>
            <span class="lgpdText">Português (Brasil)</span>
        </div>
    </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const email = ref('');
let emailError = '';

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (true) {
        case !email.value:
            emailError = 'O email é obrigatório.';
            break;
        case !emailRegex.test(email.value):
            emailError = 'O email deve ser válido.';
            break;
        default:
            emailError = '';
            break;
    }
};

const validateAndRedirect = () => {
    validateEmail();

    if (!emailError) {
        router.push('/home');
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    gap: 1rem;
    width: 90%;
    max-width: 28rem;
    height: 36rem;
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

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
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

.inputError {
    border: 2px solid #fa0000d7;
}
.helperText {
    color: #fa0000d7;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    max-height: 1rem;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
}

.form.error {
    gap: 0.5rem;
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
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
}

.registerText {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #262525;
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
}

.lgpdBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 80%;
    margin-top: 1.6rem;
}

.lgpdText {
    font-size: 0.9rem;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #909090;
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 0.7rem;
    }

    &:last-child {
        &::after {
            content: '▼';
            margin-left: 0.2rem;
            color: #4e4d4d;
            font-size: 0.6rem;
        }
    }
}
</style>
