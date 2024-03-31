import {
  CalendarClock,
  Home,
  SquareArrowLeft,
  SquareUserRound,
  Video,
} from 'lucide-vue-next';
import { Component } from 'vue';

type Menu = {
  label: string;
  route: string;
  icon: Component;
};

export const menuList: Array<Menu> = [
  {
    label: 'Home',
    route: '/',
    icon: Home,
  },
  {
    label: 'Upcoming',
    route: '/upcoming',
    icon: CalendarClock,
  },
  {
    label: 'Previous',
    route: '/previous',
    icon: SquareArrowLeft,
  },
  {
    label: 'Recordings',
    route: '/recordings',
    icon: Video,
  },
  {
    label: 'Personal Room',
    route: '/personal-room',
    icon: SquareUserRound,
  },
];
