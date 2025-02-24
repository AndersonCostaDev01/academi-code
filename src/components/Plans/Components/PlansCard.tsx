import { Button } from "@/components/ui/button";
import { BsPatchCheckFill } from "react-icons/bs";
import * as S from "@/components/Plans/Components/PlansCard.styles";

type PlansCardProps = {
  recommended?: boolean;
  plansTitle?: string;
  plansDescription?: string;
  value?: string;
  valueInstallment?: string;
  plansAdvantages?: string[];
  installment?: string;
};

function PlansCard({
  recommended,
  plansDescription,
  plansTitle,
  value,
  valueInstallment,
  plansAdvantages,
  installment,
}: PlansCardProps) {
  const linkWhatsApp = `https://wa.me/${5583991651441}?text=${"Olá, gostaria de mais informações! sobre o plano: " + plansTitle}`;
  return (
    <S.Card className="relative" recommended={recommended}>
      {recommended && (
        <div className="absolute left-3 top-[-16px] rounded-full bg-blue-800 px-2 py-1 text-white">
          Recomendado
        </div>
      )}
      <h3 className="text-2xl font-bold">{plansTitle}</h3>
      <p className="font-medium">{plansDescription}</p>
      <div className="flex justify-between gap-3">
        <p className="flex flex-col">
          <span>R$</span>
          <span className="text-3xl font-bold">{value}</span>
        </p>
        {valueInstallment && (
          <>
            <p className="flex items-center">ou</p>
            <p className="flex flex-col">
              <span>R$</span>
              <p>
                <span className="text-3xl font-bold">{valueInstallment}</span>{" "}
                <span>{installment}</span>
              </p>
            </p>
          </>
        )}
      </div>
      <p className="text-xs">Sujeito a reajustes futuros</p>
      <Button
        className="mt-3 w-full rounded-full bg-blue-800 hover:bg-blue-600"
        asChild
      >
        <a href={linkWhatsApp}>Assinar</a>
      </Button>
      <div className="mt-4 h-[1px] w-full rounded-full bg-slate-600 shadow-2xl shadow-white" />
      {plansAdvantages?.map((advantage, index) => (
        <p className="mt-4 flex items-center gap-2 text-[10px]" key={index}>
          <BsPatchCheckFill className="inline-block text-green-500" />
          {advantage}
        </p>
      ))}
    </S.Card>
  );
}

export default PlansCard;
