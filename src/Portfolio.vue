<template>
    <div class="background">
        <div class="main_grid">
            <div class="main_grid--header_area">
                <p class="time">03:30</p>
                <p class="date">7th April ⋆. 𐙚 ˚</p>
            </div>

            <div class="main_grid--icons_area">
                <div class="sound_area">
                    <img src="./assets/images/sound_widget.svg" alt="" class="sound_area--sound_widget">
                </div>

                <div class="icon_group_A">
                    <div class="app_group">
                        <img src="./assets/images/dvd.svg" alt="" class="icon_group_A--dvd_widget">
                        <p class="icon_name">Academics</p>
                    </div>
                    <div class="icon_group_A--icon_grid">
                        <div class="app_group">
                            <img src="./assets/images/toaster.svg" alt="" class="icon_group_A--icon_grid--toaster">
                            <p class="icon_name">Experience</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/coffee.svg" alt="" class="icon_group_A--icon_grid--coffee">
                            <p class="icon_name">Projects</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/clover_sticker.svg" alt="" class="icon_group_A--icon_grid--clover_sticker">
                            <p class="icon_name">Skills</p>
                        </div>
                        <div class="app_group">
                            <img src="./assets/images/straw cookies.svg" alt="" class="icon_group_A--icon_grid--straw_cookies">
                            <p class="icon_name">Contact</p>
                        </div>
                    </div>
                </div>

                <div class="icon_group_B">
                    <img src="./assets/images/digicam_widget.svg" alt="" class="icon_group_B--digicam_widget">
                    <div class="app_group">
                        <img src="./assets/images/lillypad.svg" alt="" class="icon_group_B--lillypad_widget">
                        <p class="icon_name">Achievements</p>
                    </div>
                </div>

                <img v-if="viewport.h >= 800" src="./assets/images/calico_critters.svg" alt="" class="calico_critters">
            </div>

            <div class="main_grid--bottom_area">
                <div class="bar_area">
                    <img src="./assets/images/turtle cookie.svg" alt="" class="bar_area--turtle_cookie">
                    <router-link to="/" class="bar_area--logo_link">
                        <img src="./assets/images/logo.svg" alt="" class="bar_area--logo">
                    </router-link>
                    <img src="./assets/images/capy and puppy.svg" alt="" class="bar_area--capy_and_puppy">
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