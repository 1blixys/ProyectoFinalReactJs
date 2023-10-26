import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="txthistoria">
        <h2 className='main-title'>Bienvenidos a LIMON RESTO BAR</h2>
        <h3>Revolucionamos tu forma de comer</h3>
        
        <p> Somos un nuevo emprendimiento enfocado en ofrecer un menu novedoso y moderno en la ciudad de Gonzales Catan.</p>
        
        <p> Bar inaugurado en 2023 cuenta con alternativas para todos los gustos, dejate sorprender por las diferentes alternativas que te ofrecemos.</p>

        
        <p>Cortes vacunos clasicos, para aquellos conservadores del sabor que buscan disfrutar de una buena carne asada en nuestra parrilla tradicional. Tip de la casa: acompañar con un buen vino 😉 </p>
        <p>Platos veganos, por que queremos que todos nuestros clientes se sientan incluidos en nuestro menu ofrecemos deliciosos platos veganos, en abundancia y calidad.</p>
        <p>Tambien contamos con un amplio menu que incluye empanadas, pizzas al horno de barro, langostinos a las brasas, provoletas y hasta ensalada de sushi.</p>
        
        <p>Y no nos olvidemos de mencionar a nuestro querido barman y sus magníficos tragos de autor.
        Todo esto y mucho mas te esta esperando en Limon Resto Bar. Solo faltas vos!</p>
    </div>
  )
}

export default Nosotros