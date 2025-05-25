import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CustomEase } from 'gsap/CustomEase';

export * from 'gsap';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(RoughEase);
gsap.registerPlugin(CustomEase);