<template>
<div id="wrapper" v-bind:class="{ active: showMobileMenu }">
    <sidebar></sidebar>
    <nav class="navbar sticky-top navbar-dark " id="navbar">
                        <input type="image"   src="src\image\menu.svg" id="menu-toggle" 
                        v-on:click="showMobileMenu = !showMobileMenu"/>
                        <input type="text" style="display: none;" id="search_nav" placeholder="Search..">
                        <input type="image" src="src\icons\zooms-2.svg" id="navbar-brands"  />
                        </nav>  
    <pagecontent></pagecontent>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style>
.btn-light {
    border: solid 1px rgb(230,230,230);
    margin-right: 10px;
    margin-bottom: 20px
}



  body::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 3px rgba(66, 73, 129, 0.3);
    box-shadow:inset 0 0 3px rgba(66, 73, 129, 0.3);
    border-radius: 0px;
    background-color: white;
}

body::-webkit-scrollbar
{
    width: 12px;
    background-color: white;
}

body::-webkit-scrollbar-thumb
{
    border-radius: 0px;
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.966);
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.966);
    background-color: rgb(255, 134, 5)
}

body{
    scrollbar-base-color: rgb(255, 255, 255);
    scrollbar-face-color: rgb(255, 134, 5);
    scrollbar-3dlight-color: rgb(255, 255, 255);
    scrollbar-highlight-color: rgb(255, 255, 255);
    scrollbar-track-color: rgb(255, 255, 255);
    scrollbar-arrow-color: rgb(255, 134, 5);
    scrollbar-shadow-color: rgb(255, 134, 5);
    
  }

#navbar{
      background-color: white;
      border-bottom: solid 1px rgb(240,240,240);
      height: 66px;
      margin-left: 2px
  }

</style>
