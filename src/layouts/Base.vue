<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onClickLeftDrawer" />

        <q-toolbar-title>
          {{ lang.appName }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :value="isShowLeftDrawer" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { uiModule } from "@/store";

@Component
export default class BaseLayout extends Vue {
  public lang = (this.$q.lang as any);

  public onClickLeftDrawer() {
    uiModule.updateIsLayoutLeftDrawerOpen(!this.isShowLeftDrawer);
  }

  get isShowLeftDrawer() {
    return uiModule.isLayoutLeftDrawerOpen;
  }
}
</script>

<style lang="scss"></style>
