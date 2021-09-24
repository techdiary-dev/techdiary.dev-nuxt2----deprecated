<template>
  <textarea ref="markdownEditor"></textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: false,
      required: false
    }
  },
  data() {
    return {
      codemirror: null
    };
  },
  computed: {
    document() {
      return this.codemirror.getDoc();
    }
  },
  mounted() {
    require("codemirror/addon/edit/closebrackets");
    require("codemirror/addon/edit/continuelist");
    require("codemirror/addon/runmode/runmode");
    require("codemirror/mode/gfm/gfm");

    const Codemirror = require("codemirror");

    this.codemirror = Codemirror.fromTextArea(this.$refs.markdownEditor, {
      mode: "gfm",
      indentUnit: 2,
      indentWithTabs: false,
      autoCloseBrackets: true,
      lineWrapping: true,
      addModeClass: true,
      smartIndent: true,
      value: this.value,
      extraKeys: {
        Enter: editor => {
          editor.execCommand("newlineAndIndentContinueMarkdownList");
        },
        Tab: editor => {
          editor.execCommand("autoIndentMarkdownList");
        },
        "Shift-Tab": editor => {
          editor.execCommand("autoUnindentMarkdownList");
        }
      }
    });
    this.document.setValue(this.value);
    this.document.on("change", codemirror => {
      this.$emit("input", codemirror.getValue());
    });
  }
};
</script>
<style>
.CodeMirror.cm-s-default.CodeMirror-wrap {
  font-size: 16px;
  height: auto;
}
</style>
<style src="codemirror/lib/codemirror.css"/>
