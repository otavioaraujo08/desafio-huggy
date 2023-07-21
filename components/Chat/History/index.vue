<template>
    <div v-if="userSelected">
        <div>Informações do usuário selecionado:</div>
        <div>{{ userSelected?.name }}</div>
        <div>{{ userSelected?.lastMessage }}</div>
        <img :src="userSelected?.image" alt="User Image" />
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
