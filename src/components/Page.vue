<template>
    <div>
        
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-6">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                <img class="md:ml-auto block md:h-full" style="height:10px,width:30px" src="http://sosdoctors.com.au/wp-content/uploads/2017/01/types-of-diabetic-retinopathy.jpg" alt="">
            </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-6">
                                    
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3">Check your level of disease</div>
                <span class="text-600 font-medium line-height-3">upload and wait for result!</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Check accurate!</a>
            </div>

            <div>
                

                <label for="password1" class="block text-900 font-medium mb-2">image</label>
                <Input type="file" id="file" name='file' ref="file" class="w-full mb-3"  v-on:change="onChangeFileUpload()"/>
                <!-- <p-fileupload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :max-file-size="1000000" @upload="onUpload"></p-fileupload> -->

                <div class="flex align-items-center justify-content-between mb-6" v-if='show'>
                    
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Dont Foregt Image upload!</a>
                </div>
                <div class="flex align-items-center justify-content-between mb-6" v-else>
                    
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">status: {{ status }}</a>
                </div>


                <Button label="Check DR" v-on:click="submitFile()" icon="pi pi-user" class="w-full"></Button>
            </div>
        </div>
                </div>
        
        
    </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
        file: '',
        status:"",
        show:true
      }
    },
    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
          let formData = new FormData();
            formData.append('file', this.file);
        /*
          Make the request to the POST /single-file URL
        */
            axios.post( 'http://localhost:5000/predict/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(Response=>{
          console.log('SUCCESS!!');
          console.log(Response)
          console.log(Response.data)
          this.status=Response.data
          this.show=false
          
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
       onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
}
</script>