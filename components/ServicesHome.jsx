import React from 'react'

const servicesList = [
  {
    logo: '/path/to/logo1.png',
    title: 'Service 1',
    description: 'Description of Service 1',
    button: '/path/to/image1.jpg',
  },
  {
    logo: '/path/to/logo1.png',
    title: 'Service 2',
    description: 'Description of Service 2',
    button: '/path/to/image2.jpg',
  },
  {
    logo: '/path/to/logo1.png',
    title: 'Service 3',
    description: 'Description of Service 3',
    button: '/path/to/image3.jpg',
  },
]
const ServicesHome = () => {
  return (
    <section>
      <div>
        <h2>SERVICES</h2>
        <h3>My Premium Benefits</h3>
      </div>

      {/* Services list */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
        {servicesList.map((service, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            <img
              src={service.logo}
              alt={service.title}
              className='w-full h-32 object-cover'
            />
            <div className='p-4'>
              <h4 className='text-xl font-semibold mb-2'>{service.title}</h4>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <button className='bg-[#c5a95e] text-white px-4 py-2 rounded-md hover:bg-[#a28620] transition'>
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesHome
