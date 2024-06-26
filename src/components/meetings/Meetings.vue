<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Calendar, Plus, UserPlus, Video } from 'lucide-vue-next';
import { createMeeting as callCreateMeeting } from '@/lib/api';
import MeetingCard from './MeetingCard.vue';
import MeetingModal from './MeetingModal.vue';

const router = useRouter();

const meetingState = ref<
  'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
>();

const createMeeting = async () => {
  const newMeeting = await callCreateMeeting();
  if (!newMeeting) {
    alert('No se pudo crear la reunion');
    return;
  }
  console.log({ newMeeting });
  router.push({ name: 'meeting', params: { id: newMeeting.id } });
};
</script>

<template>
  <section class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
    <MeetingCard
      title="New Meeting"
      description="Start an instant meeting"
      bg-color="bg-orange-500"
      @on-click="meetingState = 'isInstantMeeting'"
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

    <MeetingModal
      :isOpen="meetingState === 'isInstantMeeting'"
      @on-close="meetingState = undefined"
      @on-click="createMeeting"
      title="Start an Instant Meeting"
      class="text-center"
      buttonText="Start Meeting"
    >
    </MeetingModal>
  </section>
</template>
