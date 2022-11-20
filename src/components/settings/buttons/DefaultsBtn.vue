<script setup lang="ts">
import { QBtn } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import { DB } from '@/services/LocalDatabase'
import { AppTable } from '@/constants/core/data-enums'
import defaultMeasurements from '@/constants/data/default-measurements'
import defaultExercises from '@/constants/data/default-exercises'
import defaultWorkouts from '@/constants/data/default-workouts'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default entires into appropriate tables in the database?',
    Icon.INFO,
    NotifyColor.INFO,
    async (): Promise<void> => {
      try {
        await loadDefaults()
      } catch (error) {
        log.error('DefaultsBtn:onDefaults', error)
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  await Promise.all([
    DB.bulkAdd(AppTable.MEASUREMENTS, defaultMeasurements),
    DB.bulkAdd(AppTable.EXERCISES, defaultExercises),
    DB.bulkAdd(AppTable.WORKOUTS, defaultWorkouts),
  ])
}
</script>

<template>
  <QBtn label="Load Defaults" color="primary" @click="onDefaults()" />
</template>
