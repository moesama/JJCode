<template>
    <div class="preview">
        <iframe id="preview_frame" src="jj.html"></iframe>
        <div class="slider-block">
            <i class="el-icon-plus" @click="zoomIn"></i>
            <el-slider class="slider" v-model="scale" vertical height="200px" :min="50" :max="150" :step="25" show-stops>
            </el-slider>
            <i class="el-icon-minus" @click="zoomOut"></i>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "JJ",
    data() {
        return {
            inputTimer: 0,
            scale: 100
        }
    },
    methods: {
        zoomIn() {
            if (this.scale < 150) {
                this.scale += 25
            }
        },
        zoomOut() {
            if (this.scale > 50) {
                this.scale -= 25
            }
        }
    },
    watch: {
        "$store.state.content": (curVal, oldVal) => {
            if (curVal == oldVal) {
                return
            }
            if (self.inputTimer) {
                clearTimeout(self.inputTimer)
            }
            self.inputTimer = setTimeout(() => {
                let win = document.getElementById("preview_frame").contentWindow
                let topic = win.document.getElementById("topic")
                if (topic) {
                    topic.innerHTML = curVal
                }
            }, 1000);
        },
        "scale": (curVal, oldVal) => {
            let win = document.getElementById("preview_frame").contentWindow
            $(win.document.body).css('transform', 'scale(' + (curVal / 100) + ')')
        }
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


