<template>
    <div class="chatMessages" v-if="messages">
        <div
            v-for="message in messages"
            :key="message.id"
            :class="[message.isMine ? 'messageStart' : 'messageEnd']"
        >
            <div :class="[message.isMine ? 'mineMessage' : 'notMineMessage']">
                {{ message.message }}
            </div>

            <p class="time">{{ message.date }}</p>
        </div>
    </div>
    <div class="sendFirstMessage" v-else>
        <h2 class="auxiliarText">Envie sua primeira mensagem</h2>
    </div>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.chatMessages {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.messageStart,
.messageEnd {
    display: flex;
    flex-direction: column;
}

.messageStart {
    align-items: flex-end;
}

.messageEnd {
    align-items: flex-start;
}

.mineMessage,
.notMineMessage {
    height: 3.5rem;
    width: auto;
    min-width: 30%;
    padding: 0.875rem 1.25rem;
    align-items: flex-start;
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;

    @media (max-width: 768px) {
        min-width: 50%;
        height: auto;
        font-size: 0.8rem;
    }
}

.mineMessage {
    border-radius: 0.375rem 0.375rem 0.375rem 0.125rem;
    background: var(--color-fill-primary-3, #374fc9);
    color: #ffffff;
}

.notMineMessage {
    border-radius: 0.375rem 0.375rem 0.125rem 0.375rem;
    border: 1px solid var(--color-border-neutral-2, #dcdce1);
    background: var(--color-fill-neutral-low-0, #fff);
    color: #232326;
}

.time {
    color: var(--color-text-on-neutral-low-strong, #232326);
    font-family: IBM Plex Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;

    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
}

.sendFirstMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.auxiliarText {
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    color: var(--color-text-on-neutral-low-strong, #232326);
}
</style>
