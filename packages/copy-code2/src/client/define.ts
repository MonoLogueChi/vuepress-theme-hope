import type { CopyCodeLocaleConfig } from "../shared/index.js";

declare const COPY_CODE_DELAY: number;
declare const COPY_CODE_DURATION: number;
declare const COPY_CODE_LOCALES: CopyCodeLocaleConfig;
declare const COPY_CODE_PURE: boolean;
declare const COPY_CODE_SELECTOR: string | string[];
declare const COPY_CODE_SHOW_IN_MOBILE: boolean;

export const copyCodeDelay = COPY_CODE_DELAY;
export const copyCodeDuration = COPY_CODE_DURATION;
export const copyCodeLocales = COPY_CODE_LOCALES;
export const copyCodePure = COPY_CODE_PURE;
export const copyCodeSelector = COPY_CODE_SELECTOR;
export const copyCodeShowInMobile = COPY_CODE_SHOW_IN_MOBILE;
