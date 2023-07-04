export default function IndexPage() {
  return (
    <section >
      <div className="flex w-full flex-col bg-green-50 py-24 dark:bg-gray-900">

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


      </div>

    </section>
  );
}
