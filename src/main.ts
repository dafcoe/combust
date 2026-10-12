import { setWorkerUrl } from 'maplibre-gl';
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import { createApp } from 'vue';
import './styles/tailwind.css';
import './styles/main.scss';
import App from './App.vue';

setWorkerUrl(maplibreWorkerUrl);
createApp(App).mount('#app');
