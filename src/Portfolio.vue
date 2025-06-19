<template>
    <main class="background">
        <div id="academics_popup" v-if="academicsPopVisible" class="draggable academics_popup">
            <img src="./assets/images/academics_popup.svg" alt="" class="draggable academics_popup--popup_image">
            <img id="academics_popup_close_button" @touchend="academicsPopVisible = false" @click="academicsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable academics_popup--close_button">
        </div>

        <div id="experience_popup" v-if="experiencePopVisible" class="draggable experience_popup">
            <img src="./assets/images/experience_popup.svg" alt="" class="draggable experience_popup--popup_image">
            <img id="experience_popup_close_button" @touchend="experiencePopVisible = false" @click="experiencePopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable experience_popup--close_button">
        </div>

        <div id="skills_popup" v-if="skillsPopVisible" class="draggable skills_popup">
            <img src="./assets/images/skills_popup.svg" alt="" class="draggable skills_popup--popup_image">
            <img id="skills_popup_close_button" @touchend="skillsPopVisible = false" @click="skillsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable skills_popup--close_button">
        </div>

        <div id="achievements_popup" v-if="achievementsPopVisible" class="draggable achievements_popup">
            <img src="./assets/images/achievements_popup.svg" alt="" class="draggable achievements_popup--popup_image">
            <img id="achievements_popup_close_button" @touchend="achievementsPopVisible = false" @click="achievementsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable achievements_popup--close_button">
        </div>

        <div id="projects_popup" v-if="projectsPopVisible" class="draggable projects_popup">
            <img id="projects_popup_img_1" @touchend="setProjectImage($event)" @click="setProjectImage($event)" src="./assets/images/marimoria_portfolio_popup.svg" alt="" class="draggable projects_popup--popup_image">
            <img id="projects_popup_close_button" @touchend="projectsPopVisible = false" @click="projectsPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable projects_popup--close_button">
            <a @touchend="openProjectLink" :href="projectLinks[currentProjectIndex]" target="_blank" class="clickable projects_popup--link_button">
                <img class="projects_popup--link_button--button_image" id="projects_popup_open_link_button" src="./assets/images/open_link_button.svg">
            </a>
        </div>

        <div id="contacts_popup" v-if="contactPopVisible" class="draggable contacts_popup">
            <img src="./assets/images/contacts_popup.svg" alt="" class="draggable contacts_popup--popup_image">
            <div class="draggable contacts_popup--icon_wrapper">
                <a href="https://github.com/marimoria">
                    <img src="./assets/images/github.svg" alt="" class="clickable github">
                </a>
                <a href="mailto:mariaamandaipb262@gmail.com?Subject=Hello%20Maria!">
                    <img src="./assets/images/gmail.svg" alt="" class="clickable gmail">
                </a>
                <a href="https://www.instagram.com/marimoriaa?igsh=MTY2ZndsbWQyazI1cg==">
                    <img src="./assets/images/instagram.svg" alt="" class="clickable instagram">
                </a>
            </div>
            <img id="contacts_popup_close_button" @touchend="contactPopVisible = false" @click="contactPopVisible = false" src="./assets/images/close_popup_button.svg" alt="" class="clickable contacts_popup--close_button">
        </div>

        <div v-if="(viewport.w < 1024) || ((viewport.w == 1024) && (viewport.h) > 800)" class="main_grid">
            <div class="main_grid--header_area">
                <p class="time">03:30</p>
                <p class="reminder">Try dragging popups!</p>
            </div>

            <div class="main_grid--icons_area">
                <div class="icon_group_A">
                    <div @touchend="academicsPopVisible = true" @click="academicsPopVisible = true" data-speedx="0.02" data-speedy="0.03" class="parallax app_group">
                        <img src="./assets/images/dvd.svg" alt="" class="float_hover icon_group_A--dvd_widget">
                        <p class="icon_name">Academics</p>
                    </div>
                    <div class="icon_group_A--icon_grid">
                        <div @touchend="experiencePopVisible = true" @click="experiencePopVisible = true" data-speedx="0.03" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/toaster.svg" alt="" class="rotate_hover icon_group_A--icon_grid--toaster">
                            <p class="icon_name">Experience</p>
                        </div>
                        <div class="app_group"></div>
                        <div class="app_group"></div>
                        <div @touchend="projectsPopVisible = true" @click="projectsPopVisible = true" data-speedx="0.01" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/straw cookies.svg" alt="" class="size_hover icon_group_A--icon_grid--straw_cookies">
                            <p class="icon_name">Projects</p>
                        </div>
                    </div>
                </div>

                <div class="icon_group_B">
                    <img data-speedx="0.04" data-speedy="0.03" src="./assets/images/digicam_widget.svg" alt="" class="float_hover parallax icon_group_B--digicam_widget">
                    <div @touchend="achievementsPopVisible = true" @click="achievementsPopVisible = true" data-speedx="0.02" data-speedy="0.03" class="parallax app_group">
                        <img src="./assets/images/coffee.svg" alt="" class="rotate_hover icon_group_B--coffee">
                        <p class="icon_name">Achievements</p>
                    </div>
                </div>

                <div class="icon_group_C">
                    <div class="icon_group_C--icon_grid">
                        <div class="app_group"></div>
                        <div @touchend="skillsPopVisible = true" @click="skillsPopVisible = true" data-speedx="0.01" data-speedy="0.03" class="parallax app_group">
                            <img src="./assets/images/clover_sticker.svg" alt="" class="size_hover icon_group_C--icon_grid--clover_sticker">
                            <p class="icon_name">Skills</p>
                        </div>
                        <div @touchend = "contactPopVisible = true" @click="contactPopVisible = true" data-speedx="0.03" data-speedy="0.03" class="parallax app_group">
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
                <div @click="projectsPopVisible = true" data-speedx="0.03" data-speedy="0.03" class="clickable size_hover parallax app_group app_group--projects">
                    <img src="./assets/images/straw cookies.svg" alt="" class="app_group--icons_straw_cookies">
                    <p class="icon_name">Projects</p>
                </div>
                <div @click="skillsPopVisible = true" data-speedx="0.04" data-speedy="0.03" class="clickable float_hover parallax app_group app_group--skills">
                    <img src="./assets/images/clover_sticker.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Skills</p>
                </div>
                <div @click="contactPopVisible = true" data-speedx="0.04" data-speedy="0.03" class="clickable rotate_hover parallax app_group app_group--contact">
                    <img src="./assets/images/turtle cookie.svg" alt="" class="app_group--icons">
                    <p class="icon_name">Contact</p>
                </div>
                <div @click="achievementsPopVisible = true" data-speedx="0.01" data-speedy="0.03" class="clickable size_hover parallax app_group app_group--achievements">
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

    // preloading images
    import marsudia from './assets/images/marsudia_portfolio_popup.svg';
    import lemibot from './assets/images/lemibot_portfolio_popup.svg';
    import tokinote from './assets/images/tokinote_portfolio_popup.svg';
    import marimoria from './assets/images/marimoria_portfolio_popup.svg';

    import academicPopup from './assets/images/academics_popup.svg';
    import experiencePopup from './assets/images/experience_popup.svg';
    import skillsPopup from './assets/images/skills_popup.svg';
    import contactPopup from './assets/images/contacts_popup.svg';
    import achievementsPopup from './assets/images/achievements_popup.svg';

    const projectPopupimages = [marimoria, marsudia, lemibot, tokinote];
    const projectLinks = [
        "https://github.com/marimoria/marimoria-web",
        "https://github.com/marimoria/Marsudia",
        "https://github.com/marimoria/lemi-bot",
        "https://github.com/marimoria/Tokinote"
    ];
    const popupImages = [academicPopup, experiencePopup, skillsPopup, contactPopup, achievementsPopup];

    function openProjectLink() {
        window.open(projectLinks[currentProjectIndex.value], "_blank");
    }

    popupImages.forEach((popupImg) => {
        const image = new Image();
        image.src = popupImg;
    });

    projectPopupimages.forEach((projectPopup) => {
        const image = new Image();
        image.src = projectPopup;
    });

    const props = defineProps({
        viewport: Object,
        device: Object
    });

    const academicsPopVisible = ref(false);
    const experiencePopVisible = ref(false);
    const skillsPopVisible = ref(false);
    const achievementsPopVisible = ref(false);
    const contactPopVisible = ref(false);
    const projectsPopVisible = ref(false);
    const currentProjectIndex = ref(0);

    function setProjectImage(event) {
        const element = event.currentTarget;
        let currentIndex = parseInt(element.dataset.index || '0');
        const nextIndex = (currentIndex + 1) % projectPopupimages.length;

        element.setAttribute('src', projectPopupimages[nextIndex]);
        element.dataset.index = nextIndex;
        currentProjectIndex.value = nextIndex;
    }

    onMounted(() => {
        const parallaxEl = document.querySelectorAll(".parallax");
        useParallax(parallaxEl);

        const floatHoverEl = document.querySelectorAll(".float_hover");
        floatHover(floatHoverEl);

        const rotateHoverEl = document.querySelectorAll(".rotate_hover");
        rotateHover(rotateHoverEl);

        const sizeHoverEl = document.querySelectorAll(".size_hover");
        sizeHover(sizeHoverEl);

        watch(
            [academicsPopVisible, experiencePopVisible, skillsPopVisible, achievementsPopVisible, contactPopVisible, projectsPopVisible],
            async ([newAcaVal, newExpVal, newSkillVal, newAchVal, newConVal, newProVal],[oldAcaVal, oldExpVal, oldSkillVal, oldAchVal, oldConVal, oldProVal]) => {
                if (newAcaVal || newExpVal || newSkillVal || newAchVal || newConVal || newProVal) {
                    await nextTick();
                }

                if (newAcaVal != oldAcaVal && newAcaVal) {
                    freeDrag("#academics_popup", ".background");
                }

                if (newExpVal != oldExpVal && newExpVal) {
                    freeDrag("#experience_popup", ".background");
                }

                if (newSkillVal != oldSkillVal && newSkillVal) {
                    freeDrag("#skills_popup", ".background");

                }

                if (newAchVal != oldAchVal && newAchVal) {
                    freeDrag("#achievements_popup", ".background");
                }

                if (newConVal != oldConVal && newConVal) {
                    freeDrag("#contacts_popup", ".background");
                }

                if (newProVal != oldProVal && newProVal) {
                    freeDrag("#projects_popup", ".background");
                }
            }
        );
    });
</script>