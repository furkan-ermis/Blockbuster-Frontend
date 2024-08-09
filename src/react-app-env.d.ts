// react-app-env.d.ts
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.json';
declare module '*.css';
declare module '*.ttf';
declare module '*.woff';

// jQuery için global tanımlamalar
import * as jquery from 'jquery';


declare global {
  interface Window {
    $: typeof jquery;
    jQuery: typeof jquery;
  }
}