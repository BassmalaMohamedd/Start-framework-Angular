
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://BassmalaMohamedd.github.io/Start-framework-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Start-framework-Angular"
  },
  {
    "renderMode": 2,
    "route": "/Start-framework-Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Start-framework-Angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Start-framework-Angular/contact"
  },
  {
    "renderMode": 2,
    "route": "/Start-framework-Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6044, hash: '5dda88120c10f852e9022d775b4d654c49664f7e1882f85975b139d84720a2d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: '46755bbd929ad9f23c1f327f6a4b7628091269faec82dc46e76c99346822a11b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18509, hash: 'a68353629857bf75c9966ae287f64e0694dd9455cef0f04f82e4aebb8af3459d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25691, hash: '97adb7eb7af2d8944dafcad4a28778eb692e90d42a91039b2bdfd480b8dca379', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 22344, hash: '4279a82412ee900c92ba4590885f012c55fb4ebbfdc7482d767f6b11491724e1', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19303, hash: 'd57f59c9aaed5d37309e95f98942c81922961acc59259db9126777cd47131e8f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-BUNGVKM2.css': {size: 304573, hash: '37P9TEftF9o', text: () => import('./assets-chunks/styles-BUNGVKM2_css.mjs').then(m => m.default)}
  },
};
