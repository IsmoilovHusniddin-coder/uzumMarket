import time from "../assets/img/muddatli-to'lov.svg";
import { GoMoveToBottom } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

function HeaderBottom() {
  return (
    <div className="header-center !py-[7px]">
      <div className="containers flex items-center justify-between">
        <strong className="flex items-center justify-between font-bold text-[13px] text-[#1F2026] leading-[16px] gap-1">
          <img src={time} alt="" />
          <span>Muddatli to'lov</span>
        </strong>
        <div className="flex items-center gap-5">
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Elektronika
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Maishiy texnika
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Kiyim
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Poyabzallar
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Aksessuarlar
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Goʻzallik va parvarish
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Salomatlik
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Uy-roʻzgʻor buyumlari
          </p>
          <p className="font-normal text-[14px] leading-[24px] text-[#595B66]">
            Qurilish va taʼmirlash
          </p>
        </div>
        <p className="flex items-center gap-[7px] font-normal text-[14px] leading-[24px] text-[#595B66]">
          <span>Yana</span>
          <GoMoveToBottom />
        </p>
      </div>
    </div>
  );
}
export default HeaderBottom;
