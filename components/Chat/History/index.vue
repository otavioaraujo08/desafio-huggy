<template>
    <div v-if="userSelected">
        <header class="contactInfos">
            <img
                :src="userSelected?.profilePicture"
                alt="User Image"
                lazy
                class="image"
            />

            <div class="name">{{ userSelected?.name }}</div>
        </header>

        <body class="messageBox">
            <ChatMessages :messages="historyMessages" />
        </body>

        <footer class="footerBox">
            <input
                type="text"
                @input="updateMessage"
                v-model="message"
                placeholder="Escreva sua mensagem..."
                class="input"
            />

            <button
                :class="['button', message ? 'sendButton' : 'notSendButton']"
                :disabled="!message"
                @click="adicionarMensagem"
            >
                Enviar
            </button>
        </footer>
    </div>

    <div v-else class="selectUserBox"></div>
</template>

<script>
import { chatService } from '@/services/chat';
import { ref, watch } from 'vue';

export default {
    props: {
        userSelected: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        let historyMessages = ref([]);
        let message = ref('');

        const getMessageHistory = async () => {
            try {
                let response;

                switch (props.userSelected.id) {
                    case 1:
                        response = await chatService.getIdOneMessages();
                        break;
                    case 2:
                        response = await chatService.getIdTwoMessages();
                        break;
                    default:
                        response = await chatService.getIdThreeMessages();
                        break;
                }

                historyMessages.value = response;
            } catch (error) {
                console.log(error);
            }
        };

        const adicionarMensagem = async () => {
            try {
                const params = {
                    message: message.value,
                    date: new Date().getHours() + ':' + new Date().getMinutes(),
                    isMine: true,
                };

                switch (props.userSelected.id) {
                    case 1:
                        await chatService.postIdOneMessages(params);
                        break;
                    case 2:
                        await chatService.postIdTwoMessages(params);
                        break;
                    default:
                        await chatService.postIdThreeMessages(params);
                        break;
                }

                message.value = '';
                getMessageHistory();
            } catch (error) {
                console.error('Erro ao adicionar nova mensagem:', error);
            }
        };

        watch(() => props.userSelected, getMessageHistory);

        return {
            adicionarMensagem,
            historyMessages,
            message,
        };
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

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media (max-width: 450px) {
        font-size: 0.7rem;
    }
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
    height: 4.8rem;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-border-neutral-1, #e8e8eb);
    background: var(--color-fill-neutral-low-0, #fff);

    @media (max-width: 800px) {
        width: 55%;
    }

    @media (max-width: 450px) {
        width: 50%;
    }
}

.button {
    width: 65%;
    height: 2.3rem;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-weight: 600;
    line-height: 160%;

    @media (max-width: 800px) {
        width: 55%;
    }

    @media (max-width: 450px) {
        width: 50%;
    }
}

.sendButton {
    background: #38a96d;
    cursor: pointer;

    &:hover {
        background: #2e8e5f;
        transition: 0.3s ease-in-out;
    }
}

.notSendButton {
    background: #c2c2c2;
    cursor: not-allowed;
}

.selectUserBox {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../assets/images/slashes.png');
}
</style>
