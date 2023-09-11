import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>CAIDIM - Productos de Limpieza</h3>
            <div>
                <button>Aromatización Ambientes</button>
                <button>Cuidado de Manos</button>
                <button>Cuidado de Piletas</button>
                <button>Higiene de cocina, baños y limpieza general</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 