import React from 'react';
import Header from '@/components/layout/ui/Header';

const index = () => {
  return (
    <>
      <Header title="TECHNICAL ABILITIES"/>
      <div className='mt-[40px] mb-[50px] text-justify '>
       <div className='max-container'>
        <tbody >
        <table >
            <tr className='h-[100px] '>
              <td  className=' p-2 font-serif size-11 bg-blue-50 text-center w-[400px]'>
                PARADIGMS
              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-200 w-[900px]'>
              Model-driven development, REST, MEAN Stack, Back-end, Architecture, Web Application Architecture, Responsive Web Design (RWD), DevOps.
              </td>
            </tr>

            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-200 w-[400px]'>
              PROGRAMMING LANGUAGES & FRAMEWORKS

              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-50 w-[900px]'>
              JavaScript, Typescript, HTML5, PHP, CSS, SQL, Swi 5, C++, C, Objective-C, Solidity, GoLang, Rust, Python, Java Laravel, Symfony, Express.js, Angular, React, Next JS, Vue, Spring Boot, Node js
              </td>
            </tr>

            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-50 w-[400px]'>
             DATABASES

              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-200 w-[900px]'>
              Redis, MongoDB, NoSQL, MySQL, PostgreSQL, JSON, SQLite, AWS S3, Microsoft SQL Server.
              </td>
            </tr>



            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-200 w-[400px]'>
       OPERATING SYSTEMS
              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-50 w-[900px]'>
              Linux, Windows, OSX.
              </td>
            </tr>
            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-50 w-[400px]'>
       TOOLS
              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-200 w-[900px]'>
              PyCharm, Grunt, Apache, Nginx, Gira, Vue CLI, BitBucket, Front-end Build Tools, Slack, GitLab, Git, GitHub, Postman, Npm packaging, Docker, Kubernetes, Digital Ocean
              </td>
            </tr>
            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-200 w-[400px]'>
      METHODOLOGIES
              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-50 w-[900px]'>
              Agile (scrum), waterfall.
              </td>
            </tr>

            <tr>
              <td className='text-center p-2 font-serif size-11 bg-blue-50 w-[400px]'>
      LIBRARIES
              </td>
              <td className='text-left p-2 font-serif size-11 bg-blue-200 w-[900px]'>
              Node.js, Web3.0, jQuery Plugins, jQuery, jQuery UI, Socket.IO, Web Sockets, Sockets, Mochajs, ChaiJS, Etherium, Gunush, Cypress, NxRx, RxJs
              </td>
            </tr>
          </table>
        </tbody>
       </div>
      </div>
    </>
  );
};


export default index;