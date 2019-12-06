import { ref } from '@vue/composition-api';

export default function useFeature() {
  const thing1 = ref(false);

  return { thing1 };
}