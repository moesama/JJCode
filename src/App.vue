<template>
    <div id="app">

        <el-dialog title="一键扒帖" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="帖子内容">
                    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="topicCopy">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="hideBaDialog">取 消</el-button>
                <el-button type="primary" @click="applyBa">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="格式输出" :visible.sync="dialogOutputVisible">
            <el-input placeholder="请输入防抄标签" v-model="outputTag">
                <el-button slot="append" @click="produceOutput">重新生成防抄贴</el-button>
            </el-input>
            <div id="output" class="output">{{output}}</div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="copyOutput">全选</el-button>
            </div>
        </el-dialog>

        <div id="workspace" class="split split-horizontal">
            <editor class="editor" v-model="$store.state.content"></editor>
            <div class="toolbar">
                <el-popover ref="popover_shortcut" placement="left" trigger="hover">
                    <h3>快捷键说明</h3>
                    <el-table :data="shortcutData">
                        <el-table-column prop="command" label="操作" width="180">
                        </el-table-column>
                        <el-table-column prop="shortcut" label="快捷键" width="180">
                        </el-table-column>
                    </el-table>
                    <el-button size="small" icon="el-icon-info" slot="reference"/>
                </el-popover>

                <el-tooltip class="item" effect="dark" content="输出格式化代码" placement="left">
                    <el-button size="small" @click="showOutputDialog">
                        <i class="fa fa-align-justify" aria-hidden="true"></i>
                    </el-button>
                </el-tooltip>

                <el-tooltip class="item" effect="dark" content="一键扒帖" placement="left">
                    <el-button size="small" @click="showBaDialog">
                        扒
                    </el-button>
                </el-tooltip>

                <el-tooltip class="item" effect="dark" content="下载" placement="left">
                    <el-button size="small" @click="download">
                        <i class="fa fa-download" aria-hidden="true"></i>
                    </el-button>
                </el-tooltip>


                <el-popover ref="popover_config" placement="left" trigger="click">
                    <el-form>
                        <el-form-item label="主题">
                            <el-select v-model="$store.state.theme" placeholder="请选择">
                                <el-option-group v-for="group in themes" :key="group.label" :label="group.label">
                                    <el-option v-for="item in group.options" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-option-group>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-popover>


                <el-tooltip class="item" effect="dark" content="设置" placement="left">
                    <el-button v-popover:popover_config size="small">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </el-button>
                </el-tooltip>
            </div>
        </div>
        <JJ id="preview" class="split split-horizontal"></JJ>
    </div>
</template>

<script lang="ts">
    import JJ from './components/JJ.vue'
    import Editor from './components/Editor.vue'
    import $ from 'jquery-ts'
    import Split from 'split.js'
    import Rule from './data/Rule'

    import { Component, Vue } from 'vue-property-decorator'

    @Component({
        components: {
            JJ,
            Editor,
        },
    })
    export default class App extends Vue {
        private dialogFormVisible: boolean = false
        private dialogOutputVisible: boolean = false
        private topicCopy: string = ""
        private output: string = ""
        private outputTag: string = ""
        private shortcutData = require('./res/shortcuts.json')
        private themes = require('./res/themes.json')

        private mounted() {
            Split(['#workspace', '#preview'])
        }

        private download() {
            const URLCompat = (URL || webkitURL || window) as any
            const win = window as any

            let blob = null
            const filename = 'output.html'
            try {
                blob = new Blob([this.$store.state.content], {type: 'text/html'})
            } catch (e) {
                const BlobBuilder = win.BlobBuilder || win.WebKitBlobBuilder || win.MozBlobBuilder
                const bb = new BlobBuilder()
                bb.append(this.$store.state.content)
                blob = bb.getBlob('text/plain;charset=gb2312')
            }

            const type = blob.type
            const forceSaveableType = 'application/octet-stream'
            if (type && type != forceSaveableType) { // 强制下载，而非在浏览器中打开
                const slice = blob.slice || blob.webkitSlice || blob.mozSlice
                blob = slice.call(blob, 0, blob.size, forceSaveableType)
            }

            const url = URLCompat.createObjectURL(blob)
            const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement
            saveLink.href = url
            saveLink.download = filename
            const event = document.createEvent('MouseEvents')
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            saveLink.dispatchEvent(event)
            URLCompat.revokeObjectURL(url)
        }

        private showBaDialog() {
            this.dialogFormVisible = true
        }

        private hideBaDialog() {
            this.dialogFormVisible = false
        }

        private applyBa() {
            this.dialogFormVisible = false
            const value = $(this.topicCopy).find('#topic').html()
            if (value) {
                this.$store.state.content = value
            }
            this.topicCopy = ""
        }

        private showOutputDialog() {
            this.produceOutput()
            this.dialogOutputVisible = true
        }

        private hideOutputDialog() {
            this.dialogOutputVisible = false
        }

        private produceOutput() {
            if (this.outputTag && this.outputTag != "") {
                const self = this
                const $c = $("<div>").append(this.$store.state.content)
                $c.find("*").each((index, element) => {
                    if (Math.random() < 0.3) {
                        $(element).addClass(self.outputTag + "_" + index)
                    }
                })
                this.output = Rule.format($c[0].innerHTML)
            } else {
                this.output = Rule.format(this.$store.state.content)
            }
        }

        private copyOutput() {
            const text = document.getElementById('output') as HTMLElement
            if ((document.body as any).createTextRange) {
                const range = (document.body as any).createTextRange()
                range.moveToElementText(text)
                range.select()
            } else if (window.getSelection) {
                const selection = window.getSelection()
                const range = document.createRange()
                range.selectNodeContents(text)
                selection.removeAllRanges()
                selection.addRange(range)
            }
        }
    }
</script>

<style>
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    #app {
        height: 100%;
    }

    .split.split-horizontal,
    .gutter.gutter-horizontal {
        height: 100%;
        float: left;
        margin: 0;
        position: relative;
    }

    .toolbar {
        position: absolute;
        bottom: 10px;
        right: 10px;
        z-index: 100;
    }

    .toolbar button {
        display: block;
        margin: 10px 10px 10px 0 !important;
    }

    .editor {
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
    }

    .gutter {
        background: #666;
        cursor: ew-resize;
    }

    .output {
        margin-top: 10px;
        height: 400px;
        overflow-y: auto;
        font-family: simsun;
    }
</style>

