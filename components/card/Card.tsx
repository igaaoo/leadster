/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DownloadCloud } from "lucide-react";

type CardProps = {
  title: string;
  videoUrl: string;
  desc: string;
};

export function Card({ title, desc, videoUrl }: CardProps) {
  return (
    <Dialog >
      <DialogTrigger asChild>

        {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
        <button className="overflow-clip rounded-lg shadow-lg">
          <Image src="/thumbnail.png" width={600} height={200} alt="Video Thumbnail" />
          <p className="p-3 px-4 text-start text-xs font-semibold">{title}</p>
        </button>

      </DialogTrigger>
      <DialogContent className="flex w-fit flex-col items-center border-0 border-t-4 border-blue-500">

        <DialogHeader className="mt-4 px-20">
          <DialogTitle ><span className="text-blue-500">Webinar:</span> {title}</DialogTitle>
        </DialogHeader>

        <div className="mt-2 flex justify-center">
          <iframe width="510" height="315"
            src={videoUrl}>
          </iframe>
        </div>

        <article className="flex w-full flex-col justify-start">
          <h3 className="border-b-2 pb-1 font-semibold">
            Descrição
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>
        </article>

        <section className="flex w-full flex-col justify-start">
          <h3 className="border-b-2 pb-1 font-semibold">
            Donwloads
          </h3>
          <div className="flex justify-start gap-1 py-2">

            <button className="flex items-center  gap-2 overflow-clip rounded bg-green-200  pr-4 text-green-700">
              <div className="bg-green-300 px-2 py-1">
                <DownloadCloud className="h-4 w-4  " />
              </div>
              <span className="text-xs font-medium">Spreadsheet.xls</span>
            </button>

            <button className="flex items-center  gap-2 overflow-clip rounded bg-blue-200  pr-4 text-blue-700">
              <div className="bg-blue-300 px-2 py-1">
                <DownloadCloud className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Document.doc</span>
            </button>

            <button className="flex items-center  gap-2 overflow-clip rounded bg-orange-200  pr-4 text-orange-700">
              <div className="bg-orange-300 px-2 py-1">
                <DownloadCloud className="h-4 w-4 " />
              </div>
              <span className="text-xs font-medium">Presentation.ppt</span>
            </button>



          </div>
        </section>



      </DialogContent>
    </Dialog >
  );
}
