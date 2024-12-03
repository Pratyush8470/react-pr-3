import { useState } from 'react'

export default function Home () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12'>
        <div className='container mx-auto flex flex-col justify-center items-center text-center'>
          <h2 className='text-white sm:text-4xl text-3xl font-bold mb-4'>
            Discover Our New Collection
          </h2>
          <p className='text-white text-base text-center mb-8'>
            Elevate your style with our latest arrivals. Shop now and enjoy
            exclusive discounts!
          </p>

          <button
            type='button'
            className='bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100'
          >
            Get Started
          </button>
        </div>
      </div>
      <div className='font-sans bg-gray-100 px-4 py-12'>
        <div className='grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto'>
          <div className='text-left'>
            <h2 className='text-gray-800 text-3xl font-bold mb-6'>
              Discover the Future of Innovation
            </h2>
            <p className='mb-4 text-sm text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
              mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis
              in bibendum tincidunt.
            </p>
            <p className='mb-4 text-sm text-gray-500'>
              Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel
              tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce
              vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.
            </p>
            <p className='text-sm text-gray-500'>
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
            <p className='text-sm text-gray-500'>
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
          </div>
          <div>
            <img
              src='https://readymadeui.com/management-img.webp'
              alt='Placeholder Image'
              className='rounded-lg object-contain w-full h-full'
            />
          </div>
        </div>
      </div>{' '}
      <div className='bg-gradient-to-b from-[#2e0249] to-[#680871] py-16 px-6 font-[sans-serif]'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-white md:text-5xl text-4xl font-extrabold mb-6'>
            Join Our Exclusive Newsletter
          </h2>
          <p className='text-xl text-gray-300'>
            Be part of our elite community. Get VIP access to curated content,
            early product releases, and special promotions.
          </p>

          <div className='bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full md:w-96 bg-transparent border-b-2 border-[#a91079] py-3 px-4 text-[#2e0249] text-base focus:outline-none placeholder-[#a91079] placeholder-opacity-70'
            />
            <button className='max-md:mt-6 md:ml-4 bg-[#a91079] hover:bg-[#680871] text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none'>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className='font-sans'>
        <div className='lg:max-w-5xl max-w-3xl mx-auto'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-gray-800 text-3xl font-extrabold'>
              Meet our team
            </h2>
            <p className='text-gray-800 text-sm mt-4 leading-relaxed'>
              Meet our team of professionals to serve you.
            </p>
          </div>

          <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12'>
            <div className='border rounded-lg overflow-hidden'>
              <img
                src='https://readymadeui.com/team-1.webp'
                className='w-full h-56 object-cover'
              />

              <div className='p-4'>
                <h4 className='text-gray-800 text-base font-bold'>John Doe</h4>
                <p className='text-gray-800 text-xs mt-1'>Software Engineer</p>

                <div className='space-x-4 mt-4'>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 155.139 155.139'
                    >
                      <path
                        d='M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z'
                        data-original='#010002'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z'
                        data-original='#03a9f4'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z'
                        data-original='#0077b5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='border rounded-lg overflow-hidden'>
              <img
                src='https://readymadeui.com/team-2.webp'
                className='w-full h-56 object-cover'
              />

              <div className='p-4'>
                <h4 className='text-gray-800 text-base font-bold'>
                  Mark Adair
                </h4>
                <p className='text-gray-800 text-xs mt-1'>Software Engineer</p>

                <div className='space-x-4 mt-4'>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 155.139 155.139'
                    >
                      <path
                        d='M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z'
                        data-original='#010002'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z'
                        data-original='#03a9f4'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z'
                        data-original='#0077b5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='border rounded-lg overflow-hidden'>
              <img
                src='https://readymadeui.com/team-3.webp'
                className='w-full h-56 object-cover'
              />

              <div className='p-4'>
                <h4 className='text-gray-800 text-base font-bold'>
                  Simon Konecki
                </h4>
                <p className='text-gray-800 text-xs mt-1'>Web Designer</p>

                <div className='space-x-4 mt-4'>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 155.139 155.139'
                    >
                      <path
                        d='M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z'
                        data-original='#010002'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z'
                        data-original='#03a9f4'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z'
                        data-original='#0077b5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='border rounded-lg overflow-hidden'>
              <img
                src='https://readymadeui.com/team-4.webp'
                className='w-full h-56 object-cover'
              />

              <div className='p-4'>
                <h4 className='text-gray-800 text-base font-bold'>Sophia</h4>
                <p className='text-gray-800 text-xs mt-1'>Software Developer</p>

                <div className='space-x-4 mt-4'>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 155.139 155.139'
                    >
                      <path
                        d='M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z'
                        data-original='#010002'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z'
                        data-original='#03a9f4'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14px'
                      fill='#fff'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z'
                        data-original='#0077b5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='font-[sans-serif] text-[#333] text-center max-w-xl mx-auto mt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-14 fill-gray-300 inline'
          viewBox='0 0 475.082 475.081'
        >
          <path
            d='M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z'
            data-original='#000000'
          />
        </svg>

        <div className='mt-8'>
          <p className='text-base'>
            Exceptional Service: Prompt Delivery and Enjoyable Dining
            Experience.
          </p>

          <div className='flex flex-wrap items-center justify-center mt-4'>
            <img
              src='https://readymadeui.com/profile_2.webp'
              className='w-10 h-10 rounded-full'
            />
            <div className='ml-4 text-left'>
              <p className='text-sm font-bold'>John Doe</p>
              <p className='text-xs text-gray-500'>johndoe23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}