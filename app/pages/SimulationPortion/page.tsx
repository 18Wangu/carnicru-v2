"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Formulaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomChien: "",
    sexe: "",
    poids: "",
    activite: "",
    corpulence: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleConfirm = () => {
    console.log("Résumé des informations :");
    console.log(formData);
    alert("Les informations ont été affichées dans la console !");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#F8F9E9] bg-[#F8F9E9]">
      <div className="bg-[#149A77] rounded-3xl p-24 shadow-lg relative">
        {/* Étape 1 */}
        {currentStep === 1 && (
          <>
            {/* Feuille en arrière-plan */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/feuille.svg"
                alt="feuille"
                width={300}
                height={70}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 text-center">Quelques questions...</h2>
              <label className="block text-center mb-4">Mon chien s'appelle :</label>
              <input
                type="text"
                name="nomChien"
                value={formData.nomChien}
                onChange={handleInputChange}
                placeholder="Entrer son nom ici ..."
                className="w-full p-2 rounded-3xl border-none focus:outline-none text-center text-[#004339]"
              />
              <button
                onClick={goToNextStep}
                className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl w-full mt-4"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 2 */}
        {currentStep === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Son sexe :</h2>
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "mâle" }))}
                className={`py-2 px-4 rounded-3xl font-bold ${
                  formData.sexe === "mâle" ? "bg-red-700" : "bg-red-500"
                }`}
              >
                Mâle
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "femelle" }))}
                className={`py-2 px-4 rounded-3xl font-bold ${
                  formData.sexe === "femelle" ? "bg-red-700" : "bg-red-500"
                }`}
              >
                Femelle
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-[#B0D8C1] text-[#F8F9E9] font-bold py-2 px-4 rounded-3xl"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 3 */}
        {currentStep === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Son poids :</h2>
            <div className="flex justify-center mb-6">
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleInputChange}
                placeholder="Entrer le poids (kg)"
                className="text-center text-[#004339] py-2 px-4 rounded-3xl w-[100px]"
              />
              <span className="ml-2 text-lg">kg</span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-[#B0D8C1] text-[#F8F9E9] font-bold py-2 px-4 rounded-3xl"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 4 */}
        {currentStep === 4 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Niveau d'activité :</h2>
            <div className="flex justify-around mb-6">
              {["Canapé", "Actif", "Sportif"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData((prev) => ({ ...prev, activite: level }))}
                  className={`py-2 px-4 rounded-3xl font-bold ${
                    formData.activite === level ? "bg-red-700" : "bg-red-500"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-[#B0D8C1] text-[#F8F9E9] font-bold py-2 px-4 rounded-3xl"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-3xl"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 5 */}
        {currentStep === 5 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Corpulence :</h2>
            <div className="flex justify-around mb-6">
              {["Maigre", "Normal", "Surpoids"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData((prev) => ({ ...prev, corpulence: type }))}
                  className={`py-2 px-4 rounded-3xl font-bold ${
                    formData.corpulence === type ? "bg-red-700" : "bg-red-500"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-[#B0D8C1] text-[#F8F9E9] font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-[#B0D8C1] text-[#004339] font-bold py-2 px-4 rounded-lg"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 6 */}
        {currentStep === 6 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Résumé des informations :</h2>
            <ul className="mb-6">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <strong>{key} :</strong> {value || "Non renseigné"}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-[#B0D8C1] text-[#F8F9E9] font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <Link
                href="/pages/ResultatPortion">
                <button
                  //onClick={handleConfirm}
                  className="bg-red-500 text-[#F8F9E9] font-bold py-2 px-4 rounded-lg"
                >
                  Confirmer
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

        {/* Barre de progression */}
        <div className="mt-4">
        <p className="text-[#149A77] text-center text-xl mb-3">{currentStep === 6 ? "Simulation terminé" : `${6 - currentStep} questions restantes`}</p>
          <div className="border-2 border-[#149A77] h-2 rounded-full overflow-hidden w-96">
            <div
              className="bg-[#004339] h-full"
              style={{ width: `${(currentStep / 6) * 100}%` }}
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