import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import nextImg from '../images/nextjs.png';
import nextLogo from '../images/nextLogo.png';


const MainNext = () => {
     return (
          <>
               <Image src={nextImg} style={{ width: 100, height: 100, marginLeft: 30 }} /> &nbsp;
               <Image src={nextLogo} style={{ width: 180, height: 100, marginLeft: 30 }} />
               <div className='d-flex justify-content-center align-items-center mt-1' style={{ color: 'rgb(190, 10, 10)', fontSize: 50 }}><b>BASIC INTRODUCTION TO NEXT JS</b></div>
               <div className='mt-4 mr-3' style={{ fontSize: 20, marginLeft: 30 }}>
                    <p><b>Next JS</b> is based on react, webpack and babel. It is an awesome tool for creating web application and famous for server-side rendering. Next JS is build by Zeit. Developers with knowledge of <b>HTML, CSS, Java Script and React</b> can easily learn and switch to Next JS.</p>
                    <p>Next JS is a framework to build a full-stack application with features such as <b>server-side rendering</b> using React framework.</p>
                    <p>Next JS is used to build <b>HTTP web applications</b> to run react code, rendering on the server-side.</p>
                    <div className='d-flex'>
                         <div>
                              <p><b style={{ fontSize: 30 }}><u>Main Features: </u></b></p>
                              <ul style={{ color: 'rgb(53, 3, 191)' }}>
                                   <li>Hot Code Reloading</li>
                                   <li>Automatic Code Splitting</li>
                                   <li>Ecosystem Compatibility</li>
                                   <li>Server Rendering</li>
                                   <li>Styled-JSX</li>
                              </ul>
                         </div>
                         <div style={{ marginLeft: 250 }}>
                              <p><b style={{ fontSize: 30 }}><u>Different Types of Applications: </u></b></p>
                              <ul style={{ color: 'rgba(218, 7, 123, 0.852)' }}>
                                   <li>Static sites</li>
                                   <li>Incremental static regeneration (ISR)</li>
                                   <li>Single Page Applications</li>
                                   <li>Server Rendering</li>
                                   <li>Server Side Rendering(SSR)</li>
                              </ul>
                         </div>
                    </div>
                    <div>
                         For the further Next App creation steps you can further look into this Link <Link href="https://www.geeksforgeeks.org/next-js-introduction/" target='_blank'>geeksforgeeks.</Link>
                    </div>
                    <div className='mt-3'><p><b style={{ fontSize: 30 }}><u>Next.js and Vercel</u></b></p></div>
                    <p><Link href='https://vercel.com/' target='_blank'>Vercel</Link> is made by the creators of Next.js and has first-class support for Next.js. Vercel has many more features, such as:</p>
                    <ul>
                         <li><b>Custom Domains: </b>Once deployed on Vercel, you can assign a custom domain to your Next.js app. Take a look at <Link href='https://vercel.com/docs/concepts/projects/domains?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website' target='_blank'>our documentation</Link> here.</li>
                         <li><b>Environment Variables: </b>You can also set environment variables on Vercel. Take a look at <Link href='https://vercel.com/docs/concepts/deployments/configure-a-build#environment-variables?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website' target='_blank'>our documentation</Link> here. You can then use those environment variables in your Next JS app.</li>
                         <li><b>Automatic HTTPS: </b>HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates.</li>
                    </ul>

                    <div>Reference : <Link href='https://nextjs.org/docs/getting-started' target='_blank'>https://nextjs.org/docs/getting-started</Link></div>
                    <div style={{ marginTop: 50, marginLeft: -50, background: '#2c8139', height: 100 }}>HI
                         <span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                    </div>
               </div>
          </>
     );
};

export default MainNext;