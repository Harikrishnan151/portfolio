import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
import pro1 from "../assets/proj1.jpg"
import pro2 from "../assets/proj2.jpg"
import pro3 from "../assets/proj3.jpg"
import pro4 from "../assets/proj4.jpg"
import pro5 from "../assets/proj5.jpg"
import pro6 from "../assets/proj6.jpg"
import pro7 from "../assets/proj7.jpg"
import pro8 from "../assets/proj8.jpg"
import pro9 from "../assets/proj9.jpg"
import pro10 from "../assets/proj10.jpg"
import pro11 from "../assets/proj11.jpg"
import pro12 from "../assets/proj12.jpg"

function WorkCard() {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>REACT</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro7} alt="image" />
                    <h2 className='project-title'>Dream-Property</h2>
                    <div className="pro-details">
                        <p >React | HTML5 | CSS3 | Tailwindcss | MDBootstrap | Node js | Express js | MongoDB Atles |
                            Mongoose | JSON WEB TOKEN | HTTP Client | Firebase </p>

                    </div>
                    <div className="pro-btns">
                        <NavLink to={"https://real-estate-5i4m.onrender.com/"} className={"btn"}>View</NavLink>
                        <NavLink to={"https://github.com/Harikrishnan151/real-estate"} className={"btn"}>Source</NavLink>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro12} alt="image" />
                    <h2 className='project-title'>Media-App</h2>
                    <div className="pro-details">
                        <br />
                        <p>
                        
                            React | HTML5 | CSS3 | MDBootstrap | React Bootstrap| JSON-SERVER 
                            | Drag & Drop 
                        </p>

                    </div>
                    <div className="pro-btns">
                        <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_hello-connections-as-a-part-of-my-webdevelopment-activity-7138112767865094144-6e-O?utm_source=share&utm_medium=member_desktop"} className={"btn"}>View</NavLink>
                        <NavLink to={"https://github.com/Harikrishnan151/media-app-frontend"} className={"btn"}>Source</NavLink>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro8} alt="image" />
                    <h2 className='project-title'>Employee Management System (EMS)</h2>
                    <div className="pro-details">
                        <p>React | HTML5 | CSS3 | MDBootstrap | React Bootstrap | JSON-SERVER </p>
                        <div className="pro-btns">
                            <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_hello-connections-i-am-excited-to-share-activity-7136228829945069568-6jzF?utm_source=share&utm_medium=member_desktop"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/EMS-frontend"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>

                </div>

            </div>

            <div className="project-container">
                <div className="project-card">
                    <img src={pro9} alt="image" />
                    <h2 className='project-title'>Restro Cafe</h2>
                    <div className="pro-details">
                        <p>React | HTML5 | CSS3 | MDBootstrap | React Bootstrap | JSON-SERVER 
                        </p>

                        <div className="pro-btns">
                            <NavLink to={"https://restaurant-finding-site.netlify.app/"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/restaurant-frontend"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro10} alt="image" />
                    <h2 className='project-title'>Doctor-App</h2>
                    <div className="pro-details">
                        <p>React | HTML5 | CSS3 | MDBootstrap | React Bootstrap | JSON-SERVER  <br />
                        </p>
                        <div className="pro-btns">
                            <NavLink to={"https://doctor-booking-details.netlify.app/"} className={"btn btn1 "}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/doctor-frontend"} className={"btn btn1 "}>Source</NavLink>
                        </div>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro11} alt="image" />
                    <h2 className='project-title'>Discount-Caculator</h2>
                    <div className="pro-details">
                        <p>React | HTML5 | CSS3 | MDBootstrap | React Bootsrap | Javascript <br /> </p>
                        <div className="pro-btns">
                            <NavLink to={"https://discount-caculator.netlify.app"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/discount-caculator"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>




                </div>

            </div>
            <h1 className='project-heading'>ANGULAR</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>CAFE-MANAGEMENT</h2>
                    <div className="pro-details">
                        <p >Angular | HTML5 | CSS3 | Bootstrap | Node js | Express js | MongoDB Compass |
                            Mongoose | Reactive Forms | JSON WEB TOKEN | HTTP Client | Typescript </p>

                    </div>
                    <div className="pro-btns">
                        <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_angular-html5-css3-activity-7130415115799052288-pEql?utm_source=share&utm_medium=member_desktop"} className={"btn"}>View</NavLink>
                        <NavLink to={"https://github.com/Harikrishnan151/cafe-frontend"} className={"btn"}>Source</NavLink>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro2} alt="image" />
                    <h2 className='project-title'>E-Commerce</h2>
                    <div className="pro-details">
                        <p>
                            Angular | HTML5 | CSS3 | Bootstrap | Node js| MongoBD Atlas | Express JS |
                            Mongoose | Reactive Forms | HTTP Client | Paypal | Lazy Loading |Typescript
                        </p>

                    </div>
                    <div className="pro-btns">
                        <NavLink to={"https://e-cart-shopify.netlify.app/products"} className={"btn"}>View</NavLink>
                        <NavLink to={"https://github.com/Harikrishnan151/ecart-frontend"} className={"btn"}>Source</NavLink>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro3} alt="image" />
                    <h2 className='project-title'>BANK-APP</h2>
                    <div className="pro-details">
                        <p>Angular | HTML5 | CSS3 | Bootstrap | Node JS | MongoBD Compass |
                            Mongoose | Express JS | Reactive Forms | JSON Web Token(JWT) | HTTP
                            Client | Observables | Typescript </p>
                        <div className="pro-btns">
                            <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_hello-connections-as-a-part-of-my-web-activity-7125053355701272577-HaR8?utm_source=share&utm_medium=member_desktop"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/bankapp-frontend"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>

                </div>

            </div>

            <div className="project-container">
                <div className="project-card">
                    <img src={pro4} alt="image" />
                    <h2 className='project-title'>DASHBOARD</h2>
                    <div className="pro-details">
                        <p>Angular | HTML5 | CSS3 | Material UI | Highchart | Piechart | Tailwind CSS
                        </p>

                        <div className="pro-btns">
                            <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_html5-css3-angular-activity-7121428972524998656-zFFF?utm_source=share&utm_medium=member_desktop"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/Admin-Dashboard"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro5} alt="image" />
                    <h2 className='project-title'>CURD-APP</h2>
                    <div className="pro-details">
                        <p>Angular | HTML5 | CSS3 | Bootstrap5 | JSON Server <br />
                        </p>
                        <div className="pro-btns">
                            <NavLink to={"https://www.linkedin.com/posts/hari-krishnan-v-v_html-css3-bootstrap5-activity-7120006932538540032-CVtN?utm_source=share&utm_medium=member_desktop"} className={"btn btn1 "}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/CORE-HR"} className={"btn btn1 "}>Source</NavLink>
                        </div>
                    </div>

                </div>

                <div className="project-card">
                    <img src={pro6} alt="image" />
                    <h2 className='project-title'>E-CART-API FETCHING</h2>
                    <div className="pro-details">
                        <p>Angular | HTML5 | CSS3 | Bootstrap5 | JSON Server <br /> </p>
                        <div className="pro-btns">
                            <NavLink to={"https://lnkd.in/gKhsJnwQ"} className={"btn"}>View</NavLink>
                            <NavLink to={"https://github.com/Harikrishnan151/Product-Finder"} className={"btn"}>Source</NavLink>
                        </div>
                    </div>




                </div>

            </div>



        </div>
    )
}

export default WorkCard