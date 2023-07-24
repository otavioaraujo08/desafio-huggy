<template>
    <div class="container">
        <div class="chatListBox">
            <div class="chatItemsBox">
                <ChatHeader />

                <div class="chatList">
                    <ChatContacts
                        v-for="user in userList"
                        :key="user.id"
                        :user="user"
                        v-on:click="selectUser(user.id)"
                        :class="[
                            'chatListItem',
                            { selectedItem: user.id === selectedUserId },
                        ]"
                    />
                </div>
            </div>
        </div>
        <div class="chatHistoryBox">
            <ChatHistory :userSelected="userSelected" />
        </div>
    </div>
</template>

<script>
import { userService } from '@/services/user';
import { ref } from 'vue';

export default {
    data() {
        const userSelected = ref(null);
        const selectedUserId = ref(null);
        let userList = ref([]);

        return {
            userSelected,
            selectedUserId,
            userList,
        };
    },

    methods: {
        async getUserList() {
            try {
                const response = await userService.getUsers();

                this.userList = response;
            } catch (error) {
                console.log(error);
            }
        },

        selectUser(userId) {
            this.selectedUserId =
                this.selectedUserId === userId ? null : userId;
            const user = this.userList.find((u) => u.id === userId);
            this.userSelected = user;
        },
    },

    async mounted() {
        await this.getUserList();
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
}

.chatListBox {
    width: 30%;
    background: #ffffff;

    @media (max-width: 800px) {
        width: 40%;
    }
}

.chatHistoryBox {
    width: 70%;

    @media (max-width: 800px) {
        width: 60%;
    }
}

.chatItemsBox,
.chatList {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.chatList {
    padding: 0.5rem;
}

.chatListItem {
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #f5f5f5;
    }
}

.selectedItem {
    background-color: #eef0fc;
}
</style>
