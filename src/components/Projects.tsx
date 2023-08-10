import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className="mx-auto max-w-5xl">
        <h1 className="justify-center flex font-bold py-6">🔨 MY PROJECTS </h1>
  
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {/* Project 1 */}
            <div className="p-6 max-w-sm mx-auto bg-purple-300 rounded-xl shadow-lg flex flex-col space-y-4">
                <h3 className="font-black">Web Crawler</h3>
                <a className="icon" href="https://github.com/ariazmzhang/python-based-search-engine">
                    <i className="fa-brands fa-github"></i>
                </a>
                <ul className="list-inside list-disc">
                    <li>Repeatedly extracts URLs and information from web pages and saves locally</li>
                    <li>Calculate cosine similarity score calculation between user and pages content to determine page score</li>
                </ul>
            </div>

           {/* Project 2 */}
            <div className="p-6 max-w-sm mx-auto bg-purple-300 rounded-xl shadow-lg flex flex-col space-y-4">
                <h3>Search Engine</h3>
                <a className="icon" href="https://github.com/ariazmzhang/java-based-search-engine"><i className="fa-brands fa-github"></i></a>
                <ul className="list-inside list-disc">
                <li><span className="emoji">&#x1F6E0;</span>PageRank algorithm (used by Google Search) to rank web pages</li>
                <li><span className="emoji">&#x1F6E0;</span>Object-Orientation and different data structures</li>
                <li><span className="emoji">&#x1F6E0;</span>User-friendly graphical user interface (GUI)</li>
                </ul>
            </div>
            {/* Project 3 */}
    <div className="p-6 max-w-sm mx-auto bg-purple-300 rounded-xl shadow-lg flex flex-col space-y-4">
      <h3>Feedback-Collection Web App</h3>
      <a className="icon" href="https://github.com/ariazmzhang/feedback-collection"><i className="fa-brands fa-github"></i></a>
      <ul className="list-inside list-disc">
        <li><span className="emoji">&#x1F6E0;</span>Full-stack web application for bulk emailing and feedback collection</li>
        <li><span className="emoji">&#x1F6E0;</span>Authentication process with Google OAuth.</li>
        <li><span className="emoji">&#x1F6E0;</span>Utilized advanced API key handling techniques</li>
      </ul>
    </div>

    {/* Project 4 */}
    <div className="p-6 max-w-sm mx-auto bg-purple-300 rounded-xl shadow-lg flex flex-col space-y-4">
      <h3>Keeper Web App</h3>
      <a className="icon" href="https://github.com/ariazmzhang/feedback-collection"><i className="fa-brands fa-github"></i></a>
      <ul className="list-inside list-disc">
        <li><span className="emoji">&#x1F6E0;</span>Personal note-taking web application (GoogleKeeper-like) using React</li>
        <li><span className="emoji">&#x1F6E0;</span>Utilized both class-based and functional React components</li>
        <li><span className="emoji">&#x1F6E0;</span>Enhanced and developed reusable components to increase development productivity</li>
      </ul>
    </div>
  
        </div>
    </div>
  )
}

export default Projects