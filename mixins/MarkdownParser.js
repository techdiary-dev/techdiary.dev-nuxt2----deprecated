const hljs = require('highlight.js')

const markdownIt = require('markdown-it')({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang))
      return `<pre class="hljs language-${lang.toLowerCase()}"><code>${
        hljs.highlightAuto(str).value
      }</code></pre>`

    return `<pre class="hljs"><code>${markdownIt.renderInline(
      str
    )}</code></pre>`
  },
})

export default function md(markdownText) {
  return markdownIt.render(markdownText)
}
