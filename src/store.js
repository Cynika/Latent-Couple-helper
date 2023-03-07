import {reactive} from 'vue'

export const state = reactive({
    layout: [
        {x: 0, y: 0, w: 2, h: 2, i: "0", q: 0.5, p: "a"},
        {x: 2, y: 0, w: 1, h: 1, i: "1", q: 0.3, p: "b"},
    ],
    draggable: true,
    resizable: true,
    vertical_compact: false,
    colNum: 6,
    rowHeight: 30,
    rowNum: 6,
    gridWidth: 640,
    gridHeight: 320,
    opacity: 0.8,
    upscale: 0.6,

    index: 0,
    quan: 0.5,
    prompt: "prompt",

    imageUrl: '',
    imageWidth: 640,
    imageHeight: 320,
    randomApiUrl: 'https://api.ixiaowai.cn/api/api.php?'
})