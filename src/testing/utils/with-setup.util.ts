import { mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, type App } from 'vue';

type WithSetupOptions = {
  app?: (app: App) => void;
};

let activeWrapper: VueWrapper | null = null;

export function withSetup<T>(
  composable: () => T,
  options?: WithSetupOptions,
): T {
  let result: T;

  const TestComponent = defineComponent({
    setup() {
      result = composable();
      return {};
    },
    template: '<div />',
  });

  activeWrapper?.unmount();
  activeWrapper = mount(TestComponent, {
    global: {
      plugins: options?.app ? [{ install: options.app }] : [],
    },
  });

  return result!;
}

export function cleanupSetup(): void {
  activeWrapper?.unmount();
  activeWrapper = null;
}
