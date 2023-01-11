import BaseHeader from "../ui/BaseHeader";

const BaseLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-mythodia-map bg-center">
      <BaseHeader />
      <main className="max-w-6xl min-h-120 p-4 m-auto mt-4 bg-light-parchment opacity-90">
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
