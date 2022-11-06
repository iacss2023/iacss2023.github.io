import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/venue',
    name: 'venue',
    component: () => import('../views/Venue/VenueView.vue')
  },
  {
    path: '/venueHangzhou',
    name: 'venueHangzhou',
    component: () => import('../views/Venue/VenueHangzhouView.vue')
  },
  {
    path: '/zju',
    name: 'zju',
    component: () => import('../views/Venue/ZjuView.vue')
  },
  {
    path: '/coe',
    name: 'coe',
    component: () => import('../views/Venue/CoeView.vue')
  },
  {
    path: '/dss',
    name: 'dss',
    component: () => import('../views/Venue/DssView.vue')
  },
  {
    path: '/conferencehistory',
    name: 'conferencehistory',
    component: () => import('../views/Venue/ConferenceHistoryView.vue')
  },
  {
    path: '/travelhangzhou',
    name: 'travelhangzhou',
    component: () => import('../views/Travel/TravelHangzhouView.vue')
  },
  {
    path: '/accommodation',
    name: 'accommodation',
    component: () => import('../views/Travel/AccommodationView.vue')
  },
  {
    path: '/datedeadline',
    name: 'datedeadline',
    component: () =>
      import('../views/SubmissionRegistration/DateDeadlineView.vue')
  },
  {
    path: '/submission',
    name: 'submission',
    component: () =>
      import('../views/SubmissionRegistration/SubmissionView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () =>
      import('../views/SubmissionRegistration/RegistrationView.vue')
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: () =>
      import('../views/SubmissionRegistration/PresentationView.vue')
  },
  {
    path: '/award',
    name: 'award',
    component: () => import('../views/SubmissionRegistration/AwardView.vue')
  },
  {
    path: '/program',
    name: 'program',
    component: () => import('../views/Program/ProgramView.vue')
  },
  {
    path: '/conferencenews',
    name: 'conferencenews',
    component: () => import('../views/Program/ConferenceNewsView.vue')
  },
  {
    path: '/conferencethemes',
    name: 'conferencethemes',
    component: () => import('../views/Program/ConferenceThemesView.vue')
  },
  {
    path: '/committees',
    name: 'committees',
    component: () => import('../views/Program/CommittesView.vue')
  },
  {
    path: '/keynote',
    name: 'keynote',
    component: () => import('../views/Program/KeynoteView.vue')
  },
  {
    path: '/sponsoring',
    name: 'sponsoring',
    component: () => import('../views/SponsoringView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
