"use client";
import Head from "../extras/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qudusayo</title>
        <meta
          name="description"
          content="Hello there, I'm Qudusayo. I'm a full-stack developer."
        />
      </Head>
      <main
        style={{ backgroundImage: "url('/bg-blur.svg')" }}
        className="bg-right bg-no-repeat bg-contain h-full bg-[#011627] flex items-center md:h-[90.5%] md:mt-14"
      >
        <div className="m-auto w-3/4 md:w-11/12">
          <div className="text-[#e5e9f0]">
            <span className="md:text-sm">Hi all. I am</span>
            <h1 className=" text-[4em] my-0.5 -mt-1.5">Qudusayo</h1>
            <h2 className="text-[#4d5bce] text-2xl">
              &gt; Full-stack developer
            </h2>
          </div>

          <div className=" mt-20">
            <span className="text-textColor md:text-sm">
              {`//`} find my profile on Github:
            </span>
            <p className="text-white md:text-sm">
              <span className="text-[#4d5bce]">const</span>{" "}
              <span className="text-[#43d9ad]">githubLink</span> ={" "}
              <span className="text-[#e99287]">
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/qudusayo"
                  rel="noreferrer"
                >
                  https://github.com/qudusayo
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
