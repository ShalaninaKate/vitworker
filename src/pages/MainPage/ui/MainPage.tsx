// import { useState } from "react";
// import s from "./MainPage.module.scss";
// import clsx from "clsx";

// import { Button } from "@/shared/ui/button";

// import headerImgWebp from "@/shared/assets/img/header.png";
import { Header } from "@/widgets/header";
import { DescriptionSection } from "@/widgets/description-section";
import { FileUploaderSection } from "@/widgets/file-uploader-section";
// import headerImgPng from "@/shared/assets/img/header.png?png";


export function MainPage() {

  return (
    <>
      <Header />
      <main className="main">
        <DescriptionSection />
        <FileUploaderSection />
       
      </main>
    </>
  );
}


