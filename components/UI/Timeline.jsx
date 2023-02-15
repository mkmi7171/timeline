import TimelineIcon from "./TimelineIcon";
import TimelineText from "./TimelineText";
import Image from "next/image";
import importShip from "../../public/assets/home page/import.png";
import exportShip from "../../public/assets/home page/export.png";
import discharge from "../../public/assets/home page/discharge.png";
import storage from "../../public/assets/home page/storageIcon.png";
import Line from "../../public/assets/home page/Line.png";
import leftWheat from "../../public/assets/home page/leftWheat.png";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Timeline() {
  const { ref: timeRef1, inView: isHere1 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: timeRef2, inView: isHere2 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: timeRef3, inView: isHere3 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: timeRef4, inView: isHere4 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="timeline w-full flex justify-center lg:items-center flex-col px-2 sm:px-8 md:px-2 lg:px-0  lg:w-11/12 mx-auto xl:w-9/12 2xl:w-7/12">
      <h3 className="font-black text-4xl mb-5 capitalize">{t("home:service")}</h3>
      <figure className="absolute left-0 w-40 lg:w-96 2xl:w-1/5 -translate-y-24">
        <Image src={leftWheat} alt="wheat" />
      </figure>
      <div
        className="flex-row-reverse flex justify-center items-center relative lg:w-full md:my-10 h-56"
        ref={timeRef1}
      >
        <TimelineIcon
          img={importShip}
          style={`${
            locale === "en" ? "-ml-8" : "-mr-8"
          } mb-32 sm:mb-24 md:m-0 ${isHere1 ? "slideInUp" : "hidden"}`}
        />
        <TimelineText
          style={`${
            locale === "en" ? "left-0 pl-5 pr-10" : "right-0 pr-5 pl-10"
          } ${isHere1 ? "slideInRight" : "hidden"} `}
          title={t("home:imports")}
          desc={t("home:importText")}
        />
        <div className="absolute -bottom-36 scale-90 lg:scale-100">
          <figure
            className={`${
              locale === "en" ? "md:-scale-x-100" : ""
            }  hidden md:block`}
          >
            <Image src={Line} alt="line" />
          </figure>
        </div>
        <span className="h-32 w-1 border-r border-dashed border-footerText md:hidden absolute translate-y-28"></span>
      </div>
      <div
        className="flex justify-center items-center relative lg:w-full md:my-10 h-56"
        ref={timeRef2}
      >
        <span className="h-32 w-1 border-r border-dashed border-footerText md:hidden absolute translate-y-28"></span>
        <TimelineIcon
          img={discharge}
          style={`${locale === "en" ? "-mr-8" : "-ml-8"} mb-24 md:m-0 ${
            isHere2 ? "slideInUp" : "hidden"
          }`}
        />
        <TimelineText
          style={`${
            locale === "en" ? "right-0 pl-10 pr-5" : "left-0 pr-10 pl-5"
          } ${isHere2 ? "slideInLeft" : "hidden"}`}
          title={t("home:discharge")}
          desc={t("home:dischargeText")}
        />
        <div className="absolute -bottom-36 scale-90 lg:scale-100">
          <figure
            className={`${
              locale === "en" ? "" : "md:-scale-x-100"
            }  hidden md:block`}
          >
            <Image src={Line} alt="line" />
          </figure>
        </div>
      </div>
      <div
        className="flex-row-reverse flex justify-center items-center relative lg:w-full  md:my-10 h-56"
        ref={timeRef3}
      >
        <TimelineIcon
          img={storage}
          style={`${
            locale === "en" ? "-ml-8" : "-mr-8"
          } mb-32 sm:mb-24 md:m-0 ${isHere3 ? "slideInUp" : "hidden"}`}
        />
        <TimelineText
          style={`${
            locale === "en" ? "left-0 pl-5 pr-10" : "right-0 pr-5 pl-10"
          } ${isHere3 ? "slideInRight" : "hidden"}`}
          title={t("home:storage")}
          desc={t("home:storageText")}
        />
        <div className="absolute -bottom-36 scale-90 lg:scale-100">
          <figure
            className={`${
              locale === "en" ? "md:-scale-x-100" : ""
            }  hidden md:block`}
          >
            <Image src={Line} alt="line" />
          </figure>
        </div>
        <span className="h-32 w-1 border-r border-dashed border-dash md:hidden absolute translate-y-28"></span>
      </div>
      <div
        className="flex justify-center items-center relative lg:w-full  md:my-10 h-56"
        ref={timeRef4}
      >
        <TimelineIcon
          img={exportShip}
          style={`${locale === "en" ? "-mr-8" : "-ml-8"} mb-24 md:m-0 ${
            isHere4 ? "slideInUp" : "hidden"
          }`}
        />
        <TimelineText
          style={`${
            locale === "en" ? "right-0 pl-10 pr-5" : "left-0 pr-10 pl-5"
          }  ${isHere4 ? "slideInLeft" : "hidden"}`}
          title={t("home:exports")}
          desc={t("home:exportText")}
        />
      </div>
      <figure className="absolute -scale-x-100 right-0 w-40 lg:w-96 2xl:w-1/5 translate-y-36 md:translate-y-">
        <Image src={leftWheat} alt="wheat" />
      </figure>
    </section>
  );
}
