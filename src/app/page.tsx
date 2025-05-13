import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Hello, I&apos;m Ezekiel Charo,</h1>
        <div className="lg:max-w-96 *:border-l-4 *:border-white *:ps-4">
          <p className="mb-6">
            A software Engineer with over 4 years of professional experience.
          </p>
          <p className="mb-6">
            I build beautiful, performant, and secure web and mobile experiences
            that make a difference.
          </p>
          <p>
            Currently driving innovation at &nbsp;
            <a
              href="https://www.zeraki.app/zeraki-finance"
              className="text-blue-300 border-b border-blue-400"
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
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
