import React from "react"
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube, SlControlPlay } from "react-icons/sl";

export default function App() {
  return (
    <div className="App bg-gradient-to-r from-esquerdo to-direito h-meu1 pb-10">
      <div className="flex flex-col container mx-auto py-5">
        <div className="flex justify-between items-center">
          <img className="w-20 h-10" src="../logo.svg" alt="logo" />
          <div className="flex gap-5">
            <a href="">
              <SlSocialFacebook
                size={30}
                color="#f9f9f9"
              />
            </a>
            <a href="">
              <SlSocialInstagram
                size={30}
                color="#f9f9f9"
              />
            </a>
            <a href="">
              <SlSocialTwitter
                size={30}
                color="#f9f9f9"
              />
            </a>
            <a href="">
              <SlSocialYoutube
                size={30}
                color="#f9f9f9"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap-reverse mt-20 justify-between items-center">
          <div className="max-w-md flex flex-col justify-center">
            <p className="text-xl text-white font-semibold pb-4">HAYAO MIYAZAKI</p>
            <h1 className="text-6xl text-white font-black pb-6">A VIAGEM DE CHIHIRO</h1>
            <p className="text-base text-white pb-12">Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>

            <div className="flex gap-5">
              <button className="p-3 -skew-x-12 bg-botaoFundo">
                <a className="flex gap-2 items-center justify-center" href="https://www.netflix.com/watch/60023642?source=35">
                  <SlControlPlay
                    color="f3f3f3"
                  />
                  <p className="text-white">ASSISTIR AGORA</p>
                </a>
              </button>

              <button className="border border-botaoFundo flex items-center justify-center p-3 -skew-x-12 text-white">
                <a href="https://www.youtube.com/watch?v=ByXuk9QqQkk">ASSISTIR O TRAILER</a>
              </button>
            </div>
          </div>
          <div>
            <img className="laptop:max-w-lg animate-bounce" src="../illustration.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
