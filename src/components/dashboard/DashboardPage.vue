<script setup lang="ts">
import { QPage } from 'quasar'
import MessageCard from '@/components/dashboard/MessageCard.vue'
import BeginWorkoutsList from './BeginWorkoutsList.vue'
</script>

<template>
  <QPage padding>
    <div class="row q-col-gutter-md justify-start">
      <div class="col-12">
        <MessageCard />
      </div>

      <BeginWorkoutsList />
    </div>
  </QPage>
</template>
