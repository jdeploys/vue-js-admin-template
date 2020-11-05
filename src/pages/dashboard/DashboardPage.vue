<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <carousel-sample></carousel-sample>
      </div>
      <div class="col-6">
        <q-card class="bg-light-green-3" flat>
          <q-card-section>
            <div class="dashboard-page__title">
              Visit Count : 30
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6">
        <q-card class="bg-deep-orange-2" flat>
          <q-card-section>
            <div class="dashboard-page__title">
              Trend Keyword : Vue
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CarouselSample from '@/components/sample/CarouselSample.vue';
@Component({
  components: { CarouselSample }
})
export default class DashboardPage extends Vue {}
</script>

<style lang="scss">

.dashboard-page {
  &__title {
    font-size: 24px;
  }
}
</style>
