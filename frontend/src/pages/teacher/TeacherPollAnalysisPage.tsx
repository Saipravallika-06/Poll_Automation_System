import React from "react";
import { useParams } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock } from "lucide-react";

// Generic mock data for room analysis
const mockRoomData = {
  room1: {
    name: "Math Quiz Room",
    questions: [
      {
        text: "What is 2 + 2?",
        correctAnswer: "4",
        responses: [
          { student: "Alice", answer: "4", time: 8 },
          { student: "Bob", answer: "4", time: 10 },
          { student: "Charlie", answer: "4", time: 7 },
          { student: "David", answer: "3", time: 9 },
          { student: "Eva", answer: "4", time: 8 },
          { student: "Frank", answer: "2", time: 11 },
        ],
      },
      {
        text: "What is 5 x 3?",
        correctAnswer: "15",
        responses: [
          { student: "Alice", answer: "12", time: 12 },
          { student: "Bob", answer: "15", time: 11 },
          { student: "Charlie", answer: "12", time: 13 },
          { student: "David", answer: "15", time: 10 },
          { student: "Eva", answer: "15", time: 9 },
          { student: "Frank", answer: "10", time: 14 },
        ],
      },
      {
        text: "What is the square root of 16?",
        correctAnswer: "4",
        responses: [
          { student: "Alice", answer: "5", time: 9 },
          { student: "Bob", answer: "5", time: 10 },
          { student: "Charlie", answer: "4", time: 8 },
          { student: "David", answer: "4", time: 7 },
          { student: "Eva", answer: "4", time: 8 },
          { student: "Frank", answer: "3", time: 10 },
        ],
      },
      {
        text: "What is 12 divided by 4?",
        correctAnswer: "3",
        responses: [
          { student: "Alice", answer: "3", time: 7 },
          { student: "Bob", answer: "3", time: 8 },
          { student: "Charlie", answer: "3", time: 6 },
          { student: "David", answer: "4", time: 9 },
          { student: "Eva", answer: "2", time: 10 },
          { student: "Frank", answer: "3", time: 8 },
        ],
      },
      {
        text: "What is 7 + 6?",
        correctAnswer: "13",
        responses: [
          { student: "Alice", answer: "12", time: 8 },
          { student: "Bob", answer: "12", time: 9 },
          { student: "Charlie", answer: "13", time: 7 },
          { student: "David", answer: "13", time: 8 },
          { student: "Eva", answer: "13", time: 7 },
          { student: "Frank", answer: "14", time: 10 },
        ],
      },
    ],
  },
  room2: {
    name: "Science Quiz Room",
    questions: [
      {
        text: "What planet is known as the Red Planet?",
        correctAnswer: "Mars",
        responses: [
          { student: "Alice", answer: "Mars", time: 9 },
          { student: "Bob", answer: "Mars", time: 10 },
          { student: "Charlie", answer: "Mars", time: 8 },
          { student: "David", answer: "Jupiter", time: 11 },
          { student: "Eva", answer: "Mars", time: 7 },
          { student: "Frank", answer: "Venus", time: 12 },
        ],
      },
      {
        text: "What gas do plants absorb from the atmosphere?",
        correctAnswer: "Carbon Dioxide",
        responses: [
          { student: "Alice", answer: "Oxygen", time: 10 },
          { student: "Bob", answer: "Oxygen", time: 11 },
          { student: "Charlie", answer: "Carbon Dioxide", time: 9 },
          { student: "David", answer: "Carbon Dioxide", time: 8 },
          { student: "Eva", answer: "Carbon Dioxide", time: 10 },
          { student: "Frank", answer: "Oxygen", time: 12 },
        ],
      },
      {
        text: "What is H2O commonly known as?",
        correctAnswer: "Water",
        responses: [
          { student: "Alice", answer: "Water", time: 7 },
          { student: "Bob", answer: "Ice", time: 8 },
          { student: "Charlie", answer: "Ice", time: 9 },
          { student: "David", answer: "Water", time: 8 },
          { student: "Eva", answer: "Water", time: 7 },
          { student: "Frank", answer: "Water", time: 8 },
        ],
      },
      {
        text: "What force keeps us on the ground?",
        correctAnswer: "Gravity",
        responses: [
          { student: "Alice", answer: "Gravity", time: 8 },
          { student: "Bob", answer: "Gravity", time: 10 },
          { student: "Charlie", answer: "Magnetism", time: 7 },
          { student: "David", answer: "Gravity", time: 9 },
          { student: "Eva", answer: "Gravity", time: 8 },
          { student: "Frank", answer: "Gravity", time: 10 },
        ],
      },
      {
        text: "What organ pumps blood through the body?",
        correctAnswer: "Heart",
        responses: [
          { student: "Alice", answer: "Lungs", time: 6 },
          { student: "Bob", answer: "Lungs", time: 7 },
          { student: "Charlie", answer: "Heart", time: 5 },
          { student: "David", answer: "Heart", time: 6 },
          { student: "Eva", answer: "Heart", time: 7 },
          { student: "Frank", answer: "Heart", time: 8 },
        ],
      },
    ],
  },
  room3: {
    name: "History Quiz Room",
    questions: [
      {
        text: "Who was the first President of the USA?",
        correctAnswer: "George Washington",
        responses: [
          { student: "Alice", answer: "George Washington", time: 10 },
          { student: "Bob", answer: "George Washington", time: 12 },
          { student: "Charlie", answer: "George Washington", time: 11 },
          { student: "David", answer: "Abraham Lincoln", time: 13 },
          { student: "Eva", answer: "George Washington", time: 10 },
          { student: "Frank", answer: "George Washington", time: 12 },
        ],
      },
      {
        text: "In which year did World War II end?",
        correctAnswer: "1945",
        responses: [
          { student: "Alice", answer: "1944", time: 13 },
          { student: "Bob", answer: "1944", time: 14 },
          { student: "Charlie", answer: "1945", time: 12 },
          { student: "David", answer: "1945", time: 13 },
          { student: "Eva", answer: "1945", time: 12 },
          { student: "Frank", answer: "1945", time: 14 },
        ],
      },
      {
        text: "Who discovered America?",
        correctAnswer: "Christopher Columbus",
        responses: [
          { student: "Alice", answer: "Christopher Columbus", time: 11 },
          { student: "Bob", answer: "Christopher Columbus", time: 13 },
          { student: "Charlie", answer: "Vasco da Gama", time: 10 },
          { student: "David", answer: "Christopher Columbus", time: 12 },
          { student: "Eva", answer: "Christopher Columbus", time: 11 },
          { student: "Frank", answer: "Christopher Columbus", time: 13 },
        ],
      },
      {
        text: "What was the name of the ship on which the Pilgrims traveled to America?",
        correctAnswer: "Mayflower",
        responses: [
          { student: "Alice", answer: "Santa Maria", time: 9 },
          { student: "Bob", answer: "Santa Maria", time: 10 },
          { student: "Charlie", answer: "Mayflower", time: 8 },
          { student: "David", answer: "Mayflower", time: 9 },
          { student: "Eva", answer: "Mayflower", time: 8 },
          { student: "Frank", answer: "Mayflower", time: 10 },
        ],
      },
      {
        text: "Who wrote the Declaration of Independence?",
        correctAnswer: "Thomas Jefferson",
        responses: [
          { student: "Alice", answer: "Thomas Jefferson", time: 12 },
          { student: "Bob", answer: "George Washington", time: 13 },
          { student: "Charlie", answer: "Thomas Jefferson", time: 11 },
          { student: "David", answer: "Thomas Jefferson", time: 12 },
          { student: "Eva", answer: "Thomas Jefferson", time: 13 },
          { student: "Frank", answer: "Thomas Jefferson", time: 12 },
        ],
      },
    ],
  },
};

