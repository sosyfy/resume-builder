import React from 'react'

function Testimonials() {
    return (
        <section id='testimonials' className='scroll-mt-28 '>
            <div class="mx-auto max-w-screen-xl px-4  pb-16 sm:px-6 lg:px-8">
                <div class="items-end justify-between sm:flex pb-16">
                    <div class="max-w-xl">
                        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                            Read trusted reviews from our customers
                        </h2>

                        <p class="mt-8 max-w-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            praesentium natus sapiente commodi. Aliquid sunt tempore iste
                            repellendus explicabo dignissimos placeat, autem harum dolore
                            reprehenderit quis! Quo totam dignissimos earum.
                        </p>
                    </div>
                    <button
                        class="mt-8 inline-flex flex-shrink-0 items-center rounded-full border border-purple-600 px-5 py-3 font-medium text-purple-600 hover:bg-purple-600 hover:text-white sm:mt-0 lg:mt-8"
                    >
                        Read all reviews

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-3 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>

                </div>

                <div class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8" >
                    <div class="mb-8 sm:break-inside-avoid">
                        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                            <p class="leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                                labore ratione doloremque, architecto et illo minus quo tenetur
                                ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                                corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                                ad inventore laudantium est illum voluptatem quis.
                            </p>
                        </blockquote>

                        <div class="mt-4 flex items-center gap-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                class="h-12 w-12 rounded-full object-cover"
                            />

                            <div class="text-sm">
                                <p class="font-medium">Gladis Lennon</p>
                                <p class="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                    <div class="mb-8 sm:break-inside-avoid">
                        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                            <p class="leading-relaxed text-gray-700">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                                quo deserunt quos expedita minima incidunt sed tempora, a architecto
                                consectetur reprehenderit, in repellat voluptatum.
                            </p>
                        </blockquote>

                        <div class="mt-4 flex items-center gap-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                class="h-12 w-12 rounded-full object-cover"
                            />

                            <div class="text-sm">
                                <p class="font-medium">Gladis Lennon</p>
                                <p class="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                    <div class="mb-8 sm:break-inside-avoid">
                        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                            <p class="leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                                beatae incidunt perferendis soluta facilis voluptas dicta
                                repudiandae quasi asperiores libero, exercitationem molestiae autem
                                sapiente dolore nulla non consequatur. Eaque, dolores.
                            </p>
                        </blockquote>

                        <div class="mt-4 flex items-center gap-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                class="h-12 w-12 rounded-full object-cover"
                            />

                            <div class="text-sm">
                                <p class="font-medium">Gladis Lennon</p>
                                <p class="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Testimonials