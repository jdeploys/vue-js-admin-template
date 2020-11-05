<template>
  <q-list separator>
    <q-item
      v-for="(item, i) in menuItems"
      :key="`router_menu_${i}`"
      clickable
      @click="onMenuClick(item)"
    >
      <q-item-section>
        {{ renderMenuName(item) }}
      </q-item-section>
    </q-item>
    <q-separator></q-separator>
  </q-list>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { menuItems } from '@/router/menu';
import { RouteConfig } from 'vue-router';

@Component
export default class RouterMenu extends Vue {
  public lang = (this.$q.lang as any).menu;
  public menuItems = menuItems;

  public renderMenuName(item: RouteConfig) {
    return this.lang[item.name] || '';
  }

  public onMenuClick(item: RouteConfig) {
    if (this.$route.name === item.name) {
      return;
    }

    this.$router.push(item.path);
  }
}
</script>

<style lang="scss"></style>
