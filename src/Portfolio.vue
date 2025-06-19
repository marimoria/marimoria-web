<template>
    <main class="background">
        <div id="academics_popup" v-if="academicsPopVisible" class="draggable academics_popup">
            <img src="./assets/images/academics_popup.svg" alt="" class="draggable academics_popup--popup_image">
            <img id="academics_popup_close_button" @click="academicsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable academics_popup--close_button">
        </div>

        <div id="experience_popup" v-if="experiencePopVisible" class="draggable experience_popup">
            <img src="./assets/images/experience_popup.svg" alt="" class="draggable experience_popup--popup_image">
            <img id="experience_popup_close_button" @click="experiencePopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable experience_popup--close_button">
        </div>

        <div id="skills_popup" v-if="skillsPopVisible" class="draggable skills_popup">
            <img src="./assets/images/skills_popup.svg" alt="" class="draggable skills_popup--popup_image">
            <img id="skills_popup_close_button"  @click="skillsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable skills_popup--close_button">
        </div>

        <div v-if="(viewport.w < 1024) || ((viewport.w == 1024) && (viewport.h) > 800)" class="main_grid">
            <div class="main_grid--header_area">
                <p class="time">03:30</p>
                <p class="reminder">Try dragging popups!</p>
            </div>

            <div class="main_grid--icons_area">
                <div class="icon_group_A">
                    <div @click="academicsPopVisible = true" data-speedx="0.02" data-speedy="0.03" class="parallax app_group">
                        <img src="./assets/images/dvd.svg" alt="" class="float_hover icon_group_A--dvd_widget">
                        <p class="icon_name">Academics</p>
                    </div>
                    <div class="icon_group_A--icon_grid">
                        <div @click="experiencePopVisible = true" data-speedx="0.03" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/toaster.svg" alt="" class="rotate_hover icon_group_A--icon_grid--toaster">
                            <p class="icon_name">Experience</p>
                        </div>
                        <div class="app_group"></div>
                        <div class="app_group"></div>
                        <div data-speedx="0.01" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/straw cookies.svg" alt="" class="size_hover icon_group_A--icon_grid--straw_cookies">
                            <p class="icon_name">Projects</p>
                        </div>
                    </div>
                </div>

                <div class="icon_group_B">
                    <img data-speedx="0.04" data-speedy="0.03" src="./assets/images/digicam_widget.svg" alt="" class="float_hover parallax icon_group_B--digicam_widget">
                    <div data-speedx="0.02" data-speedy="0.03" class="parallax app_group">
                        <img src="./assets/images/coffee.svg" alt="" class="rotate_hover icon_group_B--coffee">
                        <p class="icon_name">Achievements</p>
                    </div>
                </div>

                <div class="icon_group_C">
                    <div class="icon_group_C--icon_grid">
                        <div class="app_group"></div>
                        <div @click="skillsPopVisible = true" data-speedx="0.01" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/clover_sticker.svg" alt="" class="size_hover icon_group_C--icon_grid--clover_sticker">
                            <p class="icon_name">Skills</p>
                        </div>
                        <div data-speedx="0.03" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/turtle cookie.svg" alt="" class="float_hover icon_group_C--icon_grid--turtle_cookie">
                            <p class="icon_name">Contact</p>
                        </div>
                        <div class="app_group"></div>
                    </div>
                    <img data-speedx="0.04" data-speedy="0.03" src="./assets/images/ball_widget.svg" alt="" class="rotate_hover parallax icon_group_C--ball_widget">
                </div>
            </div>
        </div>

        <div v-if="(viewport.w > 1024) || ((viewport.w == 1024) && (viewport.h) <= 800)" class="desktop_main_grid">
            <p class="time">03:30</p>
            <p class="reminder">Try dragging popups!</p>
            
            <div class="desktop_main_grid--accessory_area">
                <img data-speedx="0.02" data-speedy="0.03" src="./assets/images/digicam_widget.svg" alt="" class="rotate_hover parallax accessory_area--digicam_widget">
                <img data-speedx="0.01" data-speedy="0.03" src="./assets/images/book_frontcover.svg" alt="" class="rotate_hover parallax accessory_area--book_widget">
                <img data-speedx="0.03" data-speedy="0.03" src="./assets/images/dvd.svg" alt="" class="size_hover parallax accessory_area--dvd_widget">
                <img data-speedx="0.04" data-speedy="0.03" src="./assets/images/ball_widget.svg" alt="" class="float_hover parallax accessory_area--ball_widget">
                <img data-speedx="0.01" data-speedy="0.03" src="./assets/images/ID card.svg" alt="" class="float_hover parallax accessory_area--id_card">
            </div>
            <div class="desktop_main_grid--icons_area">
                <div @click="academicsPopVisible = true" data-speedx="0.02" data-speedy="0.03" class="clickable float_hover parallax app_group app_group--academics">
                    <img src="./assets/images/toaster.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Academics</p>
                </div>
                <div @click="experiencePopVisible = true" data-speedx="0.01" data-speedy="0.03" class="clickable rotate_hover parallax app_group app_group--experience">
                    <img src="./assets/images/coffee.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Experience</p>
                </div>
                <div data-speedx="0.03" data-speedy="0.03" class="clickable size_hover parallax app_group app_group--projects">
                    <img src="./assets/images/straw cookies.svg" alt="" class="app_group--icons_straw_cookies">
                    <p class="icon_name">Projects</p>
                </div>
                <div @click="skillsPopVisible = true" data-speedx="0.04" data-speedy="0.03" class="clickable float_hover parallax app_group app_group--skills">
                    <img src="./assets/images/clover_sticker.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Skills</p>
                </div>
                <div data-speedx="0.04" data-speedy="0.03" class="clickable rotate_hover parallax app_group app_group--contact">
                    <img src="./assets/images/turtle cookie.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Contact</p>
                </div>
                <div data-speedx="0.01" data-speedy="0.03" class="clickable size_hover parallax app_group app_group--achievements">
                    <img src="./assets/images/capy and puppy.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Achievements</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use "./styles/portfolio.scss"; // local component specific style
