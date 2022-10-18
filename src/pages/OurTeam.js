import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OurTeam = () => {
    return (
        <>
            <section className="ourteam container">
                <p className="featuredprop titletext "> Nuestros agentes</p>
                
                <div className="grid-1-3">
                    <div className='agente'>
                        <div className="content-image">
                            <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-16-at-8.16.04-PM.jpeg" ></img>

                            <h2 className="namea">Norma Angélica Arteaga Ruiz</h2>
                        </div>
                        
                        <div className="content-text">
                            <div className="rrddss">
                                <a className="icon-contact" href="https://wa.me/+525519539803" target="_blank"><FaPhoneAlt size={16} /></a>
                                <a  className="icon-contact" href="mailto:angelicaarteaga@ankararealestate.com.mx" target="_blank"><MdEmail size={20} /></a>
                            </div>

                            <div className='team-text'>
                                Co Autora Best Seller en Amazon de 2 libros y Asesora Certificada.
                                10 años de éxitos en Bienes Raíces. Fundadora de una Oficina Inmobiliaria, miembro de la Asociación Mexicana de Profesionales Inmobiliarios.
                                Actualmente es Directora de Inmobilaria Quality Arteaga, ofreciendo servicios de alto valor en la promoción y venta de las propiedades que sus clientes le confían para venderlos en el menor tiempo posible al mejor precio.
                            </div>
                        </div>
                    </div>

                    <div className='agente'>
                        <div className="content-image">
                            <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-10-at-9.25.41-AM.jpeg" ></img>
                                        
                            <h2 className="namea">Claudia Grisel Canchola Granados</h2>
                        </div>
                        
                        <div className="content-text">
                            <div className="rrddss">
                                <a className="icon-contact" href="https://wa.me/+525515108737" target="_blank"><FaPhoneAlt size={16} /></a>
                                <a  className="icon-contact" href="mailto:claudiacanchola@ankararealestate.com.mx" target="_blank"><MdEmail size={20} /></a>
                            </div>

                            <div className='team-text'>
                                LAE con Maestría en Innovación para el desarrollo empresarial en el ITESM.
                                20 años de experiencia en el sector comercial. Desempeñó puestos directivos en el área de ventas, atención al cliente y desarrollo de experiencias de compra al cliente en Sony Comercio de México. 6 años de éxitos en Bienes Raíces.
                                Actualmente socia directora de Ankara Bienes Raices, donde su mayor reto es lograr que sus clientes tengan una experiencia de compra extraordinaria.
                            </div>
                        </div>
                    </div>

                    <div className='agente'>
                        <div className="content-image">
                            <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-21-at-2.48.19-PM.jpeg" ></img>
            
                            <h2 className="namea">Edgar Montiel</h2>
                        </div>

                        <div className="content-text">
                            <div className="rrddss">
                                <a className="icon-contact" href="https://wa.me/+527222407608" target="_blank"><FaPhoneAlt size={16} /></a>
                                <a  className="icon-contact" href="mailto:edgarmontiel@ankararealestate.com.mx" target="_blank"><MdEmail size={20} /></a>
                            </div>

                            <div className='team-text'>
                                Empresario mexicano con más de 18 años de experiencia en negocios en el giro de salud, alimentos, financieros y bienes raíces.
                                Por esa razón a lo largo de su vida como empresario e inversionista se ha destacado como speaker con mas de 8,000 horas hablando en público en temas de negocios, ventas, conducta humana y educación financiera.
                                <br />
                                Certificado en Estados Unidos con personas de la talla de John Maxwell, Blair Singer, Daniel Goleman y Tony Robbins, logró romper un récord de la Lección de Educación Financiera más grande del Mundo de la mano del escritor del libro Padre Rico Padre Pobre Robert kiyosaki, ha escrito artículos en Forbes en temas de educacion financiera y ha compartido escenario con diferentes personalidades del mundo de los negocios como Carños Muñoz, Diego Dreyfus, entre otros.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam