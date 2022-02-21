import * as PIXI from 'pixi.js';
import engine from './engine';
import comps from './component';
import '../public/style.css';

const app = engine(document.getElementById('root'), comps);
