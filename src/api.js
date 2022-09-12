export const getItem = () => new Promise((res) => {
    setTimeout(() => res(
        {
            nombre: 'mar',
            descripcion: 'cuadro de 50x70cm',
            stock: '6'
        }
    ), 2000)
})