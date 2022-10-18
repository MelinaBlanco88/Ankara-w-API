import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './pages.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
      <section className="footerclass">
        <div class="container grid-1-3">
          <div className="column-footer">
            <div className="margintop5"> 
            <img className="footer-logo" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/logo-ankara.png" alt="pictureProp" /></div>
            <p className='pfoot'>Ankara es una empresa que nace de la necesidad de crear una experiencia exclusiva al cliente en una búsqueda de un hogar único, exclusivo y prestigioso.</p>
            <Link to="/nosotros"  className='ptextfooter bmmmn'><button className="buttonsearch2 bmmm"><p className="text5"> NOSOTROS </p> </button> </Link>
          </div>

          <div className="column-footer">
            <h3 className='section-title'>Links</h3>
            <div className='link-list'>
              <Link to="/home"  className='ptextfooter'> ► Home </Link>
              <Link to="/propiedades"  className='ptextfooter'> ► Propiedades </Link> 
              <Link to="/nosotros"  className='ptextfooter'> ► Nosotros </Link> 
              <Link to="/contacto"  className='ptextfooter'> ► Contacto </Link>
            </div>
          </div>

          <div className="column-footer">
            <h3 className='section-title'>Contáctanos</h3>

            <p className=" psmcolorwhitex">Ankara Real Estate</p>
            
            <div className="text-contact"><MdEmail size={16} />   
              <a href="mailto:contacto@ankararealestate.com.mx" target="_blank" className="psm2">contacto@ankararealestate.com.mx</a>
            </div>

            <div className="text-contact"><FaPhoneAlt size={16} />
              <a href="https://wa.me/+525515108737" target="_blank" className="psm2">(+52 ) 55 1510 8737</a>
            </div>

            <div className="socialmmm socialmedia">
              <a className="icon-contact" href="https://www.facebook.com/AnkaraRealEstateMx/" target="_blank"><BsFacebook size={20} /></a>
              <a  className="icon-contact" href="https://www.instagram.com/ankararealestatemx/" target="_blank"><BsInstagram size={20} /></a>
            </div>         
          </div>
        </div>
      </section>
    </>
    )
}



export default Footer