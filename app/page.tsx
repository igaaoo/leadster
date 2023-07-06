import { Card } from "@/components/card/Card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { data } from "@/lib/data";

export default function IndexPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex w-full flex-col bg-blue-50 py-24 dark:bg-gray-900">
        <div className="flex w-full flex-col items-center ">
          <sup className="mb-2  rounded-full rounded-es-md border-2 border-blue-500 px-4 py-1 text-xs font-bold text-blue-500">WEBINARS EXCLUSIVOS</sup>
          <p className="text-center text-4xl font-medium leading-tight tracking-tighter md:text-4xl">
            Menos Conversinha,
          </p>
          <p className=" text-gradient-blue-blue border-b border-gray-300 bg-clip-text px-4 pb-4 text-center text-6xl font-bold text-transparent" style={
            { backgroundImage: "linear-gradient(-45deg, #2c83fb 0%, #1f76f0 100%)" }
          }>
            Mais Conversão
          </p>
          <sub className="mt-3 text-center text-xs font-medium">
            Conheça as estratégias que <strong> mudaram o jogo </strong>e como aplicá-las no seu negócio
          </sub>
        </div>
      </section>

      <section className="px-10 lg:px-60">
        <nav className="flex items-center justify-between border-b-2 pb-4">
          <ul className="flex flex-wrap gap-2">
            <li>
              <Button variant="outline" size="sm">Agências</Button>
            </li>
            <li>
              <Button variant="outline" size="sm" >Chatbot</Button>
            </li>
            <li>
              <Button variant="outline" size="sm" >Marketing Digital</Button>
            </li>
            <li>
              <Button variant="outline" size="sm" >Geração de Leads</Button>
            </li>
            <li>
              <Button variant="outline" size="sm">Mídia Paga</Button>
            </li>
          </ul>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <label htmlFor="order" className="text-sm font-semibold">Ordenar por</label>
            <Select>
              <SelectTrigger id="order" className="w-[180px] font-semibold">
                <SelectValue placeholder="Data de Publicação" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
                  <SelectLabel>Meses</SelectLabel>
                  <SelectItem value="jan">Janeiro</SelectItem>
                  <SelectItem value="fev">Fevereiro</SelectItem>
                  <SelectItem value="mar">Março</SelectItem>
                  <SelectItem value="apr">Abril</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </nav>

        <div className="grid grid-cols-3 gap-5 py-10">
          {data.map((item, index) => (
            <Card key={index} title={item.title} videoUrl={item.url} />
          ))}
        </div>

        <div>

        </div>

      </section>

    </main>
  );
}
