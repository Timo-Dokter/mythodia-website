import WorldSection from "./components/WorldSection";
import PlayersSection from "./components/PlayersSection";
import LinkSection from "./components/LinksSection";

const HomePage = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <>
      menu bar drop down maken
      <h1 className="text-3xl md:text-4xl font-medium mb-2">
        The universe of Mythodia
      </h1>
      <div className="flex flex-col gap-8">
        <WorldSection
          setModalImageSrc={setModalImageSrc}
          setShowImageModal={setShowImageModal}
        />
        <PlayersSection
          setModalImageSrc={setModalImageSrc}
          setShowImageModal={setShowImageModal}
        />
        <LinkSection />
      </div>
    </>
  );
};

export default HomePage;