const TubeBar = ({ percentCorrect }: { percentCorrect: number }) => (
  <div className="flex items-center w-full gap-2">
    <div className="relative w-full h-4 bg-red-200 rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-green-400"
        style={{ width: `${percentCorrect}%` }}
      />
      <div
        className="absolute right-0 top-0 h-full bg-red-400"
        style={{ width: `${100 - percentCorrect}%` }}
      />
    </div>
    <span className="text-xs font-semibold">{percentCorrect}%</span>
  </div>
);

const TeacherPollAnalysisPage: React.FC = () => {
  const params = useParams({ from: '/teacher/room/$roomId/analysis' });
  console.log(params); // See what the key is!
  const roomId = params.roomId;
  const room = roomId ? mockRoomData[roomId as keyof typeof mockRoomData] : undefined;

  if (!room) {
    return <div className="p-8">Room not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
        {room.name} - Poll Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {room.questions.map((q, idx) => {
          const total = q.responses.length;
          const correct = q.responses.filter(r => r.answer === q.correctAnswer).length;
          const percentCorrect = Math.round((correct / total) * 100);
          const avgTime = (q.responses.reduce((sum, r) => sum + r.time, 0) / total).toFixed(1);
          return (
            <div key={idx} className="mb-0 p-6 border border-blue-100 rounded-2xl bg-blue-50 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="mb-2 font-bold text-blue-700 flex items-center gap-2">
                <span>Q{idx + 1}:</span> {q.text}
              </div>
              <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Correct Answer: <span className="font-bold text-green-700">{q.correctAnswer}</span>
              </div>
              <TubeBar percentCorrect={percentCorrect} />
              <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                Avg. time taken: {avgTime} sec
              </div>
              <div className="mt-2">
                <span className="font-semibold text-xs">Responses:</span>
                <ul className="ml-4 mt-1 text-xs">
                  {q.responses.map((r, i) => (
                    <li key={i}>
                      {r.student}: <span className={r.answer === q.correctAnswer ? "text-green-600" : "text-red-600"}>{r.answer}</span> ({r.time}s)
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherPollAnalysisPage; 