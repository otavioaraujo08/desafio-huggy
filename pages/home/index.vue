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

<script setup>
import { ref } from 'vue';

const userSelected = ref(null);
const selectedUserId = ref(null);
const userList = [
    {
        id: 1,
        name: 'Agostinho Carrara',
        lastMessage: '199,99',
        image: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
    },
    {
        id: 2,
        name: 'Beicola',
        lastMessage: 'precisamos ver dos fiado, tem mais de 20 pasteu',
        image: 'https://www.rbsdirect.com.br/filestore/9/4/5/0/4/1_61f8ae750c9ffa6/140549_92afc993b60ac52.jpg?w=700',
    },
    {
        id: 3,
        name: 'Lineu Silva',
        lastMessage: 'Sobre a inspeção do outro dia',
        image: 'https://scontent.fimp2-2.fna.fbcdn.net/v/t39.30808-6/296298958_144914484838963_7217761843938914153_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6MYqxntP2vsAX_h0vv4&_nc_ht=scontent.fimp2-2.fna&oh=00_AfBDVDDuzA4WrpurLNTOP3nrpYCdvrnZgBnLdV2q630KSg&oe=64BED3C6',
    },
];

const selectUser = (userId) => {
    selectedUserId.value = selectedUserId.value === userId ? null : userId;
    const user = userList.find((u) => u.id === userId);
    userSelected.value = user;
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
