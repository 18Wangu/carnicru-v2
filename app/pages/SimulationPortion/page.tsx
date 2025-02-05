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
    race: "",
    sexe: "",
    poids: "",
    activite: "",
    corpulence: "",
    sterilise: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // calcul des portions
  const proportions = {
    Canapé: {
      Maigre: { nonSterilise: 23, sterilise: 20 },
      Normal: { nonSterilise: 20, sterilise: 17 },
      Surpoids: { nonSterilise: 17, sterilise: 14 },
    },
    Actif: {
      Maigre: { nonSterilise: 33, sterilise: 30 },
      Normal: { nonSterilise: 30, sterilise: 27 },
      Surpoids: { nonSterilise: 27, sterilise: 24 },
    },
    Sportif: {
      Maigre: { nonSterilise: 43, sterilise: 40 },
      Normal: { nonSterilise: 40, sterilise: 37 },
      Surpoids: { nonSterilise: 37, sterilise: 34 },
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
    if (currentStep === 1 && formData.nomChien.trim() === "") {
      setErrorMessage("Veuillez indiquer le nom de votre chien");
      return; // Reste sur l'étape 1
    }
    if (currentStep === 2 && formData.race.trim() === "") {
      setErrorMessage("Veuillez indiquer la race de votre chien");
      return; // Reste sur l'étape 2
    }
    if (currentStep === 3 && formData.sexe.trim() === "") {
      setErrorMessage("Veuillez sélectionner le sexe de votre chien");
      return; // Reste sur l'étape 3
    }
    if (currentStep === 4 && formData.poids.trim() === "") {
      setErrorMessage("Veuillez indiquer le poids de votre chien");
      return; // Reste sur l'étape 4
    }
    if (currentStep === 5 && formData.activite.trim() === "") {
      setErrorMessage("Veuillez sélectionner le niveau d'activité de votre chien");
      return; // Reste sur l'étape 5
    }
    if (currentStep === 6 && formData.corpulence.trim() === "") {
      setErrorMessage("Veuillez sélectionner la corpulence de votre chien");
      return; // Reste sur l'étape 6
    }
    if (currentStep === 7 && formData.sterilise.trim() === "") {
      setErrorMessage("Veuillez indiquer si votre chien est stérilisé");
      return; // Reste sur l'étape 7
    }
    if (currentStep < 8) setCurrentStep(currentStep + 1);
    setErrorMessage(""); // Réinitialise le message d'erreur si le champ est valide
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center md:justify-center h-[calc(100vh-6.5rem)] text-[#F8F9E9] bg-[#F8F9E9]">
      <div className="bg-[#149A77] rounded-3xl p-24 shadow-lg relative w-[calc(100vw-2rem)] md:w-[1000px] h-[500px] flex flex-col justify-center items-center overflow-hidden">
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
            <div className="flex flex-col items-center justify-center relative z-10 pb-8">
              <h2 className="text-2xl md:text-6xl font-bold mb-4 text-center whitespace-nowrap">Quelques questions</h2>
              <label className="block text-xl md:text-3xl text-center my-8 whitespace-nowrap">Mon chien s&apos;appelle :</label>
              <input
                type="text"
                name="nomChien"
                value={formData.nomChien}
                onChange={handleInputChange}
                placeholder="Entrer son nom ici ..."
                className="w-48 md:w-auto text-xl md:text-2xl p-1 md:p-2 rounded-3xl border-none focus:outline-none text-center text-[#004339]"
              />
              {errorMessage && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            </div>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto mt-4 absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 2 */}
        {currentStep === 2 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/coeur-vert.svg"
                alt="coeur"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>

            <div className="flex flex-col items-center justify-center relative z-10 pb-24">
              <label className="block text-xl md:text-3xl text-center my-12 whitespace-nowrap">La race de mon chien :</label>
              <input
                type="text"
                name="race"
                value={formData.race}
                onChange={handleInputChange}
                placeholder="Entrer sa race ici ..."
                className="w-52 md:w-auto text-xl md:text-2xl p-1 md:p-2 rounded-3xl border-none focus:outline-none text-center text-[#004339]"
              />
              {errorMessage && currentStep === 2 && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            </div>

            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 3 */}
        {currentStep === 3 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/fleche-simulation.svg"
                alt="fleche"
                width={500}
                height={500}
                className="absolute top-0 right-0 opacity-75"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center z-10 whitespace-nowrap">Son sexe :</h2>
            <div className="flex flex-col gap-3 text-xl md:text-2xl z-10 pb-10">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "mâle" }))}
                className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                  ${formData.sexe === "mâle" ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
              >
                Mâle
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "femelle" }))}
                className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                  ${formData.sexe === "femelle" ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
              >
                Femelle
              </button>
            </div>
            {errorMessage && currentStep === 3 && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 4 */}
        {currentStep === 4 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/feuille.svg"
                alt="feuille"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>
            
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center z-10 whitespace-nowrap">Son poids :</h2>
            <div className="flex justify-center items-center mb-6 z-10">
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleInputChange}
                placeholder="Entrer le poids (kg)"
                className="text-center text-[#004339] py-1 px-2 md:py-2 md:px-4 rounded-3xl w-40 md:w-auto"
              />
              <span className="ml-2 text-xl md:text-3xl z-10">kg</span>
            </div>
            {errorMessage && currentStep === 4 && <p className="text-[#E30613] mt-2 text-center z-10">{errorMessage}</p>}
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 5 */}
        {currentStep === 5 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/coeur-vert.svg"
                alt="coeur"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center z-10 whitespace-nowrap">Niveau d&apos;activité :</h2>
            <div className="flex flex-col md:flex-row gap-3 text-xl md:text-2xl z-10 pb-10">
              {["Canapé", "Actif", "Sportif"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData((prev) => ({ ...prev, activite: level }))}
                  className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                    ${formData.activite === level ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
                >
                  {level}
                </button>
              ))}
            </div>
            {errorMessage && currentStep === 5 && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 6 */}
        {currentStep === 6 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/fleche-simulation.svg"
                alt="fleche"
                width={500}
                height={500}
                className="absolute top-0 right-0 opacity-75"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center z-10 whitespace-nowrap">Corpulence :</h2>
            <div className="flex flex-col md:flex-row gap-3 text-xl md:text-2xl z-10">
              {["Maigre", "Normal", "Surpoids"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData((prev) => ({ ...prev, corpulence: type }))}
                  className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                    ${formData.corpulence === type ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
                >
                  {type}
                </button>
              ))}
            </div>
            {errorMessage && currentStep === 6 && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 7 */}
        {currentStep === 7 && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src="/coeur-vert.svg"
                alt="coeur"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 opacity-75"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center z-10 whitespace-nowrap">Votre chien est-il stérilisé ?</h2>
            <div className="flex gap-3 text-xl md:text-2xl z-10">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sterilise: "oui" }))}
                className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                  ${formData.sterilise === "oui" ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
              >
                Oui
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sterilise: "non" }))}
                className={`py-1 px-2 md:py-2 md:px-4 rounded-3xl font-bold bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2
                  ${formData.sterilise === "non" ? "max-md:bg-red-700" : "bg-[#E30613]"}`}
              >
                Non
              </button>
            </div>
            {errorMessage && currentStep === 7 && <p className="text-[#E30613] mt-2">{errorMessage}</p>}
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <button
              onClick={goToNextStep}
              className="bg-[#B0D8C1] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 8 */}
        {currentStep === 8 && (
          <>
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center whitespace-nowrap">Résumé des informations :</h2>
            <ul className="bg-[#B0D8C1] p-5 rounded-3xl mb-16 w-[280px] md:w-[350px]">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key} className="text-xl md:text-2xl mb-2">
                  <strong className="text-[#004339]">{key} :</strong> <span className="text-[#149A77]">{value || "Non renseigné"}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={goToPreviousStep}
              className="bg-[#F8F9E9] text-[#004339] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 left-5 text-xl md:text-2xl"
            >
              Précédent
            </button>
            <Link
              href={{
                pathname: "/pages/ResultatPortion",
                query: { 
                  nomChien: formData.nomChien,
                  race: formData.race,
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
                className="bg-[#E30613] text-[#F8F9E9] font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl w-auto absolute bottom-5 right-5 text-xl md:text-2xl"
              >
                Confirmer
              </button>
            </Link>
          </>
        )}
      </div>

        {/* Barre de progression */}
        <div className="mt-4">
        <p className="text-[#149A77] text-center text-xl mb-3">{currentStep === 8 ? "Simulation terminé" : `${8 - currentStep} questions restantes`}</p>
          <div className="border-2 border-[#149A77] h-4 rounded-full overflow-hidden w-[calc(100vw-3rem)] md:w-96">
            <div
              className="bg-[#004339] h-full"
              style={{ width: `${(currentStep / 8) * 100}%` }}
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