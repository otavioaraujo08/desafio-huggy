<template>
    <div v-if="userSelected">
        <header class="contactInfos">
            <img
                :src="userSelected?.image"
                alt="User Image"
                lazy
                class="image"
            />

            <div class="name">{{ userSelected?.name }}</div>
        </header>

        <body class="messageBox">
            <div>Informações do usuário selecionado:</div>
            <div>{{ userSelected?.lastMessage }}</div>
        </body>

        <footer class="footerBox">
            <input placeholder="Escreva sua mensagem..." class="input" />

            <button class="sendButton">Enviar</button>
        </footer>
    </div>

    <div v-else>Selecione um usuário</div>
</template>

<script>
export default {
    props: {
        userSelected: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.contactInfos {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #ffffff;
    width: 100%;
    height: 4rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.image {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 0.5rem;
    border: 1px solid #e8e8eb;
    object-fit: cover;
    margin-left: 1rem;

    @media (max-width: 800px) {
        height: 2.5rem;
        width: 2.5rem;
    }
}

.name {
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-weight: 600;
    line-height: 160%;
    color: #141316;
}

.messageBox {
    width: 100%;
    height: 90vh;
    background: #f6f6f8;
    overflow-y: scroll;
    padding: 1rem;
    padding-bottom: 10rem;
}

.footerBox {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    width: 100%;
    height: 9.5rem;
    gap: 1rem;
    padding-left: 2rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
}

.input {
    margin-top: 1rem;
    width: 65%;
    height: 4rem;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-border-neutral-1, #e8e8eb);
    background: var(--color-fill-neutral-low-0, #fff);
}

.sendButton {
    width: 65%;
    height: 3rem;
    background: #38a96d;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-weight: 600;
    line-height: 160%;
    cursor: pointer;

    &:hover {
        background: #2e8e5f;
        transition: 0.3s ease-in-out;
    }
}
</style>
