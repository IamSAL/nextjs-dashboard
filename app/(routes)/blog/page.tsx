/* eslint-disable react/no-unescaped-entities */
import PageSubHero from '@/app/ui/common/PageSubHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>    <PageSubHero title='Blog' subtitle=' All the latest Tailwind CSS news, straight from the&nbsp;team.' />
            <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
                <header className="py-16 sm:text-center">

                    <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
                        <h2 className="sr-only">Sign up for our newsletter</h2>
                        <form
                            action="https://app.convertkit.com/forms/3181837/subscriptions"
                            method="post"
                            className="flex flex-wrap -mx-2"
                        >
                            <div className="px-2 grow-[9999] basis-64 mt-3">
                                <div className="group relative">

                                    <input
                                        name="email_address"
                                        type="text"

                                        autoComplete="search"
                                        aria-label="search"
                                        className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            <div className="px-2 grow flex mt-3">
                                <button
                                    type="submit"
                                    className="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </section>
                </header>
                <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
                    <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
                    <div className="space-y-16">


                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
                            return <article className="relative group" key={idx}>
                                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                                <svg
                                    viewBox="0 0 9 9"
                                    className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                                >
                                    <circle
                                        cx="4.5"
                                        cy="4.5"
                                        r="4.5"
                                        stroke="currentColor"
                                        className="fill-white dark:fill-slate-900"
                                        strokeWidth={2}
                                    />
                                </svg>
                                <div className="relative">
                                    <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                                        Meet Studio: Our beautiful new agency site template
                                    </h3>
                                    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                                        <p>
                                            We just released{" "}
                                            <a href="https://tailwindui.com/templates/studio">Studio</a> — a
                                            beautiful new agency website template we’ve been working on for
                                            the last couple of months for Tailwind UI.
                                        </p>
                                    </div>
                                    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                        <dt className="sr-only">Date</dt>
                                        <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                            <time dateTime="2023-08-07T10:30:00.000Z">August 7, 2023</time>
                                        </dd>
                                    </dl>
                                </div>
                                <a
                                    className="flex items-center text-sm text-sky-500 font-medium"
                                    href="/blog/2023-08-07-meet-studio-our-new-agency-template"
                                >
                                    <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                                    <Link href={`/blog/test`}>
                                        <span className="relative">
                                            Read more
                                            <span className="sr-only">
                                                , Meet Studio: Our beautiful new agency site template
                                            </span>
                                        </span></Link>
                                    <svg
                                        className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                                        width={3}
                                        height={6}
                                        viewBox="0 0 3 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M0 0L3 3L0 6" />
                                    </svg>
                                </a>
                            </article>
                        })}
                    </div>
                </div>
            </main>


        </div>
    )
}

export default page