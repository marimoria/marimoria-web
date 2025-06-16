<template>
    <div class="book-container" id="book-section"> 
        <div class="note-top">Made by @marimoria on github</div>

        <div class="note-left" id="note-left">Scroll to flip! ✨</div>
        
        <div class="book-base" id="book-base"></div>
        
        <div class="book"> 
            <div class="page"> 
            <div class="cover side front">Cover</div> 
            <div class="side back">Page 1</div>
            </div>
            <div class="page"> 
            <div class="side front">Page 2</div> 
            <div class="side back">Page 3</div>
            </div>
            <div class="page"> 
            <div class="side front">Page 4</div> 
            <div class="side back">Page 5</div> 
            </div> 
            <div class="page"> 
            <div class="side front">Page 6</div> 
            <div class="cover side back">Back Cover</div> 
            </div>
        </div> 
    </div> 
</template>

<style scoped lang="scss">
    @use "./styles/portfolio.scss"; // local component specific style
</style>

<script setup>
    const props = defineProps({
        viewport: Object,
        device: Object
    });
</script>