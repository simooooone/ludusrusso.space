import React from "react"

export const Footer = () => {
  return (
    <div className="w-full text-gray-900 bg-gray-200 p-10 text-center">
      <p className="text-lg">
        Copyright © 2016 - 2020 <strong>@ludusrusso</strong>
      </p>
      <p className="font-bold mt-4 mb-2">
        <a
          className="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="mailto:ludusrusso+website@ludusrusso.space"
        >
          email
        </a>
        <span className="mx-2">&bull;</span>
        <a
          className="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="https://twitter.com/ludusrusso"
        >
          twitter
        </a>
        <span className="mx-2">&bull;</span>

        <a
          className="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="https://www.linkedin.com/in/ludusrusso/"
        >
          linkedin
        </a>
        <span className="mx-2">&bull;</span>

        <a
          className="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="https://github.com/ludusrusso"
        >
          github
        </a>
        <span className="mx-2">&bull;</span>

        <a
          className="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="https://www.youtube.com/user/Ludus489"
        >
          youtube
        </a>
      </p>

      <p>
        This blog is written with <a href="https://www.gatsbyjs.com/">Gatsby</a>{" "}
        and deployed on <a href="https://www.netlify.com/">Netlify</a>!
      </p>
      <p>
        Source Code is{" "}
        <a
          class="font-semibold text-green-700 hover:text-green-900 border-b-2 border-solid"
          href="https://github.com/ludusrusso/ludusrusso.space"
        >
          Available on Github
        </a>
      </p>
    </div>
  )
}
