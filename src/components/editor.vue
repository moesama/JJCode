<template>
  <div id="editor">
    {{value}}</div>
</template>

<script>
import beautify from 'js-beautify'

let editor = null;
export default {
  name: 'Editor',
  props: ['value'],
  mounted() {
    let self = this
    editor = ace.edit("editor")
    editor.session.setMode("ace/mode/html")

    if (window.localStorage.theme) {
      this.$store.state.theme = window.localStorage.theme
    }

    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    })

    editor.session.on('change', (e) => {
      // 通过 input 事件发出数值
      self.$emit('input', editor.session.doc.getValue())
    })

    editor.commands.addCommand({
      name: 'format',
      bindKey: { win: 'Ctrl-Alt-F', mac: 'Command-Option-F' },
      exec: function (editor) {
        self.beautify()
      }
    })

    if (window.localStorage.draft) {
      editor.session.setValue(window.localStorage.draft)
    }
  },
  methods: {
    beautify() {
      let result = beautify.html_beautify(editor.session.getValue(), {
        "indent_size": 4,
        "html": {
          "end_with_newline": true,
          "unformatted": []
        }
      })
      editor.session.doc.setValue(result)
    }
  },
  watch: {
    value(val) {
      if (editor.session.doc.getValue() != val) {
        editor.session.doc.setValue(val)
      }
    },
    "$store.state.theme": (curVal, oldVal) => {
      window.localStorage.theme = curVal
      editor.setTheme(curVal)
    }
  }
}
</script>


