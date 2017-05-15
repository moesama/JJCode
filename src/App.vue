<template>
  <div id="app">
    <el-popover ref="popover_config" placement="left" trigger="click">
      <el-form>
        <el-form-item label="主题">
          <el-select v-model="$store.state.theme" placeholder="请选择">
            <el-option-group v-for="group in themes" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
      </el-form>
    </el-popover>
  
    <el-popover ref="popover_shortcut" placement="left" trigger="hover">
      <h3>快捷键说明</h3>
      <el-table :data="shortcutData">
        <el-table-column prop="command" label="操作" width="180">
        </el-table-column>
        <el-table-column prop="shortcut" label="快捷键" width="180">
        </el-table-column>
      </el-table>
    </el-popover>
  
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
      <div id="output" class="output">{{output}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="copyOutput">全选</el-button>
      </div>
    </el-dialog>
  
    <div id="workspace" class="split split-horizontal">
      <editor class="editor" v-model="$store.state.content"></editor>
      <div class="toolbar">
        <el-button size="small" icon="information" v-popover:popover_shortcut>
        </el-button>
        <el-button size="small" @click="showOutputDialog">
          <i class="fa fa-align-justify" aria-hidden="true"></i>
        </el-button>
        <el-button size="small" @click="showBaDialog">
          扒
        </el-button>
        <el-button size="small" @click="download">
          <i class="fa fa-download" aria-hidden="true"></i>
        </el-button>
        <el-button v-popover:popover_config size="small">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </el-button>
      </div>
    </div>
    <jj id="preview" class="split split-horizontal"></jj>
  </div>
</template>

<script>
import JJ from './components/JJ.vue'
import Editor from './components/editor.vue'
import $ from 'jquery'
import Split from 'split'
import Rules from './data/rule'

export default {
  name: 'app',
  components: {
    jj: JJ,
    editor: Editor
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogOutputVisible: false,
      topicCopy: "",
      output: "",
      shortcutData: [{
        command: "格式化代码",
        shortcut: "Ctrl + Alt + F"
      },{
        command: "撤销",
        shortcut: "Ctrl + Z"
      }, {
        command: "重做",
        shortcut: "Ctrl + Y"
      }],
      themes: [{
        label: "明亮",
        options: [{
          value: "ace/theme/chrome",
          label: "Chrome"
        }, {
          value: "ace/theme/clouds",
          label: "Clouds"
        }, {
          value: "ace/theme/crimson_editor",
          label: "Crimson Editor"
        }, {
          value: "ace/theme/dawn",
          label: "Dawn"
        }, {
          value: "ace/theme/dreamweaver",
          label: "Dreamweaver"
        }, {
          value: "ace/theme/eclipse",
          label: "Eclipse"
        }, {
          value: "ace/theme/github",
          label: "GitHub"
        }, {
          value: "ace/theme/iplastic",
          label: "IPlastic"
        }, {
          value: "ace/theme/solarized_light",
          label: "Solarized Light"
        }, {
          value: "ace/theme/textmate",
          label: "TextMate"
        }, {
          value: "ace/theme/tomorrow",
          label: "Tomorrow"
        }, {
          value: "ace/theme/xcode",
          label: "XCode"
        }, {
          value: "ace/theme/kuroir",
          label: "Kuroir"
        }, {
          value: "ace/theme/katzenmilch",
          label: "KatzenMilch"
        }, {
          value: "ace/theme/sqlserver",
          label: "SQL Server"
        }]
      }, {
        label: "黑暗",
        options: [{
          value: "ace/theme/ambiance",
          label: "Ambiance"
        }, {
          value: "ace/theme/chaos",
          label: "Chaos"
        }, {
          value: "ace/theme/clouds_midnight",
          label: "Clouds Midnight"
        }, {
          value: "ace/theme/cobalt",
          label: "Cobalt"
        }, {
          value: "ace/theme/gruvbox",
          label: "Gruvbox"
        }, {
          value: "ace/theme/idle_fingers",
          label: "idle Fingers"
        }, {
          value: "ace/theme/kr_theme",
          label: "krTheme"
        }, {
          value: "ace/theme/merbivore",
          label: "Merbivore"
        }, {
          value: "ace/theme/merbivore_soft",
          label: "Merbivore Soft"
        }, {
          value: "ace/theme/mono_industrial",
          label: "Mono Industrial"
        }, {
          value: "ace/theme/monokai",
          label: "Monokai"
        }, {
          value: "ace/theme/pastel_on_dark",
          label: "Pastel on dark"
        }, {
          value: "ace/theme/solarized_dark",
          label: "Solarized Dark"
        }, {
          value: "ace/theme/terminal",
          label: "Terminal"
        }, {
          value: "ace/theme/tomorrow_night",
          label: "Tomorrow Night"
        }, {
          value: "ace/theme/tomorrow_night_blue",
          label: "Tomorrow Night Blue"
        }, {
          value: "ace/theme/tomorrow_night_bright",
          label: "Tomorrow Night Bright"
        }, {
          value: "ace/theme/tomorrow_night_eighties",
          label: "Tomorrow Night 80s"
        }, {
          value: "ace/theme/twilight",
          label: "Twilight"
        }, {
          value: "ace/theme/vibrant_ink",
          label: "Vibrant Ink"
        }]
      }]
    }
  },
  mounted() {
    Split(['#workspace', '#preview'])
  },
  methods: {
    download() {
      let URL = URL || webkitURL || window

      let blob = null
      let filename = 'output.html'
      try {
        blob = new Blob([this.$store.state.content], { type: 'text/html' })
      } catch (e) {
        let BlobBuilder = BlobBuilder || WebKitBlobBuilder || MozBlobBuilder
        let bb = new BlobBuilder
        bb.append(this.$store.state.content)
        blob = bb.getBlob('text/plain;charset=gb2312')
      }

      var type = blob.type;
      var force_saveable_type = 'application/octet-stream';
      if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开
        var slice = blob.slice || blob.webkitSlice || blob.mozSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
      }

      var url = URL.createObjectURL(blob);
      var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = url;
      save_link.download = filename;
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
      URL.revokeObjectURL(url);
    },
    showBaDialog() {
      this.dialogFormVisible = true
    },
    hideBaDialog() {
      this.dialogFormVisible = false
    },
    applyBa() {
      this.dialogFormVisible = false
      let value = $(this.topicCopy).find('#topic').html()
      if (value) {
        this.$store.state.content = value
      }
      this.topicCopy = ""
    },
    showOutputDialog() {
      this.output = Rules.format(this.$store.state.content)
      this.dialogOutputVisible = true
    },
    hideOutputDialog() {
      this.dialogOutputVisible = false
    },
    copyOutput() {
      let text = document.getElementById('output')
      if (document.body.createTextRange) {
        let range = document.body.createTextRange()
        range.moveToElementText(text)
        range.select()
      } else if (window.getSelection) {
        let selection = window.getSelection()
        let range = document.createRange()
        range.selectNodeContents(text)
        selection.removeAllRanges()
        selection.addRange(range)
      }
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
  position: absolute;
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
  height: 400px;
  overflow-y: auto;
  font-family: simsun;
}
</style>

