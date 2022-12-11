"use client";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      {/********************************ORKIT BORDER********************************/}
      <div className="z-[1000] top-0 bg-black w-full h-[2px] fixed"></div>

      {/********************************desktop navbar********************************/}

      <main className="orkit-effect-light z-[999] top-0 font-heading fixed flex h-[85px] w-full items-center md:m-0 md:hidden md:flex-col md:items-center ">
        {/*** Logo ***/}
        <div className="my-auto flex 2xl:ml-auto xl:ml-[-10px] lg:m-auto md:mx-auto  md:mr-[-15%] md:mt-5 md:w-auto sm:ml-[-55px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="logo-setting"
              alt="Imrz Labs"
              width={250}
              height={32}
            />
          </Link>
        </div>

        {/***Nav Items - Links & CTA ***/}
        <div className="mr-[3.5rem] flex w-full justify-end 2xl:w-full md:mx-auto md:mt-[-70%] md:flex-col">
          <nav className="lg:text-tiny my-auto mr-10 flex items-start space-x-10 lg:space-x-10 md:m-auto md:flex-col md:space-y-20 ">
            <Link
              href="#about"
              className="link-style-default ui-active:imrz-blue hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="#where"
              className="link-style-default hover:text-pink-500"
            >
              Where
            </Link>
            <Link
              href="#benefits"
              className="link-style-default hover:text-blue"
            >
              Benefits
            </Link>
            <Link
              href="#packages"
              className="link-style-default hover:text-pink"
            >
              Packages
            </Link>
          </nav>

          {/***Nav CTA ***/}
          <Link href="#contact">
            <button
              type="button"
              className="hover:bg-black imrz-blue h-[50px] w-[150px] rounded-md px-5 text-xs font-semibold uppercase text-white shadow lg:h-[45px] lg:w-[100px] lg:text-tiny md:m-auto md:mb-5 md:ml-[80%] sm:ml-[76%]"
            >
              Contact
            </button>
          </Link>
        </div>
      </main>

      {/********************************mobile navbar********************************/}
      <div className="orkit-effect-light fixed z-50 top-0 hidden h-[64px] w-full md:flex flex-row pr-[6px]">
        <div className="orkit-effect-light flex flex-row justify-between items-center w-full">
          {/*** Nav ***/}
          <div className="navbar-start w-[120px]">
            <input
              id="my-drawer-4"
              type="checkbox"
              className=" drawer-toggle"
            />
            <div className="drawer-content w-auto pr-2 overflow-hidden">
              {/**  Drawer content here **/}
              <label
                htmlFor="my-drawer-4"
                tabIndex={2}
                className="btn btn-ghost btn-circle z-50 mt-2 overflow-hidden"
              >
                <svg
                  fill="none"
                  height="44"
                  viewBox="0 0 24 24"
                  width="44"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
            </div>

            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="imrz-text menu w-full absolute orkit-effect-light p-4 overflow-hidden">
                {/**  Sidebar content here **/}
                <li>
                  <Link href="#about" className="ui-selected:imrz-blue">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#where" className="ui-selected:imrz-pink">
                    Where
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="ui-selected:imrz-blue">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="ui-active:imrz-pink">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*** Logo ***/}
          <div className="flex flex-row h-full w-full object-scale-down mx-auto m-auto justify-center items-center">
            <Link href="/">
              <img src="/logo.svg" className="flex h-[30px]" alt="Imrz Labs" />
            </Link>
          </div>

          {/***Nav CTA ***/}

          <div className="flex items-center justify-end">
            <Link href="/contact">
              <button
                type="button"
                className="justify-self-end hover:bg-black imrz-blue h-[40px] w-[120px] rounded-md object-scale-down text-tiny font-semibold uppercase text-white shadow transition ease-in-out hover:duration-150 sm:hidden"
              >
                Contact
              </button>
            </Link>
            <Link href="/contact">
              <button className="imrz-blue btn btn-ghost rounded-lg md:hidden sm:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="#ffffff"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
