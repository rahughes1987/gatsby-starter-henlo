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
      api_root: 'https://api.github.com',
      auth_endpoint: 'auth',
      cms_label_prefix: 'netlify-cms/',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: '[skip ci] Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
      },
      branch: 'master',
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, posts],
  },
})
