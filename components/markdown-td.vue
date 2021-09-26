<template>
  <textarea ref="markdownEditor"></textarea>
</template>

<script>
import { randomBytes } from "crypto";
import upload from "~/mixins/upload";

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
  mixins: [upload],
  methods: {
    async handleMedia(codemirror, file) {
      const imageUUID = randomBytes(12).toString("hex");
      const str = `![Uploading...](${imageUUID})`;
      const cursor = codemirror.getCursor();
      this.document.replaceRange(`\n${str}`, cursor);
      // this.document.setValue(codemirror.getValue());
      const url = await this.uploadFile(file, "techdiary-article-assets");
      if (url.length) {
        this.document.setValue(
          `${codemirror
            .getValue()
            .replace(str, `![${file.name.split(".")[0]}](${url})`)}\n`
        );
        codemirror.setCursor(codemirror.lastLine());
      } else {
        this.document.setValue(`${codemirror.getValue().replace(str, ``)}\n`);
        codemirror.setCursor(codemirror.lastLine());
      }
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
    this.codemirror.on("click", editor => {
      console.log("clicked");
    });
    this.codemirror.on("drop", (codemirror, event) => {
      if (!event.dataTransfer) return;

      const files = event.dataTransfer.files;
      console.log(files);
      if (files.length) {
        event.preventDefault();
        const file = files[0];
        this.handleMedia(codemirror, file);
      }
    });
    this.codemirror.on("paste", (editor, event) => {
      if (event?.clipboardData?.files.length) {
        event.preventDefault();
        const file = event.clipboardData.files[0];
        this.handleMedia(editor, file);
      }
    });
  }
};
</script>
<style lang="scss">
.CodeMirror.cm-s-default.CodeMirror-wrap {
  font-size: 16px;
  height: auto;
  min-height: 500px;

  .CodeMirror-scroll {
    padding-bottom: 100px;
  }
}
</style>
<style src="codemirror/lib/codemirror.css" />
