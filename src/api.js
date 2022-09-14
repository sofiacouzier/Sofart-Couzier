export const getItem = () => new Promise((res) => {
    setTimeout(() => res(
        {
            nombre: '"Mar", el producto mas comprado',
            descripcion: 'cuadro de 50x70cm',
            stock: '6',
            precio: '1500'
        }
    ), 2000)
})