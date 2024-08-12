export default function App() {
  return (
    <div className="w-full max-w-[840px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="text-black md:hover:text-slate-700 size-10 md:size-12" viewBox="0 0 48 48">
          <path d="M 35.478516 5.9804688 A 2.0002 2.0002 0 0 0 34.085938 9.4140625 L 35.179688 10.507812 C 23.476587 10.680668 14 20.256715 14 32 A 2.0002 2.0002 0 1 0 18 32 C 18 22.427546 25.627423 14.702715 35.154297 14.517578 L 34.085938 15.585938 A 2.0002 2.0002 0 1 0 36.914062 18.414062 L 41.236328 14.091797 A 2.0002 2.0002 0 0 0 41.228516 10.900391 L 36.914062 6.5859375 A 2.0002 2.0002 0 0 0 35.478516 5.9804688 z M 12.5 6 C 8.9338464 6 6 8.9338464 6 12.5 L 6 35.5 C 6 39.066154 8.9338464 42 12.5 42 L 35.5 42 C 39.066154 42 42 39.066154 42 35.5 L 42 28 A 2.0002 2.0002 0 1 0 38 28 L 38 35.5 C 38 36.903846 36.903846 38 35.5 38 L 12.5 38 C 11.096154 38 10 36.903846 10 35.5 L 10 12.5 C 10 11.096154 11.096154 10 12.5 10 L 20 10 A 2.0002 2.0002 0 1 0 20 6 L 12.5 6 z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gray-200 flex items-center justify-center">
          <img src="/chimi.png" alt="User" className="w-full h-full rounded-full object-cover ring-2 ring-offset-2 ring-black" />
          <span className="sr-only">AC</span>
        </div>
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">@chimi</h1>
          <p className="text-gray-500"></p>
          <p className="text-gray-500">CA: <span className="text-xs md:text-base">updating...</span></p>
          <p className="text-gray-500">chimi chimi chonga</p>
          <div className="text-gray-500">
            <div className='flex justify-center items-center z-10'>
              <a href="https://x.com/" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>
              <a href="https://t.me/" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150' fill="#29A0DA" viewBox="0 0 50 50">
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">69</span>
            <span className="text-gray-500 text-sm">Posts</span>
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">420K</span>
            <span className="text-gray-500 text-sm">Followers</span>
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">0</span>
            <span className="text-gray-500 text-sm">Following</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 sm:gap-6">
        <img
          src="/x.png"
          alt="Post 1"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x2.png"
          alt="Post 2"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x3.png"
          alt="Post 3"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x4.png"
          alt="Post 4"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x5.png"
          alt="Post 5"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x6.png"
          alt="Post 6"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x7.png"
          alt="Post 7"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x8.png"
          alt="Post 8"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
        <img
          src="/x1.png"
          alt="Post 9"
          className="aspect-square object-cover rounded-lg md:hover:scale-105 transition ease-in-out duration-150"
        />
      </div>
      
      {/* Fake loading animation */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-instagram-loader"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-instagram-loader" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-instagram-loader" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  )
}