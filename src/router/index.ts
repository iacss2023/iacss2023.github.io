import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home23 from '@/views/app23.vue'
import Home24 from '@/views/app24.vue'
import Home25 from '@/views/app25.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/2025'
  },
  {
    path: '/2025',
    name: 'app25',
    component: Home25,
    children: [
      {
        path: '/2025',
        name: 'home25',
        component: () => import('../views/2025/HomeView.vue')
      },
      {
        path: 'venue',
        name: 'venue25',
        component: () => import('../views/2025/Venue/VenueView.vue')
      },
      {
        path: 'tgu',
        name: 'tgu',
        component: () => import('../views/2025/Venue/TGUView.vue')
      },
      {
        path: 'coe',
        name: 'coe25',
        component: () => import('../views/2025/Venue/CoeView.vue')
      },
      {
        path: 'conferencehistory',
        name: 'conferencehistory25',
        component: () => import('../views/2025/Venue/ConferenceHistoryView.vue')
      },
      {
        path: 'traveltokyo',
        name: 'traveltokyo',
        component: () => import('../views/2025/Travel/TravelTokyoView.vue')
      },
      {
        path: 'accommodation',
        name: 'accommodation25',
        component: () => import('../views/2025/Travel/AccommodationView.vue')
      },
      {
        path: 'datedeadline',
        name: 'datedeadline25',
        component: () =>
          import('../views/2025/SubmissionRegistration/DateDeadlineView.vue')
      },
      {
        path: 'submission',
        name: 'submission25',
        component: () =>
          import('../views/2025/SubmissionRegistration/SubmissionView.vue')
      },
      {
        path: 'registration',
        name: 'registration25',
        component: () =>
          import('../views/2025/SubmissionRegistration/RegistrationView.vue')
      },
      {
        path: 'presentation',
        name: 'presentation25',
        component: () =>
          import('../views/2025/SubmissionRegistration/PresentationView.vue')
      },
      {
        path: 'award',
        name: 'award25',
        component: () => import('../views/2025/SubmissionRegistration/AwardView.vue')
      },
      {
        path: 'program',
        name: 'program25',
        component: () => import('../views/2025/Program/ProgramView.vue')
      },
      {
        path: 'conferencenews',
        name: 'conferencenews25',
        component: () => import('../views/2025/Program/ConferenceNewsView.vue')
      },
      {
        path: 'conferencethemes',
        name: 'conferencethemes25',
        component: () => import('../views/2025/Program/ConferenceThemesView.vue')
      },
      {
        path: 'committees',
        name: 'committees25',
        component: () => import('../views/2025/Program/CommittesView.vue')
      },
      {
        path: 'keynote',
        name: 'keynote25',
        component: () => import('../views/2025/Program/KeynoteView.vue')
      },
      {
        path: 'sponsoring',
        name: 'sponsoring25',
        component: () => import('../views/2025/SponsoringView.vue')
      },
      {
        path: 'contact',
        name: 'contact25',
        component: () => import('../views/2025/ContactView.vue')
      },
      {
        path: 'about',
        name: 'about25',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/2025/AboutView.vue')
      }
    ]
  },
  {
    path: '/2024',
    name: 'app24',
    component: Home24,
    children: [
      {
        path: '/2024',
        name: 'home24',
        component: () => import('../views/2024/HomeView.vue')
      },
      {
        path: 'venue',
        name: 'venue24',
        component: () => import('../views/2024/Related/VenueView.vue')
      },
      {
        path: 'creps',
        name: 'creps',
        component: () => import('../views/2024/Related/CrepsView.vue')
      },
      {
        path: 'strasbourg',
        name: 'strasbourg',
        component: () => import('../views/2024/Related/StrasbourgView.vue')
      },
      {
        path: 'conferencehistory',
        name: 'conferencehistory',
        component: () => import('../views/2024/Related/ConferenceHistoryView.vue')
      },
      {
        path: 'travelstrasbourg',
        name: 'travelstrasbourg',
        component: () => import('../views/2024/Travel/TravelStrasbourgView.vue')
      },
      {
        path: 'hotel',
        name: 'hotel',
        component: () => import('../views/2024/Travel/HotelView.vue')
      },
      // {
      //   path: 'registration',
      //   name: 'registration24',
      //   component: () =>
      //     import('../views/2024/Travel/RegistrationView.vue')
      // },
      {
        path: 'application',
        name: 'application24',
        component: () =>
          import('../views/2024/Travel/ApplicationView.vue')
      },
      {
        path: 'speaker',
        name: 'speaker24',
        component: () => import('../views/2024/Speaker/SpeakerView.vue')
      },
      {
        path: 'news',
        name: 'news24',
        component: () => import('../views/2024/Program/NewsView.vue')
      },
      {
        path: 'program',
        name: 'program24',
        component: () => import('../views/2024/Program/ProgramView.vue')
      },
      {
        path: 'committees',
        name: 'committees24',
        component: () => import('../views/2024/Program/CommittesView.vue')
      },
      {
        path: 'contact',
        name: 'contact24',
        component: () => import('../views/2024/ContactView.vue')
      }
    ]
  },
  {
    path: '/2023',
    name: 'app23',
    component: Home23,
    children: [
      {
        path: '/2023',
        name: 'home23',
        component: () => import('../views/2023/HomeView.vue')
      },
      {
        path: 'venue',
        name: 'venue23',
        component: () => import('../views/2023/Venue/VenueView.vue')
      },
      {
        path: 'venueHangzhou',
        name: 'venueHangzhou',
        component: () => import('../views/2023/Venue/VenueHangzhouView.vue')
      },
      {
        path: 'zju',
        name: 'zju',
        component: () => import('../views/2023/Venue/ZjuView.vue')
      },
      {
        path: 'coe',
        name: 'coe',
        component: () => import('../views/2023/Venue/CoeView.vue')
      },
      {
        path: 'dss',
        name: 'dss',
        component: () => import('../views/2023/Venue/DssView.vue')
      },
      {
        path: 'sportsteam',
        name: 'sportsteam',
        component: () => import('../views/2023/Venue/SportsTeamView.vue')
      },
      {
        path: 'conferencehistory',
        name: 'conferencehistory23',
        component: () => import('../views/2023/Venue/ConferenceHistoryView.vue')
      },
      {
        path: 'travelhangzhou',
        name: 'travelhangzhou',
        component: () => import('../views/2023/Travel/TravelHangzhouView.vue')
      },
      {
        path: 'accommodation',
        name: 'accommodation',
        component: () => import('../views/2023/Travel/AccommodationView.vue')
      },
      {
        path: 'datedeadline',
        name: 'datedeadline',
        component: () =>
          import('../views/2023/SubmissionRegistration/DateDeadlineView.vue')
      },
      {
        path: 'submission',
        name: 'submission23',
        component: () =>
          import('../views/2023/SubmissionRegistration/SubmissionView.vue')
      },
      {
        path: 'registration',
        name: 'registration23',
        component: () =>
          import('../views/2023/SubmissionRegistration/RegistrationView.vue')
      },
      {
        path: 'presentation',
        name: 'presentation',
        component: () =>
          import('../views/2023/SubmissionRegistration/PresentationView.vue')
      },
      {
        path: 'award',
        name: 'award',
        component: () => import('../views/2023/SubmissionRegistration/AwardView.vue')
      },
      {
        path: 'program',
        name: 'program23',
        component: () => import('../views/2023/Program/ProgramView.vue')
      },
      {
        path: 'conferencenews',
        name: 'conferencenews23',
        component: () => import('../views/2023/Program/ConferenceNewsView.vue')
      },
      {
        path: 'conferencethemes',
        name: 'conferencethemes',
        component: () => import('../views/2023/Program/ConferenceThemesView.vue')
      },
      {
        path: 'committees',
        name: 'committees',
        component: () => import('../views/2023/Program/CommittesView.vue')
      },
      {
        path: 'keynote',
        name: 'keynote',
        component: () => import('../views/2023/Program/KeynoteView.vue')
      },
      {
        path: 'sponsoring',
        name: 'sponsoring',
        component: () => import('../views/2023/SponsoringView.vue')
      },
      {
        path: 'contact',
        name: 'contact23',
        component: () => import('../views/2023/ContactView.vue')
      },
      {
        path: 'about',
        name: 'about23',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/2023/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
