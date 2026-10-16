import { effectScope, type EffectScope } from 'vue';

let activeScope: EffectScope | null = null;

export function withScope<T>(composable: () => T): T {
  activeScope?.stop();
  activeScope = effectScope();

  let result: T;

  activeScope.run(() => { result = composable(); });

  return result!;
}

export function cleanupScope(): void {
  activeScope?.stop();
  activeScope = null;
}