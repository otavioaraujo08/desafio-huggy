<template>
    <div
        @click="handleItemClick"
        :class="['itemBox', { selectedItem: isSelected }]"
    >
        <img :src="user.image" :alt="user.name" lazy class="image" />

        <div class="itemInfos">
            <strong class="itemName">{{ user.name }}</strong>
            <storng class="itemLastMessage">{{ user.lastMessage }}</storng>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        const { user } = props;

        return {
            user,
        };
    },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

.itemBox,
.itemInfos {
    display: flex;
}

.itemBox {
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
}

.image {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 0.5rem;
    border: 1px solid #e8e8eb;
    object-fit: cover;
}

.itemInfos {
    flex-direction: column;
}

.itemName {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #232326;

    @media (max-width: 800px) {
        font-size: 0.9rem;
    }
}

.itemLastMessage {
    width: 100%;
    max-width: 18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #46464a;

    @media (max-width: 1220px) {
        white-space: normal;
    }

    @media (max-width: 800px) {
        font-size: 0.7rem;
    }
}
</style>
