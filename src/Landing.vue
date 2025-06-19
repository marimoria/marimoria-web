<template>
    <main class="background">
        <div class="trinket_top">
            <img data-speedx="0.02" data-speedy="0.03" class="size-hover parallax parallax--capy_puppy" src="./assets/images/capy and puppy.svg" alt="">
            <img data-speedx="0.01" data-speedy="0.03" class="float-hover parallax parallax--turtle_cookie" src="./assets/images/turtle cookie.svg" alt="">
        </div>

        <div class="main_content">
            <div class="content_wrapper">
                <img data-speedx="0.009" data-speedy="0.03" class="float-hover parallax parallax--id_card" src="./assets/images/ID card.svg" alt="">
                
                <router-link to="/portfolio" class="clickable">
                    <img data-speedx="0.01" data-speedy="0.03" class="rotate-hover parallax parallax--passport" src="./assets/images/pasport card.svg" alt="">
                </router-link>
                
                <img data-speedx="0.02" data-speedy="0.03" class="size-hover parallax parallax--logo" src="./assets/images/logo.svg" alt="">
                <img data-speedx="0.03" data-speedy="0.03" class="size-hover parallax parallax--stamp" src="./assets/images/tom stamp.svg" alt="">
                <img data-speedx="0.04" data-speedy="0.03" class="float-hover parallax parallax--flower" src="./assets/images/flower.svg" alt="">
                <img data-speedx="0.05" data-speedy="0.03" class="size-hover parallax parallax--toaster" src="./assets/images/toaster.svg" alt="">
            </div>
        </div>

        <div class="trinket_bottom">
            <img data-speedx="0.025" data-speedy="0.03" class="float-hover parallax parallax--straw_cookies" src="./assets/images/straw cookies.svg" alt="">
            <img data-speedx="0.02" data-speedy="0.03" class="size-hover parallax parallax--capy_croco" src="./assets/images/capy and croco.svg" alt="">
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use "./styles/landing.scss"; // local component specific style
</style>

<script setup>
    import { onMounted } from 'vue';
    import { useParallax, floatHover, rotateHover, sizeHover } from './composables/animations';

    const props = defineProps({
        viewport: Object,
        device: Object
    });

    onMounted(() => {
        const parallaxEl = document.querySelectorAll(".parallax");
        useParallax(parallaxEl);

        const floatHoverEl = document.querySelectorAll(".float-hover");
        floatHover(floatHoverEl);

        const rotateHoverEl = document.querySelectorAll(".rotate-hover");
        rotateHover(rotateHoverEl);

        const sizeHoverEl = document.querySelectorAll(".size-hover");
        sizeHover(sizeHoverEl);
    });
</script>