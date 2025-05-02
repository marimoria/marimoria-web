<template>
    <router-view :viewport="viewport" :device="device"/>
</template>

<script setup>
    import { useViewport } from './composables/useViewport';
    const { viewport, device } = useViewport();
</script>