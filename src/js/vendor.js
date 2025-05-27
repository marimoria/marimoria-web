import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Draggable } from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';

gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin);

export { gsap, Draggable, MotionPathPlugin, InertiaPlugin };