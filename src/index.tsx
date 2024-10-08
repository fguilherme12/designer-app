import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.js';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
register();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
  