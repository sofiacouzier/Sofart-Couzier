import foto from '../assets/foto.webp'

const Navbar = () => {
    return (
        <div className="nav">
            <img src={foto} alt="" className='foto' />
            <button className="botones">Home</button>
            <button className="botones">productos</button>
            <button className="botones">contacto</button>
        </div>
    )
}
export default Navbar