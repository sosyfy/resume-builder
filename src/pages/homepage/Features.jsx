import React from 'react'

function Features() {
    const row = [
        {
            heading: "sfdgfhgj",
            content: "dfghgfd",
            imgUrl: "1"
        },

    ]
  return (
    <section class="our_services_area section-padding-100-70" id="services">
    <div class="container">
        
        <div class="section-heading text-center">
            <div class="dream-dots justify-content-center wow fadeInUp">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <h2 class="" >Our Main Features</h2>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
            

        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                {row.map((p)=>(  
                <div class=" text-center mb-20" key={p.heading}>
                    <div class="service_icon">
                        <img src={`https://geeko.netlify.app/img/icons/f${p.imgUrl}.png`} alt="" />
                    </div>
                    <h6>{p.heading}</h6>
                    <p>{p.content}</p>
                </div>
                ))}
            </div>  
        </div>
    </div>
</section>
  )
}

export default Features