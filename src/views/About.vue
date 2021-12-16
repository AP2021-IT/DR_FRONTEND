<template>
  <div class="about">
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
<div class="surface-0 text-center">
        <div class="mb-3 font-bold text-2xl">
            <span class="text-900">One Product, </span>
            <span class="text-blue-600">Many Solutions</span>
        </div>
        <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        <div class="grid">
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">Built for Developers</div>
                <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-lock text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
                <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-check-circle text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">Easy to Use</div>
                <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-globe text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
                <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-github text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">Open Source</div>
                <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
            </div>
            <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                    <i class="pi pi-shield text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
                <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
            </div>
        </div>
    </div>
  </div>
</template>
