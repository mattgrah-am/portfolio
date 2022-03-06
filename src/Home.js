const Home = () => {
  return (
    <div className="font-roboto-mono ml-12 mt-12 grid max-w-[36rem] place-content-center md:ml-24">
      <div>
        <p className="text-2xl">Hi, I am</p>
        <p className="text-6xl">Matt Graham</p>
        <p className="pt-6 text-base">
          Software developer, currently studying General Assembly's Software
          Engineering Immersive Online (Flex).
        </p>
        <div className="mt-6 flex flex-col items-start text-xs sm:flex-row sm:items-center sm:justify-between ">
          <a
            className="mb-4 border-2  px-2 py-1 sm:mb-0"
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%69%61%6D%40%6D%61%74%74%67%72%61%68%2E%61%6D?subject=Mail from www.mattgrah.am"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <ul className="flex justify-end">
            <li className="mr-4 font-bold">CONNECT:</li>
            <li className="mr-4 hover:text-[#bd2c00]">
              <a
                href="https://github.com/mattgrah-am"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="mr-4 hover:text-[#1da1f2]">
              <a
                href="https://twitter.com/mattgrah_am"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="hover:text-[#0077b5]">
              <a
                href="https://www.linkedin.com/in/mattgrah-am"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
