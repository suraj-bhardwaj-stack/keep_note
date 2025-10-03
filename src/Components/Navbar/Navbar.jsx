import logo from '../../assets/header-logo.png'

function Navbar() {
  return (
    <header className='flex items-center gap-4 p-4 bg-[#085fcb] shadow-lg shadow-indigo-500/40'>
        <div className="logo">
            <img className='w-14' src={logo} alt="Keep-Note" />
        </div>
        <div className="brand-name">
            <strong className='text-4xl text-white'>Keep-Notes</strong>
        </div>
    </header>
  )
}

export default Navbar