<template>
  <div>
    <div style="height: 400px;width: auto" id="minder-container"></div>
  </div>
</template>

<script>
  import kity from 'kity'
  import kityminder from 'kityminder-core'

  export default {
    name: "page",
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.km = new window.kityminder.Minder({
        renderTo: '#minder-container'
      });
      this.km.importJson({
        "root": {
          "data": {
            "text": "test111"
          },
          "children": [
            {
              "data": {
                "text": "新闻\nsrc/module/node.j"
              },
              "children": [
                {
                  "data": {
                    text: 'aaa'
                  }
                }
              ]
            },
            {"data": {"text": "网页"}},
            {"data": {"text": "贴吧"}},
            {"data": {"text": "知道"}},
            {"data": {"text": "音乐"}},
            {"data": {"text": "图片"}},
            {"data": {"text": "视频"}},
            {"data": {"text": "地图"}},
            {"data": {"text": "百科", "expandState": "collapse"}}
          ]
        },
        "template": "default"
      });
    }
  }
</script>

<style scoped>

</style>
