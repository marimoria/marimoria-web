<template>
    <router-view :viewport="viewport" :device="device"/>
</template>

<script setup>
    import { useViewport } from './composables/useViewport';
    import './styles/app.scss'; // global style to all components & pages

    const { viewport, device } = useViewport();
</script>