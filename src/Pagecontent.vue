 <template>
<div id="page-content-wrapper">
                <component v-bind:is="component"></component>
                <footer class="footer" id=footer-container>
                <div class="container">
                <span class="text-muted"> Copyright © 2018 Designed by Etienne Roulet. All rights reserved.</span>
                </div>
                </footer>
        </div>            
 </template>


<script>
import Titlecard from './components/Titlecard.vue'
import Card from './components/Card.vue'
import About from './components/About.vue'
import Dashboard from './components/Dashboard.vue'
import Contact from './components/Contact.vue'
import Events from './components/Events.vue'
import Overview from './components/Overview.vue'
import Service from './components/Service.vue'
import Shortcuts from './components/Shortcuts.vue'
import { mapGetters } from 'vuex'

export default{



  
  components:{
    'titlecard': Titlecard,
    'card': Card,
    'about': About,
    'dashboard': Dashboard,
    'contact': Contact,
    'events': Events,
    'overview': Overview,
    'service': Service,
    'shortcuts': Shortcuts

  },
  


  computed: {
    component(){
      return this.$store.state.counter;
    }
  },


  
  data() {
    return {
    

    }
  },

}
</script>






 <style>

 /* Sticky footer styles
-------------------------------------------------- */
html {
    position: relative;
    min-height: 100%;
  }
  body {
    /* Margin bottom by footer height */
    margin-bottom: 60px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 0px;
    line-height: 60px; /* Vertically center the text there */
    background-color:white;
    border:solid 1px rgb(240,240,240)
  }
  
  .form-control {
    width: 70%;
  }
  #footer-container{
    text-align: center;
  }


  

 </style>
 