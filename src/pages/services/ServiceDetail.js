
import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import servicesData from './servicesData'

function ServiceDetail() {
  const {serviceId} = useParams()
  const navigate = useNavigate()

  const thisService = servicesData.find(service => {
    return service._id === Number(serviceId)
  })

  // To go back in path
  function handleClick() {
    navigate('/services')
  }

  return (
    <div className='main'>
      <h1>ServiceDetail</h1>

      <h3>{thisService.name} - ${thisService.price}</h3>
      <p>{thisService.description}</p>
      <button className='btn' onClick={handleClick}>Back</button>
    </div>
  )
}

export default ServiceDetail