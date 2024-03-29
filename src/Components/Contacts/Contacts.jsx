import logoFronteiraTecColotido from '../../Assets/Logomarca/logomarcaFronteiraTecColorido.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import React, { useRef } from 'react'

export function Contacts() {
  return (
    <section>
      <div className="container px-6 mx-auto">
            <div className="w-full px-3 py-10 mx-auto overflow-hidden flex md:flex-row flex-col justify-center">
              <div className='w-full pr-10 items-center justify-end flex'>
                <AnimatedOnScroll animationIn="zoomInRight">
                  <img
                    className="w-96 h-auto"
                    src={logoFronteiraTecColotido}
                    alt=""
                  />
                </AnimatedOnScroll>
              </div>
              <div className="mt-6 space-y-8 md:mt-8 md:w-1/2">
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

                <p className="flex items-start -mx-2" >
                  <a href="tel:5549988421655" className='flex flex-row'>
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
                  </a>
                </p>
                <p className="flex items-start -mx-2">
                <a href="mailto:contato.fronteiratec@gmail.com" className='flex flex-row'>
                  <AnimatedOnScroll animationIn="zoomInRight">
                    <img
                      className="w-8 h-8"
                      src="/SocialMedia/Chat.svg"
                      alt=""
                    />
                  </AnimatedOnScroll>

                  <AnimatedOnScroll animationIn="zoomInRight">
                    <span className="mx-2 text-green-fronteira w-72">
                      contato.fronteiratec@gmail.com
                    </span>
                  </AnimatedOnScroll>
                  </a>
                </p>
              </div>

              <div className="mt-6 w-10/12 md:mt-8 pl-10">
                <AnimatedOnScroll animationIn="zoomInRight">
                  <h3 className="text-gray-600 dark:text-gray-300 text-center md:text-start">
                    Siga-nos
                  </h3>
                </AnimatedOnScroll>

                <div className="flex mt-4 justify-center md:justify-start">
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
    </section>
  )
}
