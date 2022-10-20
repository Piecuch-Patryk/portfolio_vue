<template>
    <div :style="{ background: color }">
        <p>{{ text.p1 }}</p>
        <p>{{ text.p2 }}</p>
    </div>
</template>

<script>
export default {
    name: 'ModalFormInfo',
    props: {
        text: Object,
        color: String,
    }
};
</script>

<style lang="scss" scoped>
div {
    position: fixed;
    top: 25%;
    bottom: 0;
    left: 10%;
    right: 0;
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: center;
    color: #ddd;
    border-radius: .5rem;
    opacity: .8;

    p {
        margin-bottom: 1rem;
    }
}
</style>
