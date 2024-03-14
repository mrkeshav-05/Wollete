import React from 'react'

export default function GooglePlay() {
  return (
    <div>
      <button
        type="button"
        className="group flex w-[160px] min-w-[160px] py-[18px] px-[16px] justify-center items-center gap-[4px] rounded-[10px] border-[2px] 
      border-solid border-[#0E72E8] bg-transparent text-[#0E72E8] text-[16px] not-italic font-bold leading-[150%] hover:bg-[#0E72E8] hover:text-[#F3F3F3]
      active:bg-[#00489E]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="block group-hover:hidden"
        >
          <path
            d="M4 19.7665V4.2335C4 3.69442 4.30648 3.21929 4.75718 3L13.6361 12L4.75718 21C4.30648 20.7716 4 20.3056 4 19.7665ZM16.4485 14.8508L6.7493 20.534L14.4023 12.7766L16.4485 14.8508ZM19.4682 10.9127C19.7746 11.1594 20 11.5431 20 12C20 12.4569 19.8017 12.8223 19.4862 13.0782L17.422 14.2843L15.1685 12L17.422 9.71574L19.4682 10.9127ZM6.7493 3.46599L16.4485 9.14924L14.4023 11.2233L6.7493 3.46599Z"
            fill="#0E72E8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="hidden group-hover:block group-active:block"
        >
          <path
            d="M4 19.7665V4.2335C4 3.69442 4.30648 3.21929 4.75718 3L13.6361 12L4.75718 21C4.30648 20.7716 4 20.3056 4 19.7665ZM16.4485 14.8508L6.7493 20.534L14.4023 12.7766L16.4485 14.8508ZM19.4682 10.9127C19.7746 11.1594 20 11.5431 20 12C20 12.4569 19.8017 12.8223 19.4862 13.0782L17.422 14.2843L15.1685 12L17.422 9.71574L19.4682 10.9127ZM6.7493 3.46599L16.4485 9.14924L14.4023 11.2233L6.7493 3.46599Z"
            fill="#F3F3F3"
          />
        </svg>
        Google Play
      </button>
    </div>
  )
}
