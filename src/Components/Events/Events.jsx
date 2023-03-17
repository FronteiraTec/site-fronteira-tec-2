import Ev1 from '../../Assets/Events/concej.png'
import Ev2 from '../../Assets/Events/sjnr.jpg'
import Ev3 from '../../Assets/Events/concej2.png'
import Ev4 from '../../Assets/Events/sjnr2.jpeg'
import Ev5 from '../../Assets/Events/treinee.jpg'
import Ev6 from '../../Assets/Events/workweekend.jpg'
import React from 'react'

export function Events() {
  return (
    <div className="flex w-max m-auto max-w-full">
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tl-md rounded-bl-md hover:shadow-2xl"
          src={Ev1}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer hover:shadow-2xl"
          src={Ev2}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tr-md rounded-br-md hover:shadow-2xl"
          src={Ev3}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tr-md rounded-br-md hover:shadow-2xl"
          src={Ev4}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tr-md rounded-br-md hover:shadow-2xl"
          src={Ev5}
          alt=""
        />
      </div>
      <div>
        <img
          className="object-cover lg:h-[600px] lg:w-40 lg:hover:w-96 w-28 h-96 hover:w-60 duration-150 cursor-pointer rounded-tr-md rounded-br-md hover:shadow-2xl"
          src={Ev6}
          alt=""
        />
      </div>
    </div>
  )
}
