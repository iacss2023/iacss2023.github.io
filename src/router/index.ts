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
    path: '/sportsteam',
    name: 'sportsteam',
    component: () => import('../views/Venue/SportsTeamView.vue')
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
  },
  {
    path: '/cn',
    name: 'cn',
    component: () => import('../views/cnViews/HomeViewCn.vue')
  },
  {
    path: '/cn/venue',
    name: 'venuecn',
    component: () => import('../views/cnViews/VenueCn/VenueViewCn.vue')
  },
  {
    path: '/cn/venueHangzhou',
    name: 'venueHangzhouCn',
    component: () => import('../views/cnViews/VenueCn/VenueHangzhouViewCn.vue')
  },
  {
    path: '/cn/zju',
    name: 'zjucn',
    component: () => import('../views/cnViews/VenueCn/ZjuViewCn.vue')
  },
  {
    path: '/cn/coe',
    name: 'coecn',
    component: () => import('../views/cnViews/VenueCn/CoeViewCn.vue')
  },
  {
    path: '/cn/dss',
    name: 'dsscn',
    component: () => import('../views/cnViews/VenueCn/DssViewCn.vue')
  },
  {
    path: '/cn/sportsteam',
    name: 'sportsteamcn',
    component: () => import('../views/cnViews/VenueCn/SportsTeamViewCn.vue')
  },
  {
    path: '/cn/conferencehistory',
    name: 'conferencehistorycn',
    component: () => import('../views/cnViews/VenueCn/ConferenceHistoryViewCn.vue')
  },
  {
    path: '/cn/travelhangzhou',
    name: 'travelhangzhoucn',
    component: () => import('../views/cnViews/TravelCn/TravelHangzhouViewCn.vue')
  },
  {
    path: '/cn/accommodation',
    name: 'accommodationcn',
    component: () => import('../views/cnViews/TravelCn/AccommodationViewCn.vue')
  },
  {
    path: '/cn/datedeadline',
    name: 'datedeadlinecn',
    component: () =>
      import('../views/cnViews/SubmissionRegistrationCn/DateDeadlineViewCn.vue')
  },
  {
    path: '/cn/submission',
    name: 'submissioncn',
    component: () =>
      import('../views/cnViews/SubmissionRegistrationCn/SubmissionViewCn.vue')
  },
  {
    path: '/cn/registration',
    name: 'registrationcn',
    component: () =>
      import('../views/cnViews/SubmissionRegistrationCn/RegistrationViewCn.vue')
  },
  {
    path: '/cn/presentation',
    name: 'presentationcn',
    component: () =>
      import('../views/cnViews/SubmissionRegistrationCn/PresentationViewCn.vue')
  },
  {
    path: '/cn/award',
    name: 'awardcn',
    component: () => import('../views/cnViews/SubmissionRegistrationCn/AwardViewCn.vue')
  },
  {
    path: '/cn/program',
    name: 'programcn',
    component: () => import('../views/cnViews/ProgramCn/ProgramViewCn.vue')
  },
  {
    path: '/cn/conferencenews',
    name: 'conferencenewscn',
    component: () => import('../views/cnViews/ProgramCn/ConferenceNewsViewCn.vue')
  },
  {
    path: '/cn/conferencethemes',
    name: 'conferencethemescn',
    component: () => import('../views/cnViews/ProgramCn/ConferenceThemesViewCn.vue')
  },
  {
    path: '/cn/committees',
    name: 'committeescn',
    component: () => import('../views/cnViews/ProgramCn/CommittesViewCn.vue')
  },
  {
    path: '/cn/keynote',
    name: 'keynotecn',
    component: () => import('../views/cnViews/ProgramCn/KeynoteViewCn.vue')
  },
  {
    path: '/cn/sponsoring',
    name: 'sponsoringcn',
    component: () => import('../views/cnViews/SponsoringViewCn.vue')
  },
  {
    path: '/cn/contact',
    name: 'contactcn',
    component: () => import('../views/cnViews/ContactViewCn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
