import CMS from 'netlify-cms-app'
import pages from '@/cms/pages'
import posts from '@/cms/collections/posts'

window.CMS_MANUAL_INIT = true

CMS.init({
  config: {
    load_config_file: false,
    display_url: 'http://localhost:8000',
    backend: {
      // name: 'git-gateway',
      name: 'github',
      repo: 'rahughes1987/whitemouse',
      cms_label_prefix: 'netlify-cms/',
      branch: 'master',
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, posts],
  },
})
