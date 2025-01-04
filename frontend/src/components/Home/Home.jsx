import { Carousel } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Homecard";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      text: "Carousel posts have 20% higher engagement than static posts.",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      text: "Reels drive 2x more comments compared to other formats.",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      text: "Static images are best for audience reach during weekdays.",
    },
  ];

  const features = [
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1681487912304-274bac203320?q=80&amp;w=1925&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "In-Depth Analytics",
      description:
        "Gain detailed insights into social media performance metrics.",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1681487803114-637de228039c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AI-Powered Recommendations",
      description:
        "Leverage AI to optimize your content strategy effortlessly.",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1681487899272-f0e55f4fb7e0?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Actionable Insights",
      description:
        "Get clear, actionable steps to enhance engagement and growth.",
    },
  ];

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="mx-auto  flex flex-col gap-14">
      {/* Introduction */}
      <section className="flex justify-center items-center max-w-6xl mx-auto gap-8 mt-6 py-6">
        <div className="flex flex-col gap-6 items-start text-left max-w-3xl pl-6">
          <h2 className="text-4xl font-extrabold text-purple1">
            Analyze Social Media Trends with AI Insights
          </h2>
          <p className="text-gray-700 max-w-xl">
            Unlock valuable insights from your social media data to optimize
            engagement, improve performance, and drive growth.
          </p>
          <div className="flex gap-5 mt-8">
            <Link className="bg-purple1 text-white font-bold my-auto py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform">
              Demo
            </Link>
            <Link
              to="/overview"
              className="text-purple1  border-purple1 border-2 my-auto font-bold py-3.5 px-8 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              Overview
            </Link>
          </div>
        </div>

        <div className="hidden lg:block ml-10">
          <img
            src="social.png"
            alt="Social Media"
            className="transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </section>

      {/* GPT Insights Carousel */}
      <section className="max-w-6xl mx-auto pb-6">
        <Carousel
          className="rounded-xl h-96"
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full">
              <img src={image.src} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <h2 className="text-white text-3xl font-bold text-center p-4">
                  {image.text}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto py-6">
        <h3 className="text-4xl font-bold text-purple1 text-center">
          Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto py-6">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold text-purple1">
              How It Works
            </h3>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Explore insights and answers from your social media data using
              AI-driven workflows. Here’s how the process unfolds:
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="question.svg"
                alt=""
                className="w-24 p-2 hover:scale-105 rounded-full shadow-lg mb-6"
              />
              <h4 className="text-xl font-bold text-gray-700">
                Step 1: Ask a Question
              </h4>
              <p className="mt-2 text-gray-600">
                Submit your query about social media engagement or trends
                directly on the platform.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="analysis.svg"
                alt=""
                className="w-24 p-2 hover:scale-105 rounded-full shadow-lg mb-6"
              />
              <h4 className="text-xl font-bold text-gray-700">
                Step 2: AI Analysis
              </h4>
              <p className="mt-2 text-gray-600">
                Langflow processes your question through advanced workflows to
                derive relevant insights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="insight.svg"
                alt=""
                className="w-24 p-3 hover:scale-105 rounded-full shadow-lg mb-6"
              />
              <h4 className="text-xl font-bold text-gray-700">
                Step 3: Get Insights
              </h4>
              <p className="mt-2 text-gray-600">
                Receive clear, actionable insights tailored to your question,
                enabling data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About  */}
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-12"
      >
        <div className="flex justify-center gap-24 py-12">
          <img
            src="happy.webp"
            alt="Social Media Analytics"
            className="rounded-full w-36 h-36 shadow-xl transform hover:scale-105 transition-all duration-300 my-auto ml-10"
          />

          <div className="max-w-xl ml-8">
            <h3 className="text-4xl font-extrabold text-white mb-8">
              About the Project
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed ">
              This project was developed as part of the
              <span className="font-bold text-yellow-300 pointer">
                {" "}
                Level Supermind Hackathon
              </span>
              . The goal was to create a dynamic analytics module for evaluating
              social media performance with tools like
              <span className="font-bold text-yellow-300 cursor-pointer">
                {" "}
                <a href="https://www.langflow.org/"> Langflow </a>
              </span>{" "}
              and
              <span className="font-bold text-yellow-300">
                {" "}
                <a href="https://www.datastax.com/"> DataStax Astra DB </a>
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {!isAtTop && (
        <button
          className="fixed bottom-8 right-8 bg-purple1 p-1 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
          onClick={scrollToTop}
        >
          <img src="top.svg" className="w-12" alt="" />
        </button>
      )}
    </main>
  );
};

export default Home;
