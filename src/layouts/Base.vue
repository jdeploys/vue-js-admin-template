<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onClickLeftDrawer" />

        <q-toolbar-title>
          {{ lang.appName }}
        </q-toolbar-title>

        <q-space></q-space>
        <q-btn
          dense
          flat
          round
          icon="exit_to_app"
          @click="onClickSignOut"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer :value="isShowLeftDrawer" side="left" :width="180" bordered>
      <router-menu></router-menu>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { authModule, uiModule } from '@/store';
import RouterMenu from '@/components/menu/RouterMenu.vue';

@Component({
  components: { RouterMenu }
})
export default class BaseLayout extends Vue {
  public lang = this.$q.lang as any;

  public onClickLeftDrawer() {
    uiModule.updateIsLayoutLeftDrawerOpen(!this.isShowLeftDrawer);
  }

  public onClickSignOut() {
    this.$q
      .dialog({
        message: this.lang.msg.signOutConfirm,
        cancel: true
      })
      .onOk(() => {
        authModule.signOut();
      });
  }

  get isShowLeftDrawer() {
    return uiModule.isLayoutLeftDrawerOpen;
  }
}
</script>

<style lang="scss"></style>
