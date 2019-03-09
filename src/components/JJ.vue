<template>
    <div class="preview">
        <iframe id="preview_frame" src="jj.html"></iframe>
        <div class="slider-block">
            <i class="el-icon-plus" @click="zoomIn"></i>
            <el-slider class="slider" v-model="scale" vertical height="200px" :min="50" :max="150" :step="25"
                       show-stops>
            </el-slider>
            <i class="el-icon-minus" @click="zoomOut"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import jQuery from 'jquery-ts'

    import { Component, Vue, Watch } from 'vue-property-decorator'

    @Component
    export default class JJ extends Vue {
        private inputTimer: NodeJS.Timeout | null = null
        private scale: number = 100

        private zoomIn() {
            if (this.scale < 150) {
                this.scale += 25
            }
        }

        private zoomOut() {
            if (this.scale > 50) {
                this.scale -= 25
            }
        }

        @Watch("$store.state.content")
        private onContentChanged(curVal: any, oldVal: any) {
            if (curVal == oldVal) {
                return
            }
            if (this.inputTimer) {
                clearTimeout(this.inputTimer)
            }
            this.inputTimer = setTimeout(() => {
                const win = (document.getElementById("preview_frame") as HTMLFrameElement).contentWindow as WindowProxy
                const topic = win.document.getElementById("topic") as HTMLElement
                if (topic) {
                    topic.innerHTML = curVal
                    window.localStorage.draft = curVal
                }
            }, 1000)
        }

        @Watch("scale")
        private onScaleChanged(curVal: any, oldVal: any) {
            const win = (document.getElementById("preview_frame") as HTMLFrameElement).contentWindow as WindowProxy
            jQuery(win.document.body).css('transform', 'scale(' + (curVal / 100) + ')')
        }
    }
</script>

<style>
    .preview {
        position: relative;
        float: left;
        width: 50%;
        height: 100%;
    }

    .preview iframe {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }

    .slider-block {
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 36px;
        padding: 10px 0;
        border-radius: 18px;
        background: #fff;
        box-shadow: 0px 0px 5px #ccc;
        text-align: center;
    }

    .slider-block i {
        color: #ccc;
        cursor: pointer;
    }

    .slider-block i:hover {
        color: #666;
    }

    .slider {
        margin: 8px 0;
    }
</style>


