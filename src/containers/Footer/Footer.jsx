import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="py-3">
        <div className="copy-bottom-txt text-center py-3">
           <p> 
              © 2021 Places for lunch "Хочу есть". All Rights Reserved | Design by Abdrzkv
           </p>
        </div>
        <div className="social-icons mt-lg-3 mt-2 text-center">
           <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              <li style={{marginLeft: '15px', fontSize: '18px', fontWeight: 'bolder'}}>Главная</li>
              <li style={{marginLeft: '15px', fontSize: '18px', fontWeight: 'bolder'}}>Контакты</li>
              <li style={{marginLeft: '15px', fontSize: '18px', fontWeight: 'bolder'}}>Политика конфиденциальности</li>
           </ul>
        </div>
        <div className="social-icons mt-lg-3 mt-2 text-center">
           <ul>
              <li><a href="#"><InstagramIcon color="secondary"/></a></li>
              <li><a href="#"><AlternateEmailIcon color="secondary"/></a></li>
              <li><a href="#"><TwitterIcon color="secondary"/></a></li>
           </ul>
        </div>
   </footer>
    )
}

export default Footer