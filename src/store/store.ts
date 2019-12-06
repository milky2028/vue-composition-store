import useFeature from './useFeature'
import VueCompositionApi from '@vue/composition-api';
import Vue from 'vue';

Vue.use(VueCompositionApi);

export const Modules = {
  thing1: Symbol.for('Thing1')
}

export const Store = {
  [Modules.thing1]: useFeature()
}