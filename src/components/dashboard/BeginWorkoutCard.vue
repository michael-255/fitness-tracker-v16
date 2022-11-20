<script setup lang="ts">
import type { DatabaseObject } from '@/constants/types-interfaces'
import { QBadge, QCard, QCardSection, QBtn, QIcon } from 'quasar'
import { Icon } from '@/constants/ui/icon-enums'
import { getDurationFromMilliseconds, isoToDisplayDate } from '@/utils/common'
import { useTimeAgo } from '@vueuse/core'
import { onUpdated, ref } from 'vue'
import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { DB } from '@/services/LocalDatabase'
import useOperationDialogStore from '@/stores/operation-dialog'
import { RouteName } from '@/constants/ui/routing-enums'

// Props & Emits
const props = defineProps<{
  beginWorkoutCard: DatabaseObject
}>()

const { log } = useLogger()
const operationDialogStore = useOperationDialogStore()

// These ensure a live update of the time since the last record
const previousCreatedDateRef = ref(new Date(props.beginWorkoutCard?.previousCreatedDate || '')) // Ref of the date
const timeAgo = useTimeAgo(previousCreatedDateRef) // Tracks the ref
const duration = calculateDuration()

onUpdated(() => {
  previousCreatedDateRef.value = new Date(props.beginWorkoutCard?.previousCreatedDate || '')
})

async function onReportDialog(): Promise<void> {
  try {
    const selectedItem = await DB.getFirstByField(
      AppTable.WORKOUTS,
      Field.ID,
      props.beginWorkoutCard?.id
    )
    operationDialogStore.openDialog(AppTable.WORKOUTS, Operation.REPORT, selectedItem)
  } catch (error) {
    log.error('BeginWorkoutCard:onReportDialog', error)
  }
}

function calculateDuration(): string {
  const started = new Date(props.beginWorkoutCard?.previousCreatedDate || '').getTime()
  const finished = new Date(props.beginWorkoutCard?.previousFinishedDate || '').getTime()

  const milliseconds = finished - started
  const duration = getDurationFromMilliseconds(milliseconds)

  return duration
}
</script>

<template>
  <QCard>
    <QCardSection class="q-pt-sm">
      <div class="text-h6 q-mb-sm">{{ beginWorkoutCard?.name }}</div>

      <QBtn
        round
        flat
        :icon="Icon.REPORT"
        class="absolute-top-right q-ma-sm"
        @click="onReportDialog()"
      />

      <div>
        <QBadge class="q-py-xs q-mb-xs" rounded color="grey-9" :label="timeAgo || 'never'" />
      </div>

      <div>
        <QIcon :name="Icon.CALENDAR_CHECK" />
        <span class="text-caption q-ml-xs">
          {{ isoToDisplayDate(beginWorkoutCard?.previousCreatedDate) || '-' }}
        </span>
      </div>

      <div>
        <QIcon :name="Icon.TIMER" />
        <span class="text-caption q-ml-xs"> {{ duration || '-' }} </span>
      </div>

      <QBtn
        color="primary"
        class="full-width q-mt-md"
        label="Begin"
        :to="{ name: RouteName.ACTIVE }"
      />
    </QCardSection>
  </QCard>
</template>
