import MarkdownIt = require("markdown-it");
import { lazyLoad } from "../../src/node/markdown-it/lazy-load";

describe("lazyLoad", () => {
  const markdownIt = MarkdownIt({ linkify: true }).use(lazyLoad);

  it("Shoud render", () => {
    expect(markdownIt.render(`![image](/logo.svg)`)).toEqual(
      '<p><img src="/logo.svg" alt="image" loading="lazy"></p>\n'
    );
  });
});
