import TemplateForm from "@/components/TemplateForm";
import TemplateList from "@/components/TemplateList";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full min-h-screen pb-10">
      <TemplateForm />
      <TemplateList/>
    </main>
  );
}
