import loader from '/loader2.webp'

function Loader() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img src={loader} alt="" className='' />
    </div>
  )
}

export default Loader