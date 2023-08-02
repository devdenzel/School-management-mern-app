
function Home () {
    return (
      <section id='Main-Div'>
        {/* Hero Section */}
        <div className='flex flex-col  xl:flex-row xl:m-20 xl:pt-36'>
          <div className='text-center p-10 xl:-mt-10 xl:-mb-40 xl:text-left xl:px-30'>
            <h1 className='name text-5xl text-green-400 font-bold xl:text-[70px]'>
              Seemless,
            </h1>
            <h1 className='herotext text-6xl font-bold text-gray-900'>
              Simple Payments
            </h1>
            <p className='text-base xl:text-sm text-justify tracking-tight pb-5 lg:text-center md:text-center xl:text-left'>
              ActivEasy enables African students make school payments without the usual hassle<br></br>Payments are easy, seemless and very secure.
            </p>
            <a
              Link
              to=''
              className='bg-green-400 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md text-white font-bold'
            >{/* Add ripple effect */}
              Learn More
            </a>
          </div>
          <div className='hero-img xl:-mb-20  xl:-mt-10 xl:-ml-10 md:mx-auto'>
            <img src='images/heroimage.png' alt='' />
          </div>
        </div>
  
        {/* About Platform */}
      
  
        {/* Features */}
        <div>
          <h1 className='text-3xl font-extrabold leading-10 heading text-gray-900 md:text-center py-40 xl:py-20 text-center -mb-20'>
            Why ActivEasy?
          </h1>
          <div className='details block justify-between leading-10 xl:flex xl:flex-row  xl:leading-8 lg:space-x-20 lg:text-center lg:leading-8 lg:flex md:flex m-10 xl:m-20 xl:p-40 md:space-x-8 xl:-mt-20 md:flex-col md:gap-10'>
            <div className='p-10 bg-gray-100  mb-10 xl-mb-0 md:mb-0 lg:mb-0 text-base rounded-lg hover:bg-slate-300 text-center drop-shadow-xl'>
              <img className='mx-auto w-1/4' src='images/resolved.png' alt='' />
              <h1 className='text-xl font-bold'>Swift processing time</h1>
              <p>
                Transaction are quick and seemless with better processing duration
              </p>
            </div>
            <div className='p-10 bg-gray-100  mb-10 xl-mb-0 md:mb-0 lg:mb-0 text-base rounded-lg hover:bg-slate-300 text-center drop-shadow-xl'>
              <img className='mx-auto w-1/4' src='images/handshake.png' alt='' />
              <h1 className='text-xl font-bold'>User friendly</h1>
              <p>
                ActivEasy can easily be navigated weather you're tech sarvy or not
              </p>
            </div>
            <div className='p-10 bg-gray-100 mb-10 xl-mb-0 md:mb-0 lg:mb-0 text-base rounded-lg hover:bg-slate-300 text-center drop-shadow-xl'>
              <img className='mx-auto w-1/4' src='images/dollar.png' alt='' />
              <h1 className='text-xl font-bold'>Low charges</h1>
              <p>We pride ourselve for being considerate about your charges.</p>
            </div>
            <div className='p-10 bg-gray-100  mb-10 xl-mb-0 md:mb-0 lg:mb-0 text-base rounded-lg hover:bg-slate-300 text-center drop-shadow-xl'>
              <img className='mx-auto w-1/4' src='images/shield.png' alt='' />
              <h1 className='text-xl font-bold'>Superb Security</h1>
              <p>
                ActivEasy users and data and highly guided with latest password hashing technology(bcrypt)
              </p>
            </div>
          </div>
        </div>
  
        {/* More Features */}
        <div className='flex flex-col p-10  py-10 items-center  xl:flex-row xl:px-40 justify-between bg-gray-800 text-white'>
          <div className='xl:text-center xl:p-20 xl:basis-1/2 leading-10 pt-10 md:text-center'>
            <div className=''>
              <h1 className='heading text-3xl font-bold xl:text-[45px] md:py-10 lg:py-10 xl:leading-10 text-left tracking-tight xl:text-left md:text-left'>
                All the features your need in a collection of payment solution,
                with ActivEasy you can collect/make payments for:{' '}
              </h1>
            </div>
            <div>
              <div className='flex'>
                <img className='w-[20px]' src='images/checked.png' alt='' />
                Departmental Dues
              </div>
              <div className='flex'>
                <img className='w-[20px]' src='images/checked.png' alt='' />
                Faculty Dues
              </div>
              <div className='flex'>
                <img className='w-[20px]' src='images/checked.png' alt='' />
                Graduation Fees
              </div>
            </div>
          </div>
          <div className='justify-center'>
            <img src='images/phone.png' alt='' />
          </div>
        </div>
      
        {/* CTA */}
        
      </section>
    )
  }
  export default Home
  