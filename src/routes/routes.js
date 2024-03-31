import AppLayout from '../layouts/App.layout.vue';
import HomeLayout from '../layouts/Home.layout.vue';
import IndexPage from '../pages/Index.page.vue';
import MeetingPage from '../pages/Meeting.page.vue';
import UpcomingPage from '../pages/Upcoming.page.vue';
import PreviousPage from '../pages/Previous.page.vue';
import RecordingsPage from '../pages/Recordings.page.vue';
import PersonalRoomPage from '../pages/PersonalRoom.page.vue';

export const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '/', name: 'index', component: IndexPage },
      { path: 'upcoming', name: 'upcoming', component: UpcomingPage },
      { path: 'previous', name: 'previous', component: PreviousPage },
      { path: 'recordings', name: 'recordings', component: RecordingsPage },
      {
        path: 'personal-room',
        name: 'personal-room',
        component: PersonalRoomPage,
      },
    ],
  },
  {
    path: '/meeting',
    component: AppLayout,
    children: [
      {
        path: '/meeting/:id',
        name: 'meeting',
        component: MeetingPage,
        props: true,
      },
    ],
  },
];
