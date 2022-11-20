<script setup lang="ts">
import { Icon } from '@/constants/ui/icon-enums'
import { QPage } from 'quasar'

// Header Title = Name of the workout
// Exit workout button to the right
// Finish workout button at the bottom

function finishWorkout(): void {}
</script>

<template>
  <QPage padding>
    <div class="row justify-center">
      <div class="col-12">
        <QCard>
          <QCardSection class="bg-dark text-white q-py-sm text-h5">
            <QIcon class="q-pb-xs q-pr-sm" :name="Icon.ACTIVITIES" />
            Active Workout
          </QCardSection>
        </QCard>
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <QBtn label="Finish Workout" color="positive" @click="finishWorkout()" />
    </div>
  </QPage>
</template>
