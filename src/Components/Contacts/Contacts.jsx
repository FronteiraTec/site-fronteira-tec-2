import logoFronteiraTecColotido from '../../Assets/Logomarca/logomarcaFronteiraTecColorido.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import React, { useRef } from 'react'

export function Contacts() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_KEY}`, //ID Service
        `${import.meta.env.VITE_TEMPLATE_KEY}`, //ID Template
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}` //Key Public
      )
      .then(
        result => {
          Swal.fire(
            'E-mail Enviado!',
            'Seu e-mail foi enviado com sucesso para Fronteira Tec',
            'success'
          )

          setTimeout(() => {
            location.reload()
          }, 1000)

          const input_user_name = (document.getElementById('user_name').value =
            '')
          const input_user_email = (document.getElementById(
            'user_email'
          ).value = '')
          const input_message = (document.getElementById('message').value = '')
        },
        error => {
          console.log(error)
        }
      )
  }
  return (
    <section>
      <div className="container px-6 mx-auto">
        <div className="sm:block sm:items-center lg:flex">
          <div className="lg:w-1/2 w-full mx-auto">
            <div className="w-full px-3 py-10 mx-auto overflow-hidden lg:max-w-xl">
              <div className="mt-6 space-y-8 md:mt-8">
                <AnimatedOnScroll animationIn="zoomInRight">
                  <img
                    className="sm:h-32 h-25"
                    src={logoFronteiraTecColotido}
                    alt=""
                  />
                </AnimatedOnScroll>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img className="w-8 h-8" src="./Location.svg" alt="" />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      SC-484 - km 2, SC, 89815-899
                    </span>
                  </AnimatedOnScroll>
                </p>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img
                      className="w-8 h-8"
                      src="./SocialMedia/Phone.svg"
                      alt=""
                    />
                  </AnimatedOnScroll>

                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      (49) 99948-4897
                    </span>
                  </AnimatedOnScroll>
                </p>

                <p className="flex items-start -mx-2">
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img
                      className="w-8 h-8"
                      src="./SocialMedia/Chat.svg"
                      alt=""
                    />
                  </AnimatedOnScroll>

                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      contato.fronteiratec@gmail.com
                    </span>
                  </AnimatedOnScroll>
                </p>
              </div>

              <div className="mt-6 w-10/12 md:mt-8">
                <AnimatedOnScroll animationIn="zoomInRight">
                  <h3 className="text-gray-600 dark:text-gray-300 ">
                    Siga-nos
                  </h3>
                </AnimatedOnScroll>

                <div className="flex mt-4">
                  <a className="mx-1.5" href="https://www.instagram.com/fronteira_tec/" target="_blank">
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Instagram.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>

                  <a
                    className="mx-1.5"
                    target="_blanck"
                    href="https://api.whatsapp.com/send?phone=5549999484897&text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20Fronteria%20Tec"
                  >
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Whatsapp.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>

                  <a className="mx-1.5" href="#">
                    <AnimatedOnScroll animationIn="zoomInRight">
                      <img
                        className="w-10 h-10"
                        src="./SocialMedia/Facebook.svg"
                        alt=""
                      />
                    </AnimatedOnScroll>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
