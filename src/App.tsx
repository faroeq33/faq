import Description from "./components/Description";
import HeaderImg from "./components/HeaderImg";
import Question from "./components/Question";

function App() {
  return (
    <>
      <header className="text-white bg-dark-purple">
        <HeaderImg />
      </header>

      <div className="hidden colorpalette">
        <h1 className="text-2xl text-center">ColorPalette</h1>
        <p className="p-4 bg-light-pink">bg-light-pink</p>
        <p className="p-4 bg-grayish-purple">bg-grayish-purple</p>
        <p className="p-4 text-white bg-dark-purple">bg-dark-purple</p>
      </div>

      <div className="w-full h-screen body bg-grayish-purple">
        <div className="flex p-4">
          <div className="w-full p-4 bg-white rounded-lg">
            <h1 className="text-3xl font-extrabold">FAQS</h1>
            <Description className="text-dark-purple/30">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skill with project in
              html, css and Javascript. It's suitable for all levels and ideal
              for portfolio building.
            </Description>

            <Question> is blbal mentro free</Question>
            <Question> is blbal mentro free</Question>
            <Question> is blbal mentro free</Question>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
