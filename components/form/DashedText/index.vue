<template>
    <div class="continuousLine">
        <span class="text">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'DashedText',
    props: {
        text: {
            type: String,
            default: 'Default Text',
        },
    },
};
</script>

<style lang="scss" scoped>
.continuousLine {
    position: relative;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.65rem;
}

.continuousLine::before,
.continuousLine::after {
    content: '';
    width: 100%;
    min-width: 9rem;
    border-bottom: 1px solid #c4c4c4;
    position: absolute;
    top: 50%;
}

.continuousLine::before {
    right: 100%;
    margin-right: 0.65rem;
}

.continuousLine::after {
    left: 100%;
    margin-left: 0.65rem;
}

.text {
    position: relative;
    z-index: 1;
    color: #898989;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-weight: 500;
    background-color: #ffffff;
}
</style>
