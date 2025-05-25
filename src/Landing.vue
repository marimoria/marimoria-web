<template>
    <div class="background">
        <div class="trinket_top">
            <img class="capy_puppy" src="./assets/images/capy and puppy.svg" alt="">
            <img class="turtle_cookie" src="./assets/images/turtle cookie.svg" alt="">
        </div>

        <div class="main_content">
            <img class="id_card" src="./assets/images/ID card.svg" alt="">
            <img class="passport" src="./assets/images/pasport card.svg" alt="">
            <img src="./assets/images/logo.svg" alt="" class="logo">
            <img src="./assets/images/tom stamp.svg" alt="" class="stamp">
        </div>

        <div class="trinket_bottom">
            <img class="straw_cookies" src="./assets/images/straw cookies.svg" alt="">
            <img class="capy_croco" src="./assets/images/capy and croco.svg" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "./styles/landing.scss"; // local component specific style
</style>

<script setup>
    const props = defineProps({
        viewport: Object,
        device: Object
    });
</script>