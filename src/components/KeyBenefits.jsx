import { useState } from "react";
import {
  Target,
  Brain,
  BookOpen,
  Lightbulb,
  Smile,
  Trophy,
} from "lucide-react";
import "../App.css";

const KeyBenefits = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const benefits = [
    {
      id: 1,
      title: "BUILD CONFIDENCE IN PROBLEM-SOLVING",
      description:
        "Brainy Abacus goes beyond improving math skills. It nurtures problem-solving abilities, fostering resilience in overcoming academic challenges",
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "EQUIP YOUR CHILD FOR THE FUTURE",
      description:
        "Our curriculum isn't just about math. Brainy Abacus develops life skills such as analytical thinking, time management, and multitasking, giving your child a lifelong competitive edge.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "CREATE POSITIVE LEARNING HABITS",
      description:
        "Screen time can be turned into a powerful tool for learning. Our blend of digital and physical activities ensures your child builds discipline and focus, crucial skills for success in both academics and life.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "DEVELOP CRITICAL THINKING",
      description:
        "Our unique Diziphyzi technique isn't just about mental arithmetic—it sharpens your child's critical thinking, memory recall, and concentration, skills essential for excelling in any subject.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "TRANSFORM MATH ANXIETY INTO ENTHUSIASM",
      description:
        "Many children struggle with math anxiety. Brainy Abacus transforms the way they approach numbers, making math fun and engaging, and helping them gain mastery over the subject.",
      icon: <Smile className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "INTERNATIONAL RECOGNITION AND COMPETITIVE EDGE",
      description:
        "Your child will not only excel academically but also have the chance to compete at state, national, and international levels, earning globally recognized certifications.",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  const questions = [
    "Is your child struggling with focus and concentration?",
    "Does math feel like a daunting subject to them?",
    "Are you worried about how much time they spend in front of screens?",
    "Do you want your child to develop critical problem-solving and analytical thinking skills?",
    "Is building confidence and academic success important to you?",
    "Do you want your child to excel in both school and future competitive environments?",
    "Are you looking for a fun, engaging way to enhance your child's brain development?",
    "Does your child need help managing time and multitasking effectively?",
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 poppins-light "
      id="benefits"
    >
      {/* Header */}

      {/* Benefits Container */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="max-w-2xl mx-auto p-6 border-2 mb-4">
          <h2 className="text-4xl font-bold mb-6">
            Does Your Child Need This Webinar?
          </h2>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-0.5 flex-shrink-0 rounded  accent-[#024978] "
                ></input>
                <span className="text-base">{question}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">
              If You Checked Two or More Boxes...
            </h3>
            <p className="font-medium">
              Your child is the{" "}
              <span className="font-bold">perfect candidate</span> for the
              Brainy Abacus Free Webinar!
            </p>
            <p>
              Equip them with <span className="font-bold">lifelong skills</span>
              , boost their <span className="font-bold">confidence</span>, and
              transform the way they approach learning.
            </p>
          </div>
          <div className="flex p-5">
            <button
              className="bg-[#024978] p-4 text-lg text-white rounded-sm hover:bg-[#0470b5] transition-colors duration-300 mx-auto "
              style={{
                animation: "pulse-scale 1.5s ease-in-out infinite",
              }}
            >
              Register Now!!
            </button>
          </div>
        </div>
        {/* List Section */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 p-4 pt-6 border-2 mb-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-4xl font-bold text-black mb-2">
              Key Benefits
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Benefits Of This Course
            </p>
          </div>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedItem(
                    expandedItem === benefit.id ? null : benefit.id
                  )
                }
                className="w-full flex items-center gap-3 p-3 sm:gap-4 sm:p-4 text-left"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#444b58] text-white">
                  {benefit.id}
                </div>
                <h3 className="font-semibold text-gray-800 text-md sm:text-base">
                  {benefit.title}
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    expandedItem === benefit.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-4 pb-4 pt-2 text-gray-600">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
