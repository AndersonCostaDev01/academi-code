"use client";
import PlansCard from "./Components/PlansCard";

export function Plans() {
  return (
    <section id="plans" className="container mx-auto p-2">
      <div className="">
        <h2 className="mb-2 text-3xl font-bold">Veja todos nossos planos</h2>
        <p className="">
          Qual se enquadra melhor em suas necessidades?
          <br /> escolha abaixo
        </p>
      </div>
      <div className="mt-16 flex w-screen flex-col gap-6 lg:w-full lg:flex-row lg:justify-between">
        <PlansCard
          plansTitle="Plano mensal"
          plansDescription="Plano com pagamento mensal e sem fidelidade"
          value="60,00"
          plansAdvantages={[
            "Sem fidelidade",
            "Acesso a academia durante todo o horario de funcionamento",
            "Ajuda de profesores qualificados",
            "Avaliacão fisica gratuita",
            "Acesso ao portal do aluno com diversas vantagens",
          ]}
        />
        <PlansCard
          recommended
          plansTitle="Plano anual"
          plansDescription="Plano com pagamentoanual e fidelidade de 12 meses"
          value="450,00"
          valueInstallment="45,00"
          installment="12x"
          plansAdvantages={[
            "Fidelidade de 12 meses",
            "Acesso a academia durante todo o horario de funcionamento",
            "Ajuda de profesores qualificados",
            "Avaliacão fisica gratuita",
            "Acesso ao portal do aluno com diversas vantagens",
            "Possibilidade de parcelamento em 12x",
            "Redução no valor da parcela em comparacão com o planos anteriores",
          ]}
        />
        <PlansCard
          plansTitle="Plano trimestral"
          plansDescription="Plano com pagamento trimestral e fidelidade de 3 meses"
          value="150,00"
          valueInstallment="50,00"
          installment="3x"
          plansAdvantages={[
            "Fidelidade de 3 meses",
            "Acesso a academia durante todo o horario de funcionamento",
            "Ajuda de profesores qualificados",
            "Avaliacão fisica gratuita",
            "Acesso ao portal do aluno com diversas vantagens",
            "Possibilidade de parcelamento em 3x",
            "Redução no valor da parcela em comparacão com o planos anteriores",
          ]}
        />
      </div>
    </section>
  );
}
