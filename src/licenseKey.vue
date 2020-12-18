<template>
  <div id="wrapper">
    <div class="container" > 
      <div class="info">
        您的软件已过期,请联系管理员注册
      </div>
      <div class="machineId">
        机器码
      </div>

      <div class="machine-code" @click="copyCode()">
        {{machineCode}}
      </div>

    </div>
    <div class="machine-code-form">
      <el-input
        class="input-textarea"
        type="textarea"
        placeholder="请输入机器码"
        v-model="textarea"
      >
      </el-input>
      <el-button type="primary">提  交</el-button>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      machineCode:'9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvscIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIJ1arMdtUQUV6iVyqZ9ARwhuvsclvnJ7dKAatNa3CgSIeXGkhh6TCsddxv5ZdzH8fQ6v9wOIZ'
    }
  },
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
  #wrapper{
    width: 100vw;
    height: 100vh;
    background: #535353;
  }
  .container{
    /* width: 80%; */
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    /* position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-40%); */
  }
  .info{
    vertical-align: inherit;
    font-size: 3em;
    color: #F7BA2A;
    margin: 40px 0 20px 0;
    font-weight: bold;
  }
  .machineId{
    vertical-align: inherit;
    font-size:2em;
    color:#fff;
    font-weight: bold;
  } 
  .machine-code{
    width: 50%;
    max-height: 70%;
    margin-top: 20px;
    color: #fff;
    /* background: pink; */
    overflow-y: auto;
    font-weight: normal;
    font-size: 20px;
    cursor: pointer;
    word-break: break-all
  }
  .el-textarea__inner{
    width: 50vw !important;
  }
  .machine-code-form{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    /* margin: 0 20vw 0 20vw; */
    width: 50vw;
    /* background: pink; */
    display: flex;
    justify-content: center;
  }
  .machine-code-form > .el-button{
    margin-left: 4px !important;
  }
  .el-button>span{
    letter-spacing: 8px;
    font-size: 15px;
  }

</style>