import { defineComponent, h } from "vue";

import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import InfoList from "@theme-hope/modules/blog/components/InfoList";
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import SkipLink from "@theme-hope/components/SkipLink";
import { useWindowSize } from "@theme-hope/composables/index";

import type { VNode } from "vue";

import "../styles/page.scss";

export default defineComponent({
  name: "BlogWrapper",

  setup(_props, { slots }) {
    const { isMobile } = useWindowSize();

    return (): VNode[] => [
      h(SkipLink),
      h(
        CommonWrapper,
        { noSidebar: true },
        {
          default: () => slots["default"]?.(),
          navScreenBottom: () => h(BloggerInfo),
          ...(isMobile.value ? { sidebar: () => h(InfoList) } : {}),
        }
      ),
    ];
  },
});
