import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InertiaPlugin from 'gsap/InertiaPlugin';

gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin, ScrollTrigger);

export { gsap, Draggable, MotionPathPlugin, InertiaPlugin, ScrollTrigger };