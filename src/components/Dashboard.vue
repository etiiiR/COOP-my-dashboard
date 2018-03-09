<template>
  
        <div class="cards">            
    <div class="row">
                        <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Special title treatment</h5>
                              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a  href="" class="btn btn-primary" id="Button_Copy">Create a new Entry</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Special title treatment</h5>
                              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="" class="btn btn-primary" id="Button_Delete">delete Entry</a>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                             <div  class="card-columns">
                                    <div v-for="img  in cardimage" :key="img.url" class="card" id="cardwithpic">
                                      <img  v-bind:src="img"  class="card-img-top"  alt="Card image cap">
                                      <div class="card-body">
                                        <h5 class="card-title">{{ cardtitle }}</h5>
                                        <p class="card-text">{{ cardtext }}</p>
                                        <a href="#" class="btn btn-light" id="button_PersonData">Person data</a><a href="" class="btn btn-light" id="button_AnpassungPerson">Anpassung Person</a><a href="" class="btn btn-light" id="button_AnpassungDB">Anpassung DB</a>
                                        <p></p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                      </div>
                      </div>
                         </div>
           </div>
</template>

<script>
  export default{


  
  data() {
    return {
      cardtitle: "Hello",
      cardtext: "This is a demo text",
      cardimage: ['http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg','http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg','http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg','http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg','http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg','http://blog.usabilla.com/wp-content/uploads/flat_design3.jpg', 'https://cdn.pixabay.com/photo/2018/02/24/18/00/row-pension-3178766_960_720.jpg' ]

    }
  },

}
</script>
</script>
