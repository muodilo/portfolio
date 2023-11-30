import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/* <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
      </div> */}

    
      
<Carousel data-bs-theme="dark" className='testimonials__container'>
      <Carousel.Item>
      <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
      </Carousel.Item>
      <Carousel.Item>
      <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis sapiente reiciendis sunt quidem earum, esse quibusdam veniam qui omnis repudiandae dolor distinctio, at repellat corporis blanditiis aperiam consectetur praesentium!
            </small>
        </article>
      </Carousel.Item>
    </Carousel>



    </section>
  )
}

export default Testimonials