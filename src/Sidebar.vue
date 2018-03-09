<template>
  <div  id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                  <a href="#" id="logo"><img src="src\image\Coop.png"></a>
                </li>
                <li>
                    <a @click="dashboard" id="first-a" ><img src="src\icons\dashbord.svg" id="image-nav">Dashboard</a>
                </li>
                <li>
                    <a  @click="shortcut"><img src="src\icons\flash-21.svg" id="image-nav">Shortcuts</a>
                </li>
                <li>
                    <a  @click="overview"><img src="src\icons\folder-15.svg" id="image-nav">Overview</a>
                </li>
                <li>
                    <a  @click="events"><img src="src\icons\calendar-60.svg" id="image-nav">Events</a>
                </li>
                <li>
                    <a  @click="about"><img src="src\icons\spaceship.svg" id="image-nav">About</a>
                </li>
                <li>
                    <a  @click="service"><img src="src\icons\preferences.svg" id="image-nav">Service</a>
                </li>
                <li>
                    <a  @click="contact"><img src="src\icons\like-2.svg" id="image-nav">Contact</a>
                </li>
            </ul>
        </div>
</template>

<script>
import { mapMutations }  from 'vuex'
export default {
  methods: {
    dashboard() {
      this.$store.state.counter="dashboard";
    },
    shortcut() {
      this.$store.state.counter="shortcuts";
    },
     overview() {
      this.$store.state.counter="overview";
    },
     events() {
      this.$store.state.counter="events";
    },
     about() {
      this.$store.state.counter="about";
    },
     service() {
      this.$store.state.counter="service";
    },
     contact() {
      this.$store.state.counter="contact";
    },


  }
}
</script>



<style>
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
  background-color: rgb(249, 249, 249);
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
  line-height: 60px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #000000;
  margin-bottom: 0px;

}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: rgb(155, 155, 155);
  background: rgba(255, 255, 255, 0.2);
  background-color:rgba(156, 178, 187, 0.151);
  cursor:pointer ;
  
  
  
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
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
  margin-top: 15px
}



</style>
