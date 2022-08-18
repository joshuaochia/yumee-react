import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card2.css'

const TestimonialCard2 = (props) => {
  return (
    <div
      className={`testimonial-card2-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card2-testimonial">
        <svg viewBox="0 0 1024 1024" className="testimonial-card2-icon">
          <path
            d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
            className=""
          ></path>
        </svg>
        <span className="testimonial-card2-text">{props.quote}</span>
        <span className="testimonial-card2-text1">{props.name}</span>
        <span className="testimonial-card2-text2">{props.name1}</span>
      </div>
      <img
        alt={props.profile_alt}
        src={props.profile_src}
        className="testimonial-card2-image"
      />
    </div>
  )
}

TestimonialCard2.defaultProps = {
  name: 'Frank Gallegos, Actor',
  quote:
    '"Joyful Hearts was there for us when we needed them most! My mom needed full time care after her stroke and we were so grateful to Allan and his team. They put together a professional team of caregivers that provided her with excellent care almost immediately. Allan was always there to help and his roster of experienced professional caregivers assured us that mom was always going to get the care she needed. Thank you!"',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
  rootClassName: '',
  name1: '- Los Angeles',
}

TestimonialCard2.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  name1: PropTypes.string,
}

export default TestimonialCard2
