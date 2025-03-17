import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const content = [
  `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).`,

  `HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <search>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.`,

  `HTML: Creating the content!  HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. This article provides a basic understanding of HTML and its functions, and shows you how to create the basic content for your first website.`,

  `Anatomy of an HTML element! 
  Point Number 1. The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
  2. The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
  3. The content: This is the content of the element, which in this case, is just text.
  4. The element: The opening tag, the closing tag, and the content together comprise the element.`,

  "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id",
];

export default function CourseContent() {
  const navigate = useNavigate()
  const cards = [
    {
      title: "Blog",
      description: "Read Our Latest Blogs",
      icon: "🖥️",
      href:"#",
      bgColor: "bg-blue-100",
    },
    {
      title: "Courses",
      description: "Access Our Latest Courses",
      icon: "📘",
      href:"#",
      bgColor: "bg-red-100",
    },
    {
      title: "Test Series",
      description: "Explore JEE 2025 Test Series",
      icon: "📄",
      href:"/test-paper",
      bgColor: "bg-green-100",
    },
    {
      title: "Books",
      description: "Find Preparation Books",
      icon: "📖",
      href:"#",
      bgColor: "bg-blue-200",
    },
  ];

  const [text, setText] = useState(
    "Hello Sir, I am your assistant and please use me as your guide"
  );

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    console.log(text);
    window.speechSynthesis.speak(speech);
  };

  const pause = () => {
    window.speechSynthesis.pause();
  };
  const Resume = () => {
    window.speechSynthesis.resume();
  };
  const stop = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="flex justify-center items-center mb-2 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex cursor-pointer flex-col justify-between items-start p-4 rounded-2xl shadow-lg ${card.bgColor} transition-transform transform hover:scale-105`}
              onClick={()=>navigate(`${card.href}`)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <button className="mt-4 text-blue-500 font-medium hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <div className="my-7">
                <Button onClick={() => speak(content[0])}>Speak</Button>
                <Button onClick={stop}>Stop</Button>
              </div>
              <p className="text-base/7 font-semibold text-indigo-600">
                Learn faster
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                HTML: HyperText Markup Language
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">{content[0]}</p>
            </div>
          </div>
        </div>
        <div className="-mt-5 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
  <img
    alt=""
    src="https://img.freepik.com/premium-vector/coming-soon-banner-with-brick-wall_19426-903.jpg"
    className="w-full max-w-[50rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:max-w-[57rem]"
  />
</div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="my-7">
              <Button onClick={() => speak(content[1])}>Speak</Button>
              <Button onClick={stop}>Stop</Button>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>{content[1]}</p>
              <div className="my-5">
                <Button onClick={() => speak(content[2])}>Speak</Button>
                <Button onClick={stop}>Stop</Button>
              </div>
              <h1 className="my-10 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                HTML: Creating the content
              </h1>
              <p className="mt-8">{content[2]}</p>

              <div className="my-7">
                <Button onClick={() => speak(content[3])}>Speak</Button>
                <Button onClick={stop}>Stop</Button>
              </div>
              <h2 className="my-8 text-2xl font-bold tracking-tight text-gray-900">
                Anatomy of an HTML element
              </h2>
              
              
        <div className="-mt-5 -ml-12 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
  <img
    alt=""
    src="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content/grumpy-cat-small.png"
    className="w-full max-w-[50rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:max-w-[50rem]"
  />
</div>
                <ol class="list-decimal list-inside space-y-4 text-gray-800">
                  <li>
                    <strong>The opening tag:</strong> This consists of the name
                    of the element (in this case,{" "}
                    <code class="px-1 py-0.5 bg-gray-100 rounded text-gray-900">
                      p
                    </code>
                    ), wrapped in opening and closing <b>angle brackets</b>.
                    This states where the element begins or starts to take
                    effect — in this case where the paragraph begins.
                  </li>
                  <li>
                    <strong>The closing tag:</strong> This is the same as the
                    opening tag, except that it includes a{" "}
                    <em>forward slash</em> before the element name. This states
                    where the element ends — in this case where the paragraph
                    ends. Failing to add a closing tag is one of the standard
                    beginner errors and can lead to strange results.
                  </li>
                  <li>
                    <strong>The content:</strong> This is the content of the
                    element, which in this case, is just text.
                  </li>
                  <li>
                    <strong>The element:</strong> The opening tag, the closing
                    tag, and the content together comprise the element.
                  </li>
                </ol>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
