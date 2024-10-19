import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/accordions";
import Link from "next/link";

export function HowToValidate() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-zinc-700">
        <AccordionTrigger className="!no-underline uppercase text-zinc-200">
          Première étape
        </AccordionTrigger>
        <AccordionContent className="text-zinc-100">
          Cliquez sur le bouton ci-dessus &apos;{" "}
          <span className="text-[#7bbb29] font-semibold">
            Obtenez le mot de passe ici!
          </span>{" "}
          &apos;.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-zinc-700">
        <AccordionTrigger className="!no-underline uppercase text-zinc-200">
          Deuxième étape
        </AccordionTrigger>
        <AccordionContent className="text-zinc-100">
          Une fenêtre apparaîtra avec quelques offres, choisissez l&apos;une des
          offres, puis complétez-la.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b border-zinc-700">
        <AccordionTrigger className="!no-underline uppercase text-zinc-200">
          Troisième étape
        </AccordionTrigger>
        <AccordionContent className="text-zinc-100">
          Entrez les informations qui vous sont demandées, telles que
          l&apos;e-mail, téléchargez une application ou entrez un numéro de
          téléphone, afin d&apos;éviter les spams. .
          <video
            width="0"
            className="w-full mt-4"
            height="240"
            controls
            preload="none"
          >
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default HowToValidate;
