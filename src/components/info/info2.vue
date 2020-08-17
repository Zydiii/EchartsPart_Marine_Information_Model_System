<template>
    <div class="infoModal">
      <Modal
        v-model="modalShow"
        :title="name"
        >
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
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
            modalShow: false,
            ID: ''
        }
    },
    mounted () {
        this.$nextTick(function () {          
            this.modalShow = this.show,
            this.ID = this.id
        })
    }
}
</script>

<style>

</style>