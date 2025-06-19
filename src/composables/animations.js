import { gsap, Draggable } from "../js/vendor";

const draggingElements = new Set();

const mouse = {x: 0, y: 0};

let rotateDeg = 0

function transformParallax(parallaxEl) {
    parallaxEl.forEach((el) => {
        if (draggingElements.has(el)) {
            return;
        }

        let speedX = el.dataset.speedx;
        let speedY = el.dataset.speedy;

        gsap.to(el, {
            x: -mouse.x * speedX,
            y: mouse.y * speedY,
            rotationY: rotateDeg,
            transition: "0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)"
        });
    });
}

function getRotationDegrees(element) {
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.mozTransform;

    if (transform === "none") return 0;

    // Extract the matrix values
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
        const values = matrix[1].split(", ");
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        const radians = Math.atan2(b, a);
        const degrees = radians * (180 / Math.PI);
        return Math.round(degrees);
    }

    return 0; // Fallback
}


export function useParallax(parallaxEl) {
    gsap.set("main", {
        perspective: "2300px"
    });

    transformParallax(parallaxEl);

    if (window.matchMedia("(pointer: coarse)").matches) {
        window.addEventListener("touchmove", (e) => {
            mouse.x = e.clientX - (window.innerWidth / 2);
            mouse.y = e.clientY - (window.innerWidth / 2);
            rotateDeg = (mouse.x / (window.innerWidth / 2)) * 20;

            transformParallax(parallaxEl);
        });
    }

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX - (window.innerWidth / 2);
        mouse.y = e.clientY - (window.innerWidth / 2);
        rotateDeg = (mouse.x / (window.innerWidth / 2)) * 10;

        transformParallax(parallaxEl);
    });
}

export function floatHover(elements) {
    let floatTween = null

    elements.forEach((el) => {
        ["mouseenter", "touchstart"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                floatTween = gsap.to(el, {
                    y: "-25px",
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut",
                    duration: 1
                });
            });
        });

        ["mouseleave", "touchend", "touchcancel"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                if (floatTween) {
                    floatTween.kill();
                    floatTween = null;
                }

                gsap.to(el, {
                    y: 0,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });
        });
    });
}

export function rotateHover(elements) {
    let rotateTween = null

    elements.forEach((el) => {
        const ogRotate = getRotationDegrees(el);

        ["mouseenter", "touchstart"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                rotateTween = gsap.to(el, {
                    rotate: "-15deg",
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut",
                    duration: 1
                });
            });
        });

        ["mouseleave", "touchend", "touchcancel"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                if (rotateTween) {
                    rotateTween.kill();
                    rotateTween = null;
                }

                gsap.to(el, {
                    rotate: ogRotate,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });
        });
    });
}

export function sizeHover(elements) {
    let sizeTween = null

    elements.forEach((el) => {
        ["mouseenter", "touchstart"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                sizeTween = gsap.to(el, {
                    scale: 1.06,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut",
                    duration: 1
                });
            });
        });

        ["mouseleave", "touchend", "touchcancel"].forEach((eventType) => {
            el.addEventListener(eventType, () => {
                if (sizeTween) {
                    sizeTween.kill();
                    sizeTween = null;
                }

                gsap.to(el, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });
        });
    });
}

export function freeDrag(element, bounds) {
    Draggable.create(element, {
        bounds: bounds,
        inertia: true,
        cursor: "none"
    });
}