import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}


export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={120}
      viewBox="0 0 106 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3_54)" fill="#81D8F7">
        <path d="M105.391 60.01c0-6.976-8.743-13.587-22.148-17.687 3.094-13.653 1.719-24.514-4.34-27.992-1.396-.816-3.028-1.202-4.811-1.202v4.787c.988 0 1.783.193 2.449.558 2.921 1.674 4.189 8.05 3.2 16.25-.236 2.018-.622 4.143-1.095 6.31-4.21-1.03-8.808-1.824-13.641-2.339-2.9-3.971-5.908-7.578-8.937-10.733 7.004-6.504 13.577-10.067 18.045-10.067v-4.787c-5.907 0-13.64 4.207-21.46 11.505-7.82-7.255-15.553-11.42-21.461-11.42v4.787c4.447 0 11.042 3.542 18.045 10.003a101.401 101.401 0 00-8.872 10.712c-4.855.515-9.452 1.31-13.663 2.361a64.719 64.719 0 01-1.117-6.225c-1.01-8.2.236-14.575 3.137-16.271.644-.386 1.482-.558 2.47-.558v-4.787c-1.805 0-3.437.386-4.855 1.202-6.036 3.478-7.39 14.318-4.275 27.927C8.7 46.466 0 53.056 0 60.011c0 6.976 8.743 13.588 22.148 17.688-3.093 13.652-1.718 24.514 4.34 27.991 1.396.816 3.028 1.202 4.833 1.202 5.907 0 13.641-4.207 21.46-11.505 7.82 7.255 15.554 11.42 21.461 11.42 1.805 0 3.437-.387 4.855-1.203 6.037-3.477 7.39-14.317 4.275-27.927 13.319-4.1 22.019-10.711 22.019-17.666zm-27.97-14.317c-.794 2.769-1.782 5.624-2.9 8.479a101.516 101.516 0 00-2.814-5.152 116.059 116.059 0 00-3.093-5.023 97.01 97.01 0 018.808 1.696zm-9.838 22.861c-1.676 2.898-3.394 5.646-5.177 8.2-3.201.28-6.445.43-9.71.43-3.244 0-6.488-.15-9.667-.408a118.318 118.318 0 01-5.199-8.157 111.809 111.809 0 01-4.468-8.544 111.931 111.931 0 014.447-8.565c1.675-2.898 3.394-5.645 5.177-8.2 3.2-.279 6.444-.43 9.71-.43 3.244 0 6.487.151 9.667.409a118.345 118.345 0 015.198 8.157 111.809 111.809 0 014.469 8.543 120.212 120.212 0 01-4.447 8.565zm6.939-2.79a91.946 91.946 0 012.964 8.543 96.45 96.45 0 01-8.85 1.717 118.594 118.594 0 003.093-5.087 121.914 121.914 0 002.793-5.173zM52.739 88.668a88.51 88.51 0 01-5.972-6.87c1.933.087 3.91.15 5.907.15 2.02 0 4.017-.042 5.972-.15a83.795 83.795 0 01-5.907 6.87zM36.756 76.024a96.982 96.982 0 01-8.808-1.695c.795-2.77 1.783-5.625 2.9-8.48.881 1.718 1.805 3.435 2.815 5.152 1.01 1.718 2.04 3.392 3.093 5.023zm15.875-44.67a88.488 88.488 0 015.972 6.869c-1.933-.086-3.91-.15-5.907-.15-2.02 0-4.017.042-5.972.15a83.815 83.815 0 015.907-6.87zM36.734 43.997a118.598 118.598 0 00-5.886 10.24 91.956 91.956 0 01-2.964-8.544 104.427 104.427 0 018.85-1.696zm-19.44 26.876C9.687 67.63 4.768 63.38 4.768 60.01s4.92-7.642 12.524-10.862c1.848-.794 3.867-1.503 5.95-2.168 1.225 4.207 2.836 8.586 4.834 13.073-1.976 4.465-3.566 8.822-4.769 13.008a65.298 65.298 0 01-6.015-2.19zm11.556 30.674c-2.921-1.674-4.189-8.05-3.2-16.25.236-2.017.623-4.142 1.095-6.31 4.21 1.03 8.808 1.824 13.641 2.34 2.9 3.97 5.908 7.577 8.937 10.732-7.003 6.505-13.577 10.068-18.045 10.068-.967-.022-1.783-.215-2.427-.58zM79.806 85.19c1.01 8.2-.236 14.576-3.136 16.271-.645.387-1.483.559-2.47.559-4.448 0-11.043-3.542-18.046-10.004a101.401 101.401 0 008.872-10.711c4.855-.515 9.453-1.31 13.663-2.361.494 2.168.88 4.25 1.117 6.246zm8.27-14.317c-1.847.794-3.866 1.502-5.95 2.168-1.224-4.208-2.836-8.587-4.833-13.073 1.976-4.465 3.566-8.823 4.769-13.009a68.155 68.155 0 016.036 2.19c7.605 3.241 12.524 7.492 12.524 10.862-.021 3.37-4.94 7.642-12.545 10.861z" />
        <path d="M52.674 69.82c5.422 0 9.818-4.391 9.818-9.81 0-5.417-4.396-9.81-9.818-9.81s-9.817 4.393-9.817 9.81c0 5.419 4.395 9.81 9.817 9.81z" />
      </g>
      <defs>
        <clipPath id="clip0_3_54">
          <path fill="#fff" d="M0 0H105.391V120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

