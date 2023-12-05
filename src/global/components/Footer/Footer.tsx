import Image from 'next/image'
import metaLogo from '../../../../public/images/new-logo-white.svg'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__flex">
        <ul className="footer__list">
          <li className="footer__items">
            <a className="footer__logo-wrapper" href="./index.html">
              <Image
                className="footer__logo-img"
                src={metaLogo}
                alt="metalabs logo"
              />
            </a>
          </li>
          <li className="footer__items">
            <a className="footer__links" href="#courses">
              Курсы
            </a>
            <a className="footer__links" href="#testimonials">
              Отзывы
            </a>
          </li>
          <li className="footer__items">
            <a className="footer__contacts" href="tel:+996705311113">
              + 996 705 311 113
            </a>
            <a className="footer__contacts" href="tel:+996990311113">
              + 996 990 311 113
            </a>
            <a
              className="footer__contacts footer__contacts--location"
              href="https://go.2gis.com/tccgg"
              target="_blanc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 33"
                fill="none"
              >
                <path
                  d="M13.1786 18.0619C15.7008 18.0619 17.7455 16.0172 17.7455 13.495C17.7455 10.9727 15.7008 8.92801 13.1786 8.92801C10.6563 8.92801 8.61161 10.9727 8.61161 13.495C8.61161 16.0172 10.6563 18.0619 13.1786 18.0619Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1786 31.7628C19.2679 25.6735 25.3571 20.221 25.3571 13.495C25.3571 6.76894 19.9046 1.31641 13.1786 1.31641C6.45253 1.31641 1 6.76894 1 13.495C1 20.221 7.08929 25.6735 13.1786 31.7628Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Г. Бишкек, ул. Юсупа Абдрахманова 97А/1
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}