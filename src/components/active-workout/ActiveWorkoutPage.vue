<script setup lang="ts">
import { QPage } from 'quasar'
import ActiveExercisesList from './ActiveExercisesList.vue'

/**
 * @todo
 */
function finishWorkout(): void {}
</script>

<template>
  <QPage padding>
    <div class="row justify-center">
      <div class="col-12">
        <ActiveExercisesList />
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <QBtn label="Finish Workout" color="positive" @click="finishWorkout()" />
    </div>
  </QPage>
</template>
