<template>
  <q-page>
    <q-list>
      <q-item>
        <q-item-section>
          Dark Mode
        </q-item-section>
        <q-item-section side>
          <q-toggle :value="isDarkMode" @click.native="onDarkModeToggle"></q-toggle>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { uiModule } from '@/store';

@Component
export default class SettingPage extends Vue {
  public onDarkModeToggle() {
    uiModule.updateIsDarkMode(!this.isDarkMode);
    this.$q.dark.set(this.isDarkMode);
  }

  get isDarkMode() {
    return uiModule.isDarkMode;
  }
}
</script>

<style lang="scss"></style>
