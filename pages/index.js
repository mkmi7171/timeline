import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Timeline from "../components/UI/Timeline";




export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}



export default function HomePage(props) {
  const router = useRouter();


  useEffect(() => {
    let dir = router.locale == "fa" ? "rtl" : "ltr";
    document.querySelector("html").setAttribute("dir", dir);
  }, [router.locale]);

  return (
    <>
      <Timeline />

    </>
  );
}
