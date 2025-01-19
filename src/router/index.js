import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Anasayfa',
      component: () => import('@/views/President/HomePresident.vue'),
      meta: {
        roles: ['admin'],
        pageTitle: 'Anasayfa',
        breadcrumb: [
          {
            text: 'Anasayfa',
            active: true,
          },
        ],
      },
    },
    {
      path: '/AnasayfaSks',
      name: 'AnasayfaSks',
      component: () => import('@/views/Sks/AdminHome.vue'),
      meta: {
        pageTitle: 'Anasayfa',
        breadcrumb: [
          {
            text: 'Anasayfa',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/deneme',
      name: 'deneme',
      component: () => import('@/views/deneme.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/etkinlik',
      name: 'etkinlik',
      component: () => import('@/views/President/EtkinlikView.vue'),
      meta: {
        pageTitle: 'etkinlik',
        breadcrumb: [
          {
            text: 'etkinlik',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/President/Contact.vue'),
      meta: {
        pageTitle: 'İletişim',
        breadcrumb: [
          {
            text: 'İletişim',
            active: true,
          },
        ],
      },
    },
    {
      path: '/GerekliBelgeler',
      name: 'GerekliBelgeler',
      component: () => import('@/views/President/GerekiBelgeler.vue'),
      meta: {
        pageTitle: 'Gerekli Belgeler',
        breadcrumb: [
          {
            text: 'Gerekli Belgeler',
            active: true,
          },
        ],
      },
    },
    {
      path: '/TalepEt',
      name: 'TalepEt',
      component: () => import('@/views/President/TalepEtme.vue'),
      meta: {
        pageTitle: 'Talep Et',
        breadcrumb: [
          {
            text: 'Talep Et',
            active: true,
          },
        ],
      },
    },
    {
      path: '/topluluk-olustur',
      name: 'topluluk-olustur',
      component: () => import('@/views/President/NasılOlusturulur.vue'),
      meta: {
        pageTitle: 'Topluluk Oluştur',
        breadcrumb: [
          {
            text: 'Topluluk Oluştur',
            active: true,
          },
        ],
      },
    },
    {
      path: '/EtkinlikFull',
      name: 'EtkinlikFull',
      component: () => import('@/views/President/EtkinlikFull.vue'),
      meta: {
        pageTitle: 'Etkinliklerimiz',
        breadcrumb: [
          {
            text: 'Etkinliklerimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Member',
      name: 'Member',
      component: () => import('@/views/President/Member.vue'),
      meta: {
        pageTitle: 'Üyelerimiz',
        breadcrumb: [
          {
            text: 'Üyelerimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Taleplerim',
      name: 'Taleplerim',
      component: () => import('@/views/President/NotificationFull.vue'),
      meta: {
        pageTitle: 'Taleplerim',
        breadcrumb: [
          {
            text: 'Taleplerim',
            active: true,
          },
        ],
      },
    },
    {
      path: '/ToplulukEkle',
      name: 'ToplulukEkle',
      component: () => import('@/views/Sks/ToplulukEkle.vue'),
      meta: {
        pageTitle: 'Topluluk Ekle',
        breadcrumb: [
          {
            text: 'Topluluk Ekle',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Talep',
      name: 'Talep',
      component: () => import('@/views/Sks/Talep.vue'),
      meta: {
        pageTitle: 'Talep',
        breadcrumb: [
          {
            text: 'Talep',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Talepler',
      name: 'Talepler',
      component: () => import('@/views/Sks/Talepler.vue'),
      meta: {
        pageTitle: 'Talepler',
        breadcrumb: [
          {
            text: 'Talepler',
            active: true,
          },
          
        ],
      },
    },
    {
      
        path: '/EtkinlikSks',
        name: 'EtkinlikSks',
        component: () => import('@/views/Sks/EtkinlikSksView.vue'),
        meta: {
          pageTitle: 'EtkinlikSks',
          breadcrumb: [
            {
              text: 'EtkinlikSks',
              active: true,
            }
          ]
        }
      },
    {
      path: '/Etkinlikler',
      name: 'Etkinlikler',
      component: () => import('@/views/Sks/Etkinlikler.vue'),
      meta: {
        pageTitle: 'Etkinlikler',
        breadcrumb: [
          {
            text: 'Etkinlikler',
            active: true,
          },
        ],
      },
    },
    {
      path: '/SayılıEtkinlik',
      name: 'SayılıEtkinlik',
      component: () => import('@/views/Sks/SayılıView.vue'),
      meta: {
        pageTitle: 'Etkinlikler',
        breadcrumb: [
          {
            text: 'Sayılı Etkinlik',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Topluluk',
      name: 'Topluluk',
      component: () => import('@/views/Sks/ToplulukView.vue'),
      meta: {
        pageTitle: 'Topluluk',
        breadcrumb: [
          {
            text: 'Topluluk',
            active: true,
          },
        ],
      },
    },
    {
      path: '/AnasayfaOgr',
      name: 'AnasayfaOgr',
      component: () => import('@/views/Student/Topluluklar.vue'),
      meta: {
        pageTitle: 'Anasayfa',
        breadcrumb: [
          {
            text: 'Anasayfa',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Toplulugum',
      name: 'Toplulugum',
      component: () => import('@/views/Student/StudentTopluluk.vue'),
      meta: {
        pageTitle: 'Topluluğum',
        breadcrumb: [
          {
            text: 'Topluluğum',
            active: true,
          },
        ],
      },
    }, {
      path: '/Topluluklarım',
      name: 'Toplulugum2',
      component: () => import('@/views/Student/StudentTopluluk2.vue'),
      meta: {
        pageTitle: 'Topluluklarım',
        breadcrumb: [
          {
            text: 'Topluluklarım',
            active: true,
          },
          
        ],
      },
    },
    {
      path: '/ToplulugaUyeol',
      name: 'ToplulugaUyeol',
      component: () => import('@/views/Student/StudentTopluluk3.vue'),
      meta: {
        pageTitle: 'Topluluk',
        breadcrumb: [
          {
            text: 'Üye ol',
            active: true,
          },
          
        ],
      },
    },
    {
      path: '/special-event',
      name: 'SayılıEtkinlik',
      component: () => import('@/views/Student/SayılıEtkinlik.vue'),
      meta: {
        pageTitle: 'Etkinlik',
        breadcrumb: [
          {
            text: 'Sayılı Etkinlik',
            active: true,
          },
          
        ],
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
