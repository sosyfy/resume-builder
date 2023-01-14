import React from 'react'

function Testimonials() {
    return (
        <section id='testimonials' className='scroll-mt-28 '>
            <div className="max-w-screen-xl px-4 pb-16 mx-auto sm:px-6 lg:px-8">
                <div className="items-end justify-between pb-16 sm:flex">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Read trusted reviews from our customers
                        </h2>

                        <p className="max-w-lg mt-8 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            praesentium natus sapiente commodi. Aliquid sunt tempore iste
                            repellendus explicabo dignissimos placeat, autem harum dolore
                            reprehenderit quis! Quo totam dignissimos earum.
                        </p>
                    </div>
                    <button
                        className="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white sm:mt-0 lg:mt-8"
                    >
                        Read all reviews

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-3"
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

                <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8" >
                    <div className="mb-8 sm:break-inside-avoid">
                        <blockquote className="p-6 shadow rounded-xl bg-gray-50">
                            <p className="leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                                labore ratione doloremque, architecto et illo minus quo tenetur
                                ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                                corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                                ad inventore laudantium est illum voluptatem quis.
                            </p>
                        </blockquote>

                        <div className="flex items-center gap-4 mt-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                className="object-cover w-12 h-12 rounded-full"
                            />

                            <div className="text-sm">
                                <p className="font-medium">Gladis Lennon</p>
                                <p className="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 sm:break-inside-avoid">
                        <blockquote className="p-6 shadow rounded-xl bg-gray-50">
                            <p className="leading-relaxed text-gray-700">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                                quo deserunt quos expedita minima incidunt sed tempora, a architecto
                                consectetur reprehenderit, in repellat voluptatum.
                            </p>
                        </blockquote>

                        <div className="flex items-center gap-4 mt-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                className="object-cover w-12 h-12 rounded-full"
                            />

                            <div className="text-sm">
                                <p className="font-medium">Gladis Lennon</p>
                                <p className="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 sm:break-inside-avoid">
                        <blockquote className="p-6 shadow rounded-xl bg-gray-50">
                            <p className="leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                                beatae incidunt perferendis soluta facilis voluptas dicta
                                repudiandae quasi asperiores libero, exercitationem molestiae autem
                                sapiente dolore nulla non consequatur. Eaque, dolores.
                            </p>
                        </blockquote>

                        <div className="flex items-center gap-4 mt-4">
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                                className="object-cover w-12 h-12 rounded-full"
                            />

                            <div className="text-sm">
                                <p className="font-medium">Gladis Lennon</p>
                                <p className="mt-1">Head of SEO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Testimonials