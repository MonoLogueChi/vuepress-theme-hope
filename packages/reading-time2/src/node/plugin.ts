import { getLocales } from "vuepress-shared/node";

import { readingTimeLocales } from "./locales.js";
import { getReadingTime } from "./readingTime.js";
import { logger } from "./utils.js";

import type { Page, PluginFunction } from "@vuepress/core";
import type { ReadingTimeOptions } from "./options.js";
import type { ReadingTime } from "./typings/index.js";

/** Reading time plugin */
export const readingTimePlugin =
  (options: ReadingTimeOptions): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info("Options:", options);

    return {
      name: "vuepress-plugin-reading-time2",

      define: (app): Record<string, unknown> => ({
        READING_TIME_LOCALES: getLocales({
          app,
          name: "reading-time",
          default: readingTimeLocales,
          config: options.locales,
        }),
      }),

      extendsPage: (page: Page<{ readingTime?: ReadingTime }>): void => {
        page.data.readingTime = getReadingTime(
          page.content,
          options.wordPerMinute || 300
        );
      },
    };
  };
