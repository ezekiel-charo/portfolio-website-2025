import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-4xl font-semibold mb-2">
            Hello, I&apos;m &nbsp;
            <span className="text-green-500  font-bold">Ezekiel Charo</span>
          </h1>
          <div className="text-sm font-medium text-gray-500">Software Developer | Problem solver</div>
        </div>
        <div className="lg:max-w-96 *:border-l-6 *:border-green-950 *:ps-4">
          <p className="mb-6">
            A software Developer with over 4 years of professional experience.
          </p>
          <p className="mb-6">
            I build beautiful, performant, and secure web and mobile experiences
            that make a difference.
          </p>
          <p>
            Currently driving innovation at &nbsp;
            <a
              href="https://www.zeraki.app/zeraki-finance"
              className="text-green-500 border-b border-green-500"
              target="_blank"
            >
              Zeraki
            </a>
            , where I&apos;ve helped develop a school accounting solution now
            used by 1000+ schools across Kenya and Uganda.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/resume.pdf"
            rel="noopener noreferrer"
            download
          >
            Download my resume
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Projects
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          href="https://github.com/ezekiel-charo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Check Out My Github →
        </a>
      </footer>
    </div>
  );
}
