import CarouselBenefits from "./components/Carousel";

function Benefits() {
  return (
    <section className="bg-gray-100 py-20" id="benefits">
      <div className="container relative mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Beneficios</h2>
          <p>Os beneficios de ser nosso aluno, confira abaixo</p>
        </div>
        <CarouselBenefits />
      </div>
    </section>
  );
}

export default Benefits;
