import type { Context } from "@deepseek-ai/cordis";
import type {} from "@deepseek-ai/dsh-client-ui-slots";
import { GamifyEduLauncher } from "./GamifyEduLauncher";

/** Required dsh service: the plugin registers into the existing hero slot. */
export const inject = ["slots"];

/** Browser half: add a launcher to the dsh empty-session hero. */
export function apply(ctx: Context): void {
  ctx.slots.inject("conversation.hero.agentPreset", () => ctx.slots.register(
    {
      name: "conversation.hero.agentPreset",
      id: "gamify-edu",
      // The built-in agent-preset chip occupies priority 0. A lower value
      // intentionally shadows it while keeping the slot's single-owner
      // contract valid.
      priority: -10,
    },
    GamifyEduLauncher,
  ));
}
