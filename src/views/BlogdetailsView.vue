<template>
    <div class="blog-details">
        <section class="tm-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                        <div class="tm-blog-post">
                            <h3 class="tm-gold-text">{{ blog.title }}</h3>
                            <p>{{ blog.body }}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>   
    </div>
</template>

<script>
    import { getBlogDetails } from '../services/BlogService'
    export default {
        name: 'BlogDetailsView',
        data() {
            return {
                blog: []
            }
        },
        methods: {
            getBlogData() {
                getBlogDetails(this.$route.params.id).then(response => {
                    this.blog = response
                })
            }
        },
        created () {
            this.getBlogData();
        }
    }
</script>
