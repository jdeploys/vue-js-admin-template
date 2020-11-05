<template>
  <q-page class="sign-in-page full-width full-height row justify-center">
    <q-form class="sign-in-page__card col-4 self-center" @submit="signIn">
      <q-card>
        <q-card-section>
          <q-input
            v-model="formData.id"
            :label="lang.id"
            :rules="[rules.required, rules.checkId]"
          >
            <q-tooltip anchor="top middle">ID : js</q-tooltip>
          </q-input>
          <q-input
            v-model="formData.pw"
            :label="lang.pw"
            :rules="[rules.required, rules.checkPw]"
          >
            <q-tooltip anchor="top middle">PW : admin</q-tooltip>
          </q-input>
        </q-card-section>
        <q-card-actions>
          <q-btn color="primary" type="submit" :loading="isLoading">
            {{ lang.signIn }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component';
import { authModule } from '@/store';
import ValidationMixins from '@/components/mixins/ValidationMixins';
import { UrlName } from '@/config/router/url';

@Component
export default class SignInPage extends mixins(ValidationMixins) {
  public lang = (this.$q.lang as any).auth;
  public formData = {
    id: '',
    pw: ''
  };
  public isLoading = false;

  public rules = {
    required: this.$_validation_required(),
    checkId: this.$_validation_checkId(),
    checkPw: this.$_validation_checkPw()
  };

  public signIn() {
    this.isLoading = true;
    authModule
      .signIn()
      .then(() => {
        this.$router.push(UrlName.Dashboard);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>

<style lang="scss">
.sign-in-page {
  &__card {
  }
}
</style>
