<template>
    <router-view v-slot="{ Component }">
        <Transition name="fade-slide" mode="out-in">
            <component :is="Component" :viewport="viewport" :device="device"/>
        </Transition>
    </router-view>

</template>

<script setup>
    import { onMounted, Transition } from "vue";
    import { useViewport } from "./composables/useViewport";
    import "./styles/app.scss"; // global style to all components & pages

    const { viewport, device } = useViewport();

    onMounted(() => {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    });
</script>
