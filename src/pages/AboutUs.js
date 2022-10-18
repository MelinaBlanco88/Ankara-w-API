import OurTeam from './OurTeam'
import { Link } from 'react-router-dom'

const Aboutus = () => {
    return (
        <>
            <section className="divtitulo">
                <h1 className="titulo">Nosotros</h1>
            </section>

            <section className="aboutus">
                <div className="infoaboutus">
                    <p className="font titt"> Nuestra experiencia</p>
                    <h3 className="italic stitt font">Hacemos lo que amamos de una manera diferente</h3>
                    <p> Ankara es una empresa que nace de la necesidad de crear una experiencia exclusiva al cliente en una búsqueda de un hogar único,
                        exclusivo y prestigioso.
                        El nombre está inspirado en la ciudad capital de Turquía, por la belleza y delicadez en su arquitectura. </p>
                    <h3 className=" stitt italic">La experiencia de venta de las casas, es con base a la esencia y personalidad de la misma.</h3>

                    <p>
                        Creamos una historia detrás de las propiedades con el acompañamiento de las vivencias de los dueños en los hogares.
                        Nuestras visitas a las propiedades consideran una experiencia del entorno, los compradores pueden conocer las áreas
                        comerciales, de diversión y esparcimiento para tener una idea completa del ambiente en el que vivirán.
                    </p>
                </div>

                <div className="divimgab">
                    <img className="imgab" src="http://malikhassan.com/html/evernest/images/aboutImg.jpg"></img>
                </div>
            </section>

            <section className="buyorsell">
                <h1 className="sliderh2">En decoración coloca siempre una pieza controvertida. </h1>
                <h1 className="sliderh2">Dará tema de conversación a tus invitados </h1>
   
                    <p className="textwhite">Total de propiedades vendidas en los últimos 6 meses:</p>
                    <div className="dflex "> 
                        <div className="circll">  25 </div>
                        <p className="mleft"> PROPIEDADES PREMIUM</p>
                    </div>
            </section>

            <section className="sold"> 
                <img className="imggg imghovdiag" src=" https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.01.31-AM-480x331.jpeg" ></img>
                <img className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.01.11-AM-480x331.jpeg" ></img>
                <img className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.00.55-AM-480x331.jpeg" ></img>
                <img className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.00.16-AM-480x331.jpeg" ></img> 
            </section>   

            <section className="meetouragents">
                <OurTeam />
            </section>
        </>
    )
}

export default Aboutus