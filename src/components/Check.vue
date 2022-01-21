<template>
<div class="surface-card  shadow-2 border-round px-4 py-5 md:px-6 lg:px-8 ">
                <div class="text-900 text-3xl font-medium mb-3">Check your level of disease</div>
                <span class="text-600 font-medium line-height-3">upload and wait for result!</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Check accurate!</a>
            
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">           
      
        <div class="surface-card p-4 shadow-2 border-round w-full ">
            
            
                <label for="password1" class="block text-900 font-medium mb-2">Please input both Eye Images:</label>
                <FileUpload type="file" id="file" name="file" ref="file" :multiple="true"  :maxFileSize="10000000" v-on:change="onChangeFileUpload()" />
                              <div class="flex align-items-center justify-content-between mb-6" v-if='show'> 
                                  <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Dont Foregt Image upload!</a>
                              </div>
                              
                                <div class="grid p-fluid" v-else>
                                      <div class="col-12 md:col-6">
                                          <div class="p-inputgroup">
                                              <Button label="Left Eye Accuracy"/>
                                              <InputText :placeholder="status.accuracy"/>
                                          </div>
                                      </div>
                                      <div class="col-12 md:col-6">
                                          <div class="p-inputgroup">
                                              <Button label="Left Eye Status"/>
                                              <InputText :placeholder="status.stage"/>
                                          </div>
                                      </div>
                                      <div class="col-12 md:col-6">
                                          <div class="p-inputgroup">
                                              <Button label="Right Eye Accuracy" class="p-button-secondary" />
                                              <InputText :placeholder="status.accuracy"/>
                                          </div>
                                      </div>
                                      <div class="col-12 md:col-6">
                                          <div class="p-inputgroup">
                                              <Button label="Right Eye Status" class="p-button-secondary" />
                                              <InputText :placeholder="status.stage"/>
                                          </div>
                                      </div>
                                </div>
                                      
                      
                              
            
        </div>
    </div>
        

        
</div> 
    <Button label="Check DR" v-on:click="submitFile()" icon="pi pi-person" class="w-full"></Button>

</div>
</template>
<script>
import axios from 'axios'
export default {
  name:"Check",
    data(){
      return {
        file: '',
        file2:'',
        status:"",
        status2:"",
        show:true
      }
    },
    methods: {
      /*
        Submits the file to the server
      */
     second(){

     },
      submitFile(){
        /*
                Initialize the form data
            */
           
            
        /*
          Make the request to the POST /single-file URL
        */
         console.log("left image")
         console.log(this.file)
          let formData = new FormData();
            formData.append('file', this.file);
          axios.post( 'http://localhost:5000/predict/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(Response=>{
          console.log(' left SUCCESS!!');
          console.log(Response)
          console.log(Response.data)
          this.status=Response.data
         
          
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
        console.log("right image")
        let formData2 = new FormData();
            formData2.append('file', this.file2);
        axios.post( 'http://localhost:5000/predict/',
                formData2,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(Response=>{
          console.log(' right SUCCESS!!');
          console.log(Response)
          console.log(Response.data)
          this.status2=Response.data
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
        this.file2 = this.$refs.file.files[1];
        console.log(this.file)
        console.log(this.file2)
      },
    }
}
</script>