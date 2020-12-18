<template>
<div>
  <p>
    <router-link to="/user/foo">UserHome</router-link>
    <br>
    <router-link to="/user/foo/UserProfile">UserPosts</router-link>
    <br>
    <router-link to="/user/foo/UserPosts">UserProfile</router-link>
  </p>
  <router-view></router-view>
</div>
</template>
  
<script type="text/ecmascript-6">
export default {
  name:'app',
};
</script>

