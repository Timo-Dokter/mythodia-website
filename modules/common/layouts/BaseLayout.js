import BaseHeader from "../ui/BaseHeader";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="fixed min-h-screen w-full bg-the-inner-planes-map bg-center bg-cover blur-sm z-[-10]"></div>
      {/* <div className="min-h-screen bg-the-inner-planes-map bg-center bg-cover"> */}
      <div className="min-h-screen bg-transparent">
        <BaseHeader />
        <main className="max-w-6xl min-h-120 p-4 m-auto md:mt-4 h-full md:h-auto bg-light-parchment bg-opacity-90">
          {children}
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
