import { FiMapPin } from "react-icons/fi";

function HeaderTop() {
  return (
    <div className="header-top !bg-[#F2F4F7]">
      <div className="containers flex items-center gap-5 justify-between">
        <div className="flex items-center justify-between">
          <FiMapPin className="!mr-[6px]" />
          <p className="!mr-[4px] font-normal text-[14px] leading-[14px] text-[#1F2026]">Shahar: </p>
          <strong className="!mr-[24px] font-medium text-[14px] leading-[14px] text-[#1F2026]">Toshkent</strong>
          <strong className=" font-medium text-[14px] leading-[14px] text-[#1F2026]">Topshirish punktlari</strong>
        </div>
        <p className="font-normal text-[14px] leading-[14px] text-[#8B8E99]">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
        <div className="flex items-center justify-between">
          <p className="!mr-[16px] font-medium text-[14px] l;eading-[14px] text-[#595B66]">Savol-javoblar</p>
          <p className="!mr-[16px] font-medium text-[14px] l;eading-[14px] text-[#595B66]">Buyurtmalarim</p>
          <p className="flex items-center gap-[6px] !py-[6px]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_334)">
                <mask
                  id="mask0_2_334"
                  maskType="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="20"
                >
                  <path
                    d="M10.45 20C15.9728 20 20.45 15.5228 20.45 10C20.45 4.47715 15.9728 0 10.45 0C4.9271 0 0.449951 4.47715 0.449951 10C0.449951 15.5228 4.9271 20 10.45 20Z"
                    fill="#F4F5F5"
                  />
                </mask>
                <g mask="url(#mask0_2_334)">
                  <path d="M20.45 0H0.449951V20H20.45V0Z" fill="#0099B5" />
                  <path d="M20.45 13H0.449951V20H20.45V13Z" fill="#1EB53A" />
                  <path d="M20.45 13H0.449951V14H20.45V13Z" fill="#CE1126" />
                  <path d="M20.45 6H0.449951V7H20.45V6Z" fill="#CE1126" />
                  <path d="M20.45 6.5H0.449951V13.5H20.45V6.5Z" fill="white" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2_334">
                  <rect
                    x="0.449951"
                    width="20"
                    height="20"
                    rx="10"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Оʻzbekcha</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeaderTop;
