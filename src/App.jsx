import InfoVoyage from "./composants/InfoVoyage.jsx";
import InfoManager from "./composants/InfoManager.jsx";
import InfoAgence from "./composants/InfoAgence.jsx";

function App() {
  return (
    <>
      <InfoVoyage destination="Chefchaoun" />
      <InfoManager nom="Yassine" languge="Arabe / Anglis" />
      <InfoAgence agence="Atlas Travail" localisation="Rabat" />
    </>
  )
}

export default App
