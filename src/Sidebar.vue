<template>
  <div  id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                  <a href="#" id="logo"><img src="src\image\Coop.png"></a>
                </li>
                <li>
                    <a  v-on:click="greet" id="first-a" ><img src="src\icons\dashbord.svg" id="image-nav">Dashboard</a>
                </li>
    
                <li>
                    <a v-on:click="greet"><img src="src\icons\flash-21.svg" id="image-nav">Shortcuts</a>
                </li>
                <li>
                    <a  v-on:click="greet"><img src="src\icons\folder-15.svg" id="image-nav">Overview</a>
                </li>
                <li>
                    <a  v-on:click="greet"><img src="src\icons\calendar-60.svg" id="image-nav">Events</a>
                </li>
                <li>
                    <a  v-on:click="greet"><img src="src\icons\spaceship.svg" id="image-nav">About</a>
                </li>
                <li>
                    <a  v-on:click="greet"><img src="src\icons\preferences.svg" id="image-nav">Services</a>
                </li>
                <li>
                    <a  v-on:click="greet"><img src="src\icons\like-2.svg" id="image-nav">Contact</a>
                </li>
            </ul>
        </div>
</template>

<script>


export default {
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Menüpunkt ' + this.id + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>



<style>
/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */

body {
  overflow-x: hidden;
}


#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.active {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  overflow: hidden;
  background: #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border: solid 1px rgb(240, 240, 240);
}

#wrapper.active #sidebar-wrapper {
  width: 252px;
}

#page-content-wrapper {
  background-color: rgb(248, 248, 248);
  width: 100%;
  position: absolute;
  padding: 15px;
  min-height: 90vh;
  padding-top: 100px;
}

#wrapper.active #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}


/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #000000;
  margin-bottom: 25px;

}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: rgb(155, 155, 155);
  background: rgba(255, 255, 255, 0.2);
  
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  z-index: 9999;
  height: 65px;
  font-size: 18px;
  line-height: 60px;
  border-bottom: solid 1px rgb(240, 240, 240);
}

.sidebar-nav>.sidebar-brand a {
  color: #000000;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #155, 155, 155;
  background: none;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0;
  }
  #wrapper.active {
    padding-left: 250px;
  }
  #sidebar-wrapper {
    width: 0;
  }
  #wrapper.active #sidebar-wrapper {
    width: 252px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }
  #wrapper.active #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}


#page-nav-wrapper {
  height: 66px;
  border: solid 1px rgb(240, 240, 240);
  background-color: white;
}

#menu-toggle {
  z-index: 0;
    cursor:pointer ;
    border:0 none;
}

#navbar-brands{
  cursor:pointer ;
    border:0 none;
}

input[type="image"]:focus {
  outline: none;
}

.row {
  margin-bottom: 30px;
}
  
#image-nav{
  margin-right: 25px;
}
#first-a {
  margin-top: 30px
}



</style>
