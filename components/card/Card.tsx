import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CardProps = {
  title: string;
  videoUrl: string;
};

export function Card({ title, videoUrl }: CardProps) {
  return (
    <Dialog >
      <DialogTrigger asChild>

        {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
        <button className="overflow-clip rounded-lg shadow-lg">
          <Image src="/thumbnail.png" width={600} height={200} alt="Video Thumbnail" />
          <p className="p-3 px-4 text-start text-xs font-semibold">{title}</p>
        </button>

      </DialogTrigger>
      <DialogContent className="flex w-fit flex-col items-center">
        <DialogHeader className="mt-6">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <iframe width="470" height="315"
            src={videoUrl}>
          </iframe>
        </div>

      </DialogContent>
    </Dialog >
  );
}
