/**
 * Local-only type seam for standalone development. The published bundle
 * resolves these modules from the dsh host at runtime; this file is excluded
 * from the package's `files` list.
 */
declare module "@deepseek-ai/cordis" {
  export interface SlotsService {
    inject(name: string, factory: () => unknown): void;
    register(config: { name: string; id?: string; priority?: number }, component: unknown): unknown;
  }

  export interface Context {
    slots: SlotsService;
  }
}

declare module "@deepseek-ai/dsh-client-ui-slots" {}
