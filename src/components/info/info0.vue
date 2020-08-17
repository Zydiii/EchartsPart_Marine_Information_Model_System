<template>
    <div class="infoModal">
      <Modal
        v-model="modalShow"
        :title="title"
        >
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
      {{id}}
      {{name}}
      {{show}}
      {{modalShow}}
      {{ID}}
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        show: Boolean,
        name: String
    },
    methods: {
        getInfo () {
            
        }
    },
    data () {
        return {
            data: ''
        }
    },
    mounted () {
        this.$nextTick(function () {    
            console.log('this.show' + this.show)
            console.log('this.modalShow' + this.modalShow)
        })
    },
    computed: {
        modalShow: function () {
            return this.show
        },
        ID: function () {
            return this.id
        },
        title: function () {
            return this.name
        }
  }
}
</script>

<style>

</style>