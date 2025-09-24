import siteLogo from "../assets/img/site-logo4.svg";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

function HeaderCenter() {
  return (
    <div className="header-center">
      <div className="containers flex items-center justify-between">
        <a href="/">
          <img src={siteLogo} alt="" />
        </a>

        <button className="flex items-center !ml-[32px] !py-[8px] !px-[18px] rounded-[4px] !mr-[7px] !bg-[#F0F0FF]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.29993"
              y="9.5"
              width="17"
              height="11"
              rx="1.5"
              fill="#7000FF"
            />
            <rect
              x="4.29993"
              y="9.5"
              width="17"
              height="11"
              rx="1.5"
              stroke="#7000FF"
            />
            <rect
              x="5.3999"
              y="10.6001"
              width="14.8"
              height="8.8"
              rx="1"
              fill="#F0F0FF"
            />
            <mask
              id="path-3-inside-1_2_377"
              maskUnits="userSpaceOnUse"
              x="5"
              y="1"
              width="15"
              height="4"
              fill="white"
            >
              <path d="M5.80994 4.6C5.80994 3.71634 6.52628 3 7.40994 3H18.1999C19.0836 3 19.7999 3.71634 19.7999 4.6H5.80994Z" />
            </mask>
            <path
              d="M5.80994 4.6C5.80994 2.83269 7.24263 1.4 9.00994 1.4H16.5999C18.3672 1.4 19.7999 2.83269 19.7999 4.6C19.7999 4.6 19.0836 4.6 18.1999 4.6H7.40994C6.52628 4.6 5.80994 4.6 5.80994 4.6ZM19.7999 4.6H5.80994H19.7999ZM5.80994 4.6V3V4.6ZM19.7999 3V4.6V3Z"
              fill="#7000FF"
              mask="url(#path-3-inside-1_2_377)"
            />
            <mask
              id="path-5-inside-2_2_377"
              maskUnits="userSpaceOnUse"
              x="4"
              y="4"
              width="17"
              height="4"
              fill="white"
            >
              <path d="M4.80994 7.6C4.80994 6.71634 5.52628 6 6.40994 6H19.1899C20.0736 6 20.7899 6.71634 20.7899 7.6H4.80994Z" />
            </mask>
            <path
              d="M4.80994 7.6C4.80994 6.71634 5.52628 6 6.40994 6H19.1899C20.0736 6 20.7899 6.71634 20.7899 7.6H4.80994Z"
              fill="#7000FF"
            />
            <path
              d="M4.80994 7.6C4.80994 5.83269 6.24263 4.4 8.00994 4.4H17.5899C19.3572 4.4 20.7899 5.83269 20.7899 7.6C20.7899 7.6 20.0736 7.6 19.1899 7.6H6.40994C5.52628 7.6 4.80994 7.6 4.80994 7.6ZM20.7899 7.6H4.80994H20.7899ZM4.80994 7.6V6V7.6ZM20.7899 6V7.6V6Z"
              fill="#7000FF"
              mask="url(#path-5-inside-2_2_377)"
            />
          </svg>
          <span className="font-medium cursor-pointer text-[14px] leading-[18px] text-[#7000FF]">
            Katalog
          </span>
        </button>
        <form className="flex items-center " action="">
          <input
            placeholder="Mahsulotlar va turkumlar izlash"
            className="outline-none rounded-l-[4px] border-[1px] border-r-0 border-[#36364033] font-normal text-[14px] text-[#757575] !py-[11px] !pl-[17px] !pr-[38px] w-[450px]"
            type="text"
          />
          <button className="!py-[13.5px] cursor-pointer rounded-r-[4px] !px-[27px] !bg-[#F2F4F7] border-[1px] border-l-0 border-[#36364033]">
            <CiSearch className="w-[16px]" />
          </button>
        </form>
        <button className="flex items-center h-[42px] !px-[8px] cursor-pointer !ml-[8px] gap-[8.5px]">
          <GoPerson />
          <span className="font-medium text-[14px] leading-[14px] text-[#1F2026">
            Kirish
          </span>
        </button>
        <button className="flex items-center h-[42px] !px-[8px] cursor-pointer  !ml-[8px] gap-[8.5px]">
          <IoHeartOutline />
          <span className="font-medium text-[14px] leading-[14px] text-[#1F2026">
            Saralanganlar
          </span>
        </button>
        <button className="flex items-center h-[42px] !px-[8px] cursor-pointer !ml-[8px] gap-[8.5px]">
          <MdOutlineShoppingBag />
          <span className="font-medium text-[14px] leading-[14px] text-[#1F2026">
            Savat
          </span>
        </button>
      </div>
    </div>
  );
}
export default HeaderCenter;
