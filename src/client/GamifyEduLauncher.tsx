import { useState } from "react";
import { GamifyEduSurface } from "./GamifyEduSurface";
import css from "./GamifyEduLauncher.module.css";

/** Small hero chip that opens the full education surface inside dsh. */
export function GamifyEduLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={css.launcher} type="button" onClick={() => setOpen(true)}>
        <span className={css.icon}>✦</span>
        <span>Gamify Edu</span>
      </button>
      {open && (
        <div className={css.backdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div className={css.dialog} role="dialog" aria-modal="true" aria-label="Gamify Edu">
            <button className={css.close} type="button" onClick={() => setOpen(false)} aria-label="关闭">×</button>
            <GamifyEduSurface />
          </div>
        </div>
      )}
    </>
  );
}
