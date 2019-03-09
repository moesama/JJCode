<template>
    <div id="editor">
        {{value}}
    </div>
</template>

<script lang="ts">
    import beautify from 'js-beautify'
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

    declare var ace: any

    @Component
    export default class Editor extends Vue {
        @Prop() private value: string = ""

        private editor: any

        private mounted() {
            const self = this
            this.editor = ace.edit("editor")
            this.editor.session.setMode("ace/mode/html")

            if (window.localStorage.theme) {
                this.$store.state.theme = window.localStorage.theme
            }

            this.editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true,
            })

            this.editor.session.on('change', () => {
                // 通过 input 事件发出数值
                self.$emit('input', self.editor.session.doc.getValue())
            })

            this.editor.commands.addCommand({
                name: 'format',
                bindKey: {win: 'Ctrl-Alt-F', mac: 'Command-Option-F'},
                exec() {
                    self.beautify()
                },
            })

            if (window.localStorage.draft) {
                this.editor.session.setValue(window.localStorage.draft)
            }
        }

        private beautify() {
            const result = beautify.html_beautify(this.editor.session.getValue(), {
                indent_size: 4,
                end_with_newline: true,
                unformatted: [],
            })
            this.editor.session.doc.setValue(result)
        }

        @Watch("value")
        private onValueChanged(val: any) {
            if (this.editor.session.doc.getValue() != val) {
                this.editor.session.doc.setValue(val)
            }
        }

        @Watch("$store.state.theme")
        private onThemeChanged(curVal: any, oldVal: any) {
            window.localStorage.theme = curVal
            this.editor.setTheme(curVal)
        }
    }
</script>


