import MainNavbar from '../Navbar'
function Mainbar() {
    return (
        <div className='flex flex-1 h-screen w-3/5 flex-col'>
            <div>
                <MainNavbar title="Messages" />
            </div>
        </div>
    )
}

export default Mainbar