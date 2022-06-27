export default function Home() {
  return (
    <div className="flex justify-around bg-pink-100 py-32">
      <div className="bg-red h-96 w-1/4 bg-white px-3">
        <div className="px-3 pt-5 text-3xl font-bold">weather</div>
        <div className="mb-3 mt-5 flex h-16 justify-around rounded-xl border border-b-8 border-black bg-white font-bold">
          <div className="flex flex-col justify-center">
            <div className="">Casius</div>
            <div className="text-xs">Mars, 12AM</div>
          </div>
          <div className="flex justify-center align-middle">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center align-middle">
            <div>85</div>
            <div className="text-xs">○</div>
          </div>
        </div>
        <div className="mb-3 flex h-16 justify-around rounded-xl border border-b-8 border-black bg-white">
          <div>Dlacria</div>
          <div>Hi</div>
        </div>
        <div className="mb-3 flex h-16 justify-around rounded-xl border border-b-8 border-black bg-white">
          <div>New York</div>
          <div>Hi</div>
        </div>
        <div className="mb-3 flex h-16 justify-around rounded-xl border border-b-8 border-black bg-white">
          <div>Zomato</div>
          <div>Hi</div>
        </div>
      </div>
      <div className="bg-red h-3/5 w-1/4 bg-white px-3 text-center">
        Work with best designers
      </div>
      <div className="bg-red h-3/5 w-1/4 bg-yellow-400 px-3 text-center">
        Friends
      </div>
    </div>
  );
}
