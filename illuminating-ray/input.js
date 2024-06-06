const root = document.getElementById("root");
const siteSearch = document.getElementById("site-search");
const selectTest = document.getElementById("tests-select");

siteSearch.addEventListener("input", highlight);
selectTest.addEventListener("change", highlight);

function highlight() {
  CSS.highlights.clear();
  const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const allTextNodes = [];
  const str = siteSearch.value.trim().toLowerCase();
  let currentNode = treeWalker.nextNode();
  while (currentNode) {
    allTextNodes.push(currentNode);
    currentNode = treeWalker.nextNode();
  }
  if (!str) {
    return;
  }
  const ranges = allTextNodes
    .map((el) => {
      return {
        el,
        text: el.textContent.toLowerCase(),
      };
    })
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });
  const searchResultsHighlight = new Highlight(...ranges.flat());
  CSS.highlights.set("search-results", searchResultsHighlight);
}
