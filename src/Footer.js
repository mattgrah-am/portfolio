const Footer = () => {
  return (
    <div className="mt-4 self-end justify-self-center px-4 text-center">
      <p className="mb-2 text-[0.75rem] text-neutral-500">
        Created with{" "}
        <svg
          className="inline align-baseline"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <rect
            x="0"
            y="0"
            width="1024"
            height="1024"
            fill="none"
            stroke="none"
          />
          <path
            d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"
            fill="currentColor"
          />
        </svg>{" "}
        by{" "}
        <a
          className="hover:text-neutral-100 dark:hover:text-neutral-900"
          href="https://www.mattgrah.am/"
        >
          Matt Graham
        </a>
        , using{" "}
        <a
          className="hover:text-neutral-100 dark:hover:text-neutral-900"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="inline align-baseline"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              fill="none"
              stroke="none"
            />
            <circle cx="12" cy="11.245" r="1.785" fill="currentColor" />
            <path
              d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452c0-1.452 1.684-2.711 4.617-3.452l.395-.1l.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178l-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542c0 .954 1.368 1.913 3.598 2.54c.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177l.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39l.395.1c2.935.741 4.617 2 4.617 3.453c0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54c2.23-.627 3.599-1.586 3.599-2.54c0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"
              fill="currentColor"
            />
            <path
              d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717c1.235-.715 3.222.13 5.303 2.265l.284.292l-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162l-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145c-.828.477-.974 2.138-.404 4.38c.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291l.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16l.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1l.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986c.225 0 .423-.05.589-.145c.829-.478.976-2.142.404-4.384c-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"
              fill="currentColor"
            />
            <path
              d="M17.58 8.695l-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017l-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291l.283-.29c2.08-2.134 4.066-2.979 5.303-2.265c1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417c.571-2.242.425-3.903-.404-4.381c-.824-.477-2.375.253-4.004 1.841c.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391l.395.1c.964.243 2.026.414 3.158.507l.194.019l.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29l-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384c.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123a20.692 20.692 0 0 1-2.696-.419z"
              fill="currentColor"
            />
            <path
              d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017l-.113-.162a25.697 25.697 0 0 1-1.126-1.769a26.028 26.028 0 0 1-.971-1.859l-.084-.177l.084-.179c.299-.632.622-1.252.971-1.858c.347-.596.726-1.192 1.126-1.77l.113-.16l.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019l.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179l-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162l-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168a23.916 23.916 0 0 0-1.832-3.168a23.877 23.877 0 0 0-3.667 0a23.743 23.743 0 0 0-1.832 3.168a24.82 24.82 0 0 0 1.832 3.168z"
              fill="currentColor"
            />
          </svg>{" "}
          React
        </a>{" "}
        and{" "}
        <a
          className="hover:text-neutral-100 dark:hover:text-neutral-900"
          href="https://www.tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="inline align-baseline"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
              fill="currentColor"
            />
          </svg>{" "}
          TailwindCSS
        </a>
        . The code is available at{" "}
        <a
          className="hover:text-neutral-100 dark:hover:text-neutral-900"
          href="https://github.com/mattgrah-am/mattgrah.am_web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="inline align-baseline"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 64 64"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              data-name="layer2"
              d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
              fill="currentColor"
            ></path>
            <path
              data-name="layer1"
              d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          Github.
        </a>
      </p>
    </div>
  );
};

export default Footer;
