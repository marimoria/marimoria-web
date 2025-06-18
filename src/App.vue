<template>
    <Transition name="fade-slide" mode="out-in">
        <router-view :viewport="viewport" :device="device"/>
    </Transition>
</template>

<script setup>
    import { onMounted, Transition } from 'vue';
    import { useViewport } from './composables/useViewport';
    import './styles/app.scss'; // global style to all components & pages

    const { viewport, device } = useViewport();

    onMounted(() => {
        document.addEventListener('contextmenu', e => {
            e.preventDefault();
        });
    });
</script>