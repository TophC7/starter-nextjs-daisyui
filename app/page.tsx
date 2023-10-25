'use client'

import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from 'public/next.svg'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="px-8 font-Alpino">
      <Head>
        <title>Next.js + DaisyUi Starter</title>
        <meta name="description" content="Configured by Chris Toph | @TophC7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="dropdown dropdown-end absolute right-0 top-0 pr-8 pt-8">
        <label tabIndex={0} className="btn m-1">
          Theme
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-50 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a data-set-theme="light">Light</a>
          </li>
          <li>
            <a data-set-theme="dark">Dark</a>
          </li>
          <li>
            <a data-set-theme="cupcake">Cupcake</a>
          </li>
          <li>
            <a data-set-theme="retro">Retro</a>
          </li>
          <li>
            <a data-set-theme="corporate">Corporate</a>
          </li>
          <li>
            <a data-set-theme="business">Business</a>
          </li>
        </ul>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-8">
        <div className="relative grid grid-cols-1 grid-rows-1 whitespace-nowrap text-center text-6xl lg:grid-cols-2">
          Welcome to
          <NextLogo className="ml-10 mt-4 min-w-[15rem] fill-primary lg:ml-4 lg:mt-0" />
          <a
            href="https://daisyui.com"
            className=" link-hover link absolute -right-1 bottom-0 w-max translate-y-[120%] text-sm"
          >
            w/ daisyUI!🌻
          </a>
        </div>

        <aside className="grid grid-cols-1 items-center gap-8 text-center text-2xl leading-6 lg:mb-0 lg:w-full lg:max-w-5xl  lg:grid-cols-2 lg:text-right">
          Get started by editing
          <div className="mockup-code mx-auto w-min bg-primary text-primary-content md:mx-0">
            <pre data-prefix="∟">
              <code>pages/index.js</code>
            </pre>
          </div>
        </aside>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group card transition-colors hover:bg-base-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Docs
                <FontAwesomeIcon
                  className="ml-1 inline-block text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  icon={faArrowRight}
                />
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group card transition-colors hover:bg-base-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Learn
                <FontAwesomeIcon
                  className="ml-1 inline-block text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  icon={faArrowRight}
                />
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </div>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group card transition-colors hover:bg-base-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Templates
                <FontAwesomeIcon
                  className="ml-1 inline-block text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  icon={faArrowRight}
                />
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore the Next.js 13 playground.
              </p>
            </div>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group card transition-colors hover:bg-base-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl">
                {' '}
                Deploy
                <FontAwesomeIcon
                  className="ml-1 inline-block text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  icon={faArrowRight}
                />
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer className="flex flex-1 items-center justify-center border-t-[3px] border-base-content py-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex flex-grow items-center justify-center"
        >
          Powered by
          <span className="ml-4 -rotate-90 text-2xl text-base-content">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </a>
      </footer>
    </div>
  )
}
