import { Header } from "@/widgets/header";
import { DescriptionSection } from "@/widgets/description-section";
import { FileUploaderSection } from "@/widgets/file-uploader-section";

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
