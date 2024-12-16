"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ActivityLevel = "Canapé" | "Actif" | "Sportif";
type BodyCondition = "Maigre" | "Normal" | "Surpoids";

const Formulaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomChien: "",
    sexe: "",
    poids: "",
    activite: "",
    corpulence: "",
    sterilise: "",
  });

  // calcul des portions
  const proportions = {
    Canapé: {
      Maigre: { nonSterilise: 0.023, sterilise: 0.02 },
      Normal: { nonSterilise: 0.02, sterilise: 0.017 },
      Surpoids: { nonSterilise: 0.017, sterilise: 0.014 },
    },
    Actif: {
      Maigre: { nonSterilise: 0.033, sterilise: 0.03 },
      Normal: { nonSterilise: 0.03, sterilise: 0.027 },
      Surpoids: { nonSterilise: 0.027, sterilise: 0.024 },
    },
    Sportif: {
      Maigre: { nonSterilise: 0.043, sterilise: 0.04 },
      Normal: { nonSterilise: 0.04, sterilise: 0.037 },
      Surpoids: { nonSterilise: 0.037, sterilise: 0.034 },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6.5rem)] text-[#F8F9E9] bg-[#F8F9E9]">
      <div className="bg-[#149A77] rounded-3xl p-24 shadow-lg relative w-[1000px] h-[500px] flex flex-col justify-center items-center overflow-hidden">
        {/* Étape 1 */}
        {currentStep === 1 && (
          <>
            {/* Feuille en arrière-plan */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/feuille.svg"
                alt="feuille"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>

            {/* Contenu principal */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <h2 className="text-6xl font-bold mb-4 text-center">Quelques questions...</h2>
              <label className="block text-3xl text-center my-12">Mon chien s&apo;sappelle :</label>
              <input
                type="text"
                name="nomChien"
                value={formData.nomChien}
                onChange={handleInputChange}
                placeholder="Entrer son nom ici ..."
                className="w-auto text-2xl p-2 rounded-3xl border-none focus:outline-none text-center text-[#004339]"
              />
            </div>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto mt-4 absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 2 */}
        {currentStep === 2 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Son sexe :</h2>
            <div className="flex flex-col gap-3 text-2xl">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "mâle" }))}
                className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
              >
                Mâle
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "femelle" }))}
                className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
              >
                Femelle
              </button>
            </div>
            <div className="flex justify-between">             
            </div>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 3 */}
        {currentStep === 3 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Son poids :</h2>
            <div className="flex justify-center items-center mb-6">
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleInputChange}
                placeholder="Entrer le poids (kg)"
                className="text-center text-[#004339] py-2 px-4 rounded-3xl w-auto"
              />
              <span className="ml-2 text-3xl">kg</span>
            </div>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 4 */}
        {currentStep === 4 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Niveau d&aposactivité :</h2>
            <div className="flex gap-3 text-2xl">
              {["Canapé", "Actif", "Sportif"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData((prev) => ({ ...prev, activite: level }))}
                  className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
                >
                  {level}
                </button>
              ))}
            </div>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 5 */}
        {currentStep === 5 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Corpulence :</h2>
            <div className="flex gap-3 text-2xl">
              {["Maigre", "Normal", "Surpoids"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData((prev) => ({ ...prev, corpulence: type }))}
                  className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
                >
                  {type}
                </button>
              ))}
            </div>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 6 */}
        {currentStep === 6 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Votre chien est-il stérilisé ?</h2>
            <div className="flex gap-3 text-2xl">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sterilise: "oui" }))}
                className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
              >
                Oui
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sterilise: "non" }))}
                className={`py-2 px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2`}
              >
                Non
              </button>
            </div>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 7 */}
        {currentStep === 7 && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Résumé des informations :</h2>
            <ul className="bg-[#B0D8C1] p-5 rounded-3xl mb-6">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key} className="text-2xl mb-2">
                  <strong className="text-[#004339]">{key} :</strong> <span className="text-[#149A77]">{value || "Non renseigné"}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-2xl"
            >
              Précédent
            </button>
            <Link
              href={{
                pathname: "/pages/ResultatPortion",
                query: { 
                  nomChien: formData.nomChien,
                  portion: (() => {
                    const { activite, corpulence, sterilise, poids } = formData;

                    // Vérifie que les champs nécessaires sont remplis
                    if (!activite || !corpulence || !sterilise || !poids) {
                      console.error("Veuillez remplir toutes les données.");
                      return 0; // Retourne une valeur par défaut
                    }

                    // Calcule la proportion
                    const steriliseKey = sterilise === "oui" ? "sterilise" : "nonSterilise";
                    const proportion = proportions[activite as ActivityLevel][corpulence as BodyCondition][steriliseKey];

                    // Calcule la portion
                    return (parseFloat(poids) * proportion).toFixed(2);
                  })(),
                },
              }}
            >
              <button
                className="bg-[#E30613] text-[#F8F9E9] font-bold py-2 px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-2xl"
              >
                Confirmer
              </button>
            </Link>
          </>
        )}
      </div>

        {/* Barre de progression */}
        <div className="mt-4">
        <p className="text-[#149A77] text-center text-xl mb-3">{currentStep === 7 ? "Simulation terminé" : `${7 - currentStep} questions restantes`}</p>
          <div className="border-2 border-[#149A77] h-4 rounded-full overflow-hidden w-96">
            <div
              className="bg-[#004339] h-full"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
        </div>
    </div>
  );
};

export default Formulaire;

/*

A Faire :
1. vérifier que le calcul des portions est correct
2. Redirection vers la page resultat-portion avec les bonnes informations suite à la simulation
3. Au clic de formule semaine ou test unitaire ou formule mensuel -> redirection vers la page panier avec le prix correspondant
4. Sur la page panier -> indiquer les informations de livraison puis cliquer sur payer => generation pdf pour Johan (envoyé par mail) et payment reçu dans le dashboard stripe

Bonus :
5. Envoi d'un mail au client avec la confirmation de sa commande (suivi de commande chronopost)
6. Inscription utilisateur
7. Enregistrement de plusieurs profils de chien
8. Ajout simulation pour chat

*/