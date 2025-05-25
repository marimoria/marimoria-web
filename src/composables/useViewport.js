import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useViewport() {
  const viewport = ref(getViewport());
  const device = ref(getDevice());

  function getViewport() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    return {
      w,
      h,
      isMin480: w >= 480,
      isMin580: w >= 580,
      isMin768: w >= 768,
      isMin850: w >= 850,
      isMin1000: w >= 1000,
      isMin1150: w >= 1150,
      isMax480: w <= 480,
      isMax580: w <= 580,
      isMax768: w <= 768,
      isMax850: w <= 850,
      isMax1000: w <= 1000,
      isMax1150: w <= 1150,
    };
  }

  function getDevice() {
    return {
      isMobile: window.matchMedia("(pointer: coarse)").matches,
      isPC: window.matchMedia("(pointer: fine)").matches,
      isLandscape: window.matchMedia("(orientation: landscape)").matches,
      isPortrait: window.matchMedia("(orientation: portrait)").matches,
    };
  }

  function update() {
    viewport.value = getViewport();
    device.value = getDevice();
  }

  onMounted(() => {
    window.addEventListener('resize', update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
  });

  return { viewport, device };
}
