<template>
    <div class="background">
        <div class="main_grid">
            <div class="main_grid--header_area">
                <p class="time">03:30</p>
                <p class="date">7th April ⋆. 𐙚 ˚</p>
            </div>
            <div class="main_grid--icons_area">
                <img src="./assets/images/digicam_widget.svg" alt="" class="digicam_widget">

                <div class="icon_group_A">
                    <div class="app_group">
                        <img src="./assets/images/dvd.svg" alt="" class="icon_group_A--dvd_widget">
                        <p class="icon_name">Academics</p>
                    </div>
                    <div class="icon_group_A--icon_grid">
                        <div class="app_group">
                            <img src="./assets/images/toaster.svg" alt="" class="icon_group_A--icon_grid--toaster">
                            <p class="icon_name">Marimoria Web</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/coffee.svg" alt="" class="icon_group_A--icon_grid--coffee">
                            <p class="icon_name">Marsudia Bin</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/clover_sticker.svg" alt="" class="icon_group_A--icon_grid--clover_sticker">
                            <p class="icon_name">Lemi Bot</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/straw cookies.svg" alt="" class="icon_group_A--icon_grid--straw_cookies">
                            <p class="icon_name">Tokinote</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "./styles/portfolio.scss"; // local component specific style
</style>

<script setup>
    import { onMounted } from 'vue';
    import { gsap, ScrollTrigger } from './js/vendor.js';

    const props = defineProps({
        viewport: Object,
        device: Object
    });

    onMounted(() => {
        
    });
</script>