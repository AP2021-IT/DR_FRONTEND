<template>
<div class="m-1 p-2">
<div class="bg-surface-400 mt-25">
        <ul class="list-none p-0 m-10 flex align-items-center font-medium mb-3">
            <li>
                <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
            </li>
            <li class="px-2">
                <i class="pi pi-angle-right text-500 line-height-3"></i>
            </li>
            <li>
                <span class="text-900 line-height-3">Listings</span>
            </li>
        </ul>
        <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
            <div>
                <div class="font-medium text-3xl text-900">properties </div>
                <div class="flex align-items-center text-700 flex-wrap">
                    <div class="mr-5 flex align-items-center mt-3">
                        <i class="pi pi-filter mr-2"></i>
                        <span>
                            <!-- sort filter -->
                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="SortBy" />
                        </span>
                    </div>
                   
                </div>
            </div>
            
        </div>
    </div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-4" v-for="(prop,index) in getproperties" v-bind:key="index">
    <Card class="m-3 p-3 box border-round bg-indigo-400" style="height:550px">
    <template #header>
        <img alt="user header" v-bind:src="prop.Image" style="width:100%;height:300px">
    </template>
    <template #title>
        <div class="text-left font-bold text-3xl text-100">{{ prop.Title }}</div>
    </template>
    <template #content>
       <div class="text-left font-bold text-lg text-100"> Address: {{ prop.Address }}</div>
    </template>
    <template #footer>
       <Button type="button" label="Price" icon="pi pi-money-bill" class="p-button-warning" :badge="prop.Price" badgeClass="p-badge-success" /> 
       <Button type="button" label="View" icon="pi pi-eye" class="p-button-success" style="margin-left: .5em"></button>
    </template>
</Card>



</div>

</div>
    

        

</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
     name: 'listings',
  components: {
  },
  data() {
	return {
		selectedCity: null,
		cities: [
			{name: 'Price Low', code: 'PL'},
			{name: 'Price High', code: 'PH'},
		]
	}
   
},
 computed:{
        ...mapGetters([
            'getproperties'
        ])
    },
    created(){
            this.$store.dispatch("get_list")
            
        }
}
</script>
<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
    height: 3;
}

.country-item {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>