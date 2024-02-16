import React from 'react'
import logo from '../images/Logo .svg'

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt="" />
                <p>We are family owned Mediterranean restaurant, focused on traditional recipes served wit a modern twist. </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
                 
                 <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />123 Toxicity, USA</li>
                        <li>Phone: <br />+ 91 9876 543 210</li>
                        <li>Email: <br />little"lemon.com</li>
                    </ul>
                 </div>

                 <div>
                    <h3>Social Links</h3>
                    <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                    </ul>
                 </div>
            
        </section>
    </footer>
  )
}
