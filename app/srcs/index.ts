import * as PIXI from 'pixi.js';
import engine from './engine';
import * as comps from './component';
import '../public/style.css';

const app = engine(document.getElementById('root'));
Object.entries(comps).forEach(([key, value]) => app.setObj(value));