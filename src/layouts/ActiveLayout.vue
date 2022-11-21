<script setup lang="ts">
import {
  QLayout,
  QPageContainer,
  QHeader,
  QToolbar,
  QToolbarTitle,
  QFooter,
  QSpace,
  QIcon,
} from 'quasar'
import { type Ref, ref, watch, onMounted } from 'vue'
import { RouteName } from '@/constants/ui/routing-enums'
import { Icon } from '@/constants/ui/icon-enums'
import { getDurationFromMilliseconds } from '@/utils/common'
import { useInterval } from '@vueuse/core'
import { DB } from '@/services/LocalDatabase'
import { AppTable, Field } from '@/constants/core/data-enums'
import type { WorkoutRecord } from '@/models/WorkoutRecord'
import type { Workout } from '@/models/Workout'

const counter = useInterval(1000)
const recordedTime = new Date().getTime()
const duration: Ref<string> = ref('-')
const workoutName: Ref<string> = ref('')

onMounted(async () => {
  const activeWorkoutRecord = (await DB.getAll(AppTable.ACTIVE_WORKOUTS))[0] as WorkoutRecord

  const workout = (await DB.getFirstByField(
    AppTable.WORKOUTS,
    Field.ID,
    activeWorkoutRecord?.parentId
  )) as Workout

  workoutName.value = workout?.name
})

watch(counter, () => {
  const now = new Date().getTime()
  duration.value = getDurationFromMilliseconds(now - recordedTime)
})
</script>

<template>
  <QLayout elevated view="hHh LpR lff">
    <QHeader elevated>
      <QToolbar>
        <QToolbarTitle>{{ workoutName }}</QToolbarTitle>
        <QBtn flat dense :to="{ name: RouteName.DASHBOARD }" :icon="Icon.RETURN_TO_DASHBOARD" />
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <router-view />
    </QPageContainer>

    <QFooter class="bg-dark">
      <QToolbar>
        <QSpace />
        <QIcon :name="Icon.TIMER" size="sm" class="q-mr-sm" />
        <div class="text-h6">{{ duration }}</div>
        <QSpace />
      </QToolbar>
    </QFooter>
  </QLayout>
</template>
