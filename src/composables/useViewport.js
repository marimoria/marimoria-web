import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useViewport() {
  const viewport = ref(getViewport());
  const device = ref(getDevice());

  function getViewport() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    return {
      w,
      h
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
