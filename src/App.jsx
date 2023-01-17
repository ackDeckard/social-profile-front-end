function App() {
  return (
    <section className="max-w-sm bg-white rounded-xl ">
      <img src="/bg-card.svg" alt="" className="rounded-t-xl" />
      <div className="relative">
        <img
          src="/image-victor.jpg"
          alt="user photo"
          className="rounded-full border-4 border-white m-auto -mt-12"
        />
      </div>

      <div className="flex flex-col items-center pb-5">
        <p className="font-bold text-lg text-veryDarkDesaturated pt-5">
          Victor Crest <span className="font-normal text-darkGray">26</span>
        </p>
        <p className="text-darkGrayish text-sm pb-1">London</p>
      </div>

      <div className="border-b"></div>

      <div className="grid grid-cols-3 place-items-center text-center p-4 pt-6 text-veryDarkDesaturated">
        <div>
          <p className="font-bold text-lg">80K</p>
          <p className="text-xs text-darkGray">Followers</p>
        </div>
        <div>
          <p className="font-bold text-lg">803K</p>
          <p className="text-xs text-darkGray">Likes</p>
        </div>
        <div>
          <p className="font-bold text-lg">1.4K</p>
          <p className="text-xs text-darkGray">Photos</p>
        </div>
      </div>
    </section>
  );
}

export default App;
