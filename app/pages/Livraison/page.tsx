// ResultatPortionWrapper.tsx
import React, { Suspense } from "react";
import FormulaireLivraison from "./FormulaireLivraison";

const LivraisonWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <FormulaireLivraison />
    </Suspense>
  );
};

export default LivraisonWrapper;