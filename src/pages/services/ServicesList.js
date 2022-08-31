import React from 'react'
import {Link} from 'react-router-dom'
import servicesData from './servicesData'

function ServicesList() {
          
  const services = servicesData.map(service => (
    <h3 key={service._id}>
      <Link className='link' to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
    </h3>
  ))

  return (
    <div className='main'>
      <h1>ServicesList</h1>
      {services}
    </div>
  )
}

export default ServicesList


// const location = useLocation()
// console.log(location)

// {
//   pathname: '/services', 
//   search: '',    // <-- query string
//   hash: '', 
//   state: null, 
//   key: 'mowwvf40'
// }