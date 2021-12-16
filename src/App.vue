<template>
<div>
   <div class=" static box shadow-8   font-bold" style="marign-bottom:15px">
  <Menubar :model="items" class="p-button-success">
            <template #start>
              <!-- v-navword  -->
    <h1   style="padding-right:15px;padding-left:30px;font-size:30px"><i class="" style="fontSize: 2.5rem;"></i><b>Diabetic retinopathy</b></h1>
                
            </template>
            <template  >
            <Button label="Listings" class="p-button-raised p-button-rounded" />
         </template>
             
            <template #end>
               
            </template>
        </Menubar>
   </div>
   
   <div style="padding-top:100px">
      
  <router-view/>
  </div>
  </div>
</template>

<script>

export default {
  
  name: 'App',
  components: {
  
  },
  directives:{
   navword:{

      beforeMount (el) {
         
         const colors=['#53cf5f','pink','white','red','#f20ad3']
         let i=0
         setInterval(()=>{
            el.style.color = colors[i++]
            if(i>colors.length-1){
               i=0
            }
         },500)
         
        
        
      },
     
        
     },
     focus:{
      inserted: function (el) {
     el.focus()
    }
     }

  },
     data() {
        return {
           
            items: [
                {
                   label:'DR',
                   icon:'pi pi-fw pi-home',
                   style:"p-button-success",
                   
                   command: (event) => {
          
            console.log(event.item)
            this.$router.push('/')
        },
                },
                {
                   label:'Check',
                   class:'p-button-secondary',
                   icon:'pi pi-fw pi-list',
                   command: (event) => {
          
            console.log(event.item)
            this.$router.push('/Page')}
                   
                   
                      },
                   
                
                {
                   label:'About',
                   icon:'pi pi-fw pi-phone',
                    command: (event) => {
          
            console.log(event.item)
            this.$router.push('/Contact')}
                   
                   
                      },
                      
                {
                  
                   
                }
             ]
        }
    },
    methods:{
      
    }
}


</script>
<style lang="scss" scoped>
::v-deep(.p-menubar) {
    
        position: fixed;
        z-index: 1030;
        height:100;
        width: 100vw;
        left:0;
        top:0;
      //   border : 1px solid #673AB7;
      background: #673AB7;
    

}
::v-deep(.p-menubar){
   .p-menuitem {
        padding:2px;
        border-radius: 25px;
        margin:2px;
        position: sticky;
      background:#eeecf0;
        border : 1px solid #eeecf0;
         color:#eeecf0;}
   .p-menuitem-text{
      color:#eeecf0;
      font-size:  15px;
      font-weight: bold;

   }
    

}
::v-deep(.p-menubar){
   .p-menuitem-text{
      color:#eeecf0;

   }
    

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
