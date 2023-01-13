 function CardProyects({ulrImg = './', page}) {

    function cambiarPagina() {
        window.open(page);
    }

    return(
        <div className="h-52 w-96 flex border-stone-900 rounded-lg" onClick={cambiarPagina}>
            <img src={ulrImg} alt="proyect-img" className="w-60 h-full border-stone-900 border-t-2 border-b-2 border-l-2 rounded-tl-2xl rounded-bl-2xl object-cover"/>
            <div className="w-36 h-full border-stone-900 border-t-2 border-b-2 border-r-2 rounded-tr-2xl rounded-br-2xl p-3">
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
 }

 export default CardProyects