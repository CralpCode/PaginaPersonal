function Navbar({imgLogo}) {

    return (
      <div className="h-12 w-full flex items-center border-b-2 border-stone-900 ">
        <img src={imgLogo} alt="logo" className="h-7 w-24 object-cover ml-2"/>
      </div>
    )
  }
  
  export default Navbar