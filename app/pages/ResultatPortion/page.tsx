// ResultatPortionWrapper.tsx
import React, { Suspense } from "react";
import ResultatPortionContent from "./ResultatPortionContent";

const ResultatPortionWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ResultatPortionContent />
    </Suspense>
  );
};

export default ResultatPortionWrapper;