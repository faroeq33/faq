import HeaderImg from "./components/HeaderImg";

function App() {
  return (
    <>
      <header className="bg-dark-purple text-white">
        <HeaderImg />
      </header>

      <div className="colorpalette hidden">
        <h1 className="text-center text-2xl">ColorPalette</h1>
        <p className="p-4 bg-light-pink">bg-light-pink</p>
        <p className="p-4 bg-grayish-purple">bg-grayish-purple</p>
        <p className="p-4 bg-dark-purple text-white">bg-dark-purple</p>
      </div>

      <div className="body bg-grayish-purple h-screen w-full">
        <div className="flex p-4">
          <div className="rounded-lg bg-white w-full p-4">
            <h1>FAQS</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis omnis fugiat rem eos cupiditate nulla ab velit
              consequuntur quos pariatur architecto adipisci excepturi
              explicabo, doloremque illum facere quaerat consectetur ad.
            </h2>
            <div className="questiontoggle"> is blbal mentro free</div>
            <div className="questiontoggle"> is blbal mentro free</div>
            <div className="questiontoggle"> is blbal mentro free</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
