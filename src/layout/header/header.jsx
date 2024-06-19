import React from "react";
import navigationImg from "../../assets/icons/navigation.svg";
import mapImg from "../../assets/icons/map.svg";
import logoImg from "../../assets/icons/logo.svg";
import zoomIcon from "../../assets/icons/zoomIcon.svg";
import phone from "../../assets/icons/phone.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-[#F0F4F8]">
      <div className="container">
        <nav className="py-4">
          <ul className="nav-up flex items-center justify-between text-sm font-ubuntu-regular text-[#6E9BB8]">
            <li>Инвестиционно-финансовая компания</li>
            <li className=" flex items-center gap-1">
              <span>
                <img src={navigationImg} alt="navigation" />
              </span>
              Город Казань
            </li>
            <li>О компании</li>
            <li>Отзывы</li>
            <li>Халяль подробно</li>
            <li>Отчетность</li>
            <li>Наши партнеры</li>
            <li>Сотрудничество</li>
            <li className=" flex items-center gap-1">
              Контакты
              <span>
                <img src={mapImg} alt="map" />
              </span>
            </li>
            <li className=" w-6  overflow-hidden  rounded  bg-white  outline-none">
              <select className="text-sm  text-[#6E9BB8] font-ubuntu-regular">
                <option value="RU">RU</option>
                <option value="UZ">UZ</option>
              </select>
            </li>
          </ul>
        </nav>
        {/* header medium */}
        <div>
          <div className=" max-w-[227px]">
            <img src={logoImg} alt="logo" />
          </div>
          <ul className=" flex  items-center gap-7 text-[#0101DE] ">
            <li className=" font-normal text-lg">Инвестиции</li>
            <li className=" font-normal text-lg">Рассрочка</li>
            <li className=" font-normal text-lg">Калькулятор</li>
            <li className=" text-base font-bold flex items-center gap-1">
              <span>
                <img src={phone} alt="phone" />
              </span>
              8 800 2700 700
            </li>
            <li className=" cursor-pointer">
              <img src={zoomIcon} alt=" zoomIcon" />
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          <div>
            <button className="">Личный Кабинет</button>
          </div>
        </div>
      </div>
    </header>
  );
}
