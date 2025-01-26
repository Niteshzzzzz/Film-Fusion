import notfound from '/notfound.gif'

function Loader() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img src={notfound} alt="" className='' />
    </div>
  )
}

export default Loader