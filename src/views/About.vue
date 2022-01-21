<template>
  <div class="about">
      <Timeline :value="events1" layout="horizontal" align="top">
                <template #content="slotProps">
                    {{slotProps.status}}
                </template>
            </Timeline>
    <h1>This is an about page</h1>
    <div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container">
        <div class="surface-500 hover:surface-700 text-white font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">hover:surface-700</div>
        <div class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">hover:bg-cyan-700</div>
        <div class="bg-orange-500 hover:bg-orange-700 text-white font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">hover:bg-orange-700</div>
    </div>
</div>
<div class="card">
    <div class="relative card-container orange-container md:p-5">
        <div class="static bg-orange-100 font-bold text-gray-900 border-round p-4" style="min-width: 300px; min-height: 200px;">
            <p class="mt-0">Static</p>
            <div class="static md:absolute bottom-0 left-0 bg-orange-500 border-round font-bold text-white p-4" style="min-width: 120px; min-height: 70px">
                Absolute on medium screens / Static on small screens
            </div>
        </div>
    </div>
</div>

  </div>
</template>
<script>
export default {
    data() {
        return {
            events1: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    }
}
</script>