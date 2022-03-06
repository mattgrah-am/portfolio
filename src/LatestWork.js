const LatestWork = () => {
  return (
    <div className="font-roboto-mono ml-12 md:ml-24">
      <p className="mt-4">LATEST WORK:</p>
      <div className="flex flex-wrap gap-6">
        <div className="card">
          <p className="font-bold">TicTacToe</p>
          <a
            href="https://mattgrah-am.github.io/tictactoe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <img
              className="my-2 h-48 w-64 border-4 border-solid border-neutral-900 object-cover"
              src="./images/tictactoe.webp"
              alt="Tictactoe App"
            />
          </a>
          <div className="flex w-full gap-6">
            <a
              href="https://github.com/mattgrah-am/tictactoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Github
            </a>
            <a
              href="https://mattgrah-am.github.io/tictactoe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Live
            </a>
          </div>
        </div>
        <div className="card">
          <p className="font-bold">JopAppTrack</p>
          <a
            href="https://floating-forest-21500.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <img
              className="my-2 h-48 w-64 border-4 border-solid border-neutral-900 object-cover"
              src="./images/jobapptrack.webp"
              alt="Tictactoe App"
            />
          </a>
          <div className="flex w-full gap-6">
            <a
              href="https://github.com/mattgrah-am/jobapptrack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Github
            </a>
            <a
              href="https://floating-forest-21500.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Live
            </a>
          </div>
        </div>
        <div className="card">
          <p className="font-bold">TailwindCSS Theme</p>
          <a
            href="https://github.com/mattgrah-am/tailwind_theme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <img
              className="my-2 h-48 w-64 border-4 border-solid border-neutral-900 object-cover"
              src="./images/tailwindcss.webp"
              alt="Tictactoe App"
            />
          </a>
          <div className="flex w-full gap-6">
            <a
              href="https://github.com/mattgrah-am/tailwind_theme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Github
            </a>
            <a
              href="https://mattgrah-am.github.io/tailwind_theme/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:dark:text-neutral-100"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
