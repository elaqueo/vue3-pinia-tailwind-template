<template>
  <section class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
    <MeetingCard
      title="New Meeting"
      description="Start an instant meeting"
      bg-color="bg-orange-500"
      @on-click="meetingState = 'isJoiningMeeting'"
    >
      <template #icon>
        <Plus :size="27" />
      </template>
    </MeetingCard>

    <MeetingCard
      title="Schedule Meeting"
      description="Plan your meeting"
      bg-color="bg-blue-500"
      @on-click="meetingState = 'isScheduleMeeting'"
    >
      <template #icon>
        <Calendar :size="27" />
      </template>
    </MeetingCard>

    <MeetingCard
      title="View Recordings"
      description="Check out your recordings"
      bg-color="bg-purple-600"
      @on-click="router.push('/recordings')"
    >
      <template #icon>
        <Video :size="27" />
      </template>
    </MeetingCard>

    <MeetingCard
      title="Join Meeting"
      description="Via invitation link"
      bg-color="bg-amber-600"
      @on-click="meetingState = 'isJoiningMeeting'"
    >
      <template #icon>
        <UserPlus :size="27" />
      </template>
    </MeetingCard>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Calendar, Plus, UserPlus, Video } from 'lucide-vue-next';
import MeetingCard from './MeetingCard.vue';
import { ref } from 'vue';

const router = useRouter();

const meetingState = ref<
  'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
>();
</script>

<style scoped></style>
