<template>
  <div class="home">
    <div class="grid surface-0  text-800">
        <div class="col-12 md:col-12 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1">Diabetic retinopathy</span>
                <div class="text-6xl text-primary font-bold mb-3">Where Earlier cure is more important...</div>
                
                 <div class="text-xl text-success font-bold mb-3">Using Artificial intelligence we work on detecting the DR in different stages.</div>
                <p class="mt-0 mb-4 text-700 line-height-3">Diabetic retinopathy is the leading cause of blindness in the working-age population of the developed world. It is estimated to affect over 93 million people.</p>
                
                <Button label="Check online" v-on:click="Check_page()" class="mr-3 p-button-raised"></Button>
                <Button label="How it works" class="p-button-outlined"></Button>
            </section>
        </div>
        
    </div>
    <Panel header="Stages of Diabetic Retinoapthy">
    <div class="grid bg-bluegray-200">
              <div class="col-12 md:col-6 lg:col-6 ">
                      <Fieldset class="bg-cyan-700 hover:bg-cyan-900 text-white " legend="Stage 1: background retinopathy">
                        At this stage:

                  your sight is not affected, although you're at a higher risk of developing vision problems in the future
                  you do not need treatment, but you'll need to take care to prevent the problem getting worse – read more about preventing diabetic retinopathy
                  the chances of your sight getting worse are higher if both of your eyes are affected
                        
                      </Fieldset>
              </div>
              <div class="col-12 md:col-6 lg:col-6">
                          <Fieldset class="bg-cyan-700 hover:bg-cyan-900 text-white"  legend="Stage 2: pre-proliferative retinopathy">
                            This means that more severe and widespread changes are seen in the retina, including bleeding into the retina.

                      At this stage:

                      there's a high risk that your vision could eventually be affected
                      you'll usually be advised to have more frequent screening appointments every 3, 6, 9 or 12 months to monitor your eyes
                            
                          </Fieldset>
              </div>
              <div class="col-12 md:col-6 lg:col-6">
                      <Fieldset class="bg-cyan-700 hover:bg-cyan-900 text-white"   legend="Stage 3: proliferative retinopathy">
                      This means that new blood vessels and scar tissue have formed on your retina, which can cause significant bleeding and lead to retinal detachment, where the retina pulls away from the back of the eye.

                  At this stage:

                  there's a very high risk you could lose your vision
                  treatment will be offered to stabilise your vision as much as possible, although it will not be possible to restore any vision you've lost
                        
                      </Fieldset>
              </div>
              <div class="col-12 md:col-6 lg:col-6 ">
                      <Fieldset class="bg-cyan-700 hover:bg-cyan-900 text-white"   legend="Stage 4: Diabetic maculopathy">
                      In some cases, the blood vessels in the part of the eye called the macula (the central area of the retina) can also become leaky or blocked. This is known as diabetic maculopathy.

                  If this is detected:

                  there's a high risk that your vision could eventually be affected
                  you may be advised to have more frequent specialised testing to monitor your eyes
                  you may be referred to a hospital specialist to discuss treatments that can help stop the problem getting worse
                        
                      </Fieldset>
              </div>
    </div>
    </Panel>
    

           
  
  </div>
<!-- Features -->

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    Check_page()
    {
      this.$router.push('/Check')
      
    }
  }
}
</script>
