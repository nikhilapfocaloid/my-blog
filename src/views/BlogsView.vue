<template>
  <div class="blogs">
    <section class="tm-section">
      <div class="container-fluid">
        <div class="row">
          <div v-for="blog in blogs" :key="blog.id" class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                  <h4 class="tm-margin-b-20 tm-gold-text">{{ blog.title }}</h4>
                  <p class="tm-margin-b-20">{{ blog.body }}</p>
                  <a href="#" class="tm-btn text-uppercase">Detail</a>    
              </div>  
          </div>
        </div> <!-- row -->
      </div>
    </section> 
  </div>
</template>

<script>
import { getAllBlogs } from '../services/BlogService'
export default {
  name: 'BlogsView',
  data() {
      return {
          blogs: []
      }
  },
  methods: {
    getAllUsers() {
      getAllBlogs().then(response => {
        console.log(response)
        this.blogs = response
      })
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>