</style>

<script setup>
    import { onMounted, ref, watch, nextTick } from 'vue';
    import { useParallax, floatHover, rotateHover, sizeHover, freeDrag } from './composables/animations';

    const props = defineProps({
        viewport: Object,
        device: Object
    });

    const academicsPopVisible = ref(false);
    const experiencePopVisible = ref(false);
    const skillsPopVisible = ref(false);

    onMounted(() => {
        const parallaxEl = document.querySelectorAll(".parallax");
        useParallax(parallaxEl);

        const floatHoverEl = document.querySelectorAll(".float_hover");
        floatHover(floatHoverEl);

        const rotateHoverEl = document.querySelectorAll(".rotate_hover");
        rotateHover(rotateHoverEl);

        const sizeHoverEl = document.querySelectorAll(".size_hover");
        sizeHover(sizeHoverEl);

        watch(academicsPopVisible, async (visible) => {
            if (visible) {
                await nextTick();

                document.querySelector('#academics_popup_close_button').addEventListener('touchend', () => {
                    academicsPopVisible.value = false;
                });

                freeDrag("#academics_popup", ".background");
            }
        });

        watch(experiencePopVisible, async (visible) => {
            if (visible) {
                await nextTick();

                document.querySelector('#experience_popup_close_button').addEventListener('touchend', () => {
                    experiencePopVisible.value = false;
                });

                freeDrag("#experience_popup", ".background");
            }
        });

        watch(skillsPopVisible, async (visible) => {
            if (visible) {
                await nextTick();

                document.querySelector('#skills_popup_close_button').addEventListener('touchend', () => {
                    skillsPopVisible.value = false;
                });

                freeDrag("#skills_popup", ".background");
            }
        });
    });
</script>