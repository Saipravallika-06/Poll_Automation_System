import { RouteObject } from "react-router-dom";
import StudentLayout from "@/layouts/student-layout";
import StudentDashboard from "@/pages/student/dashboard";
// import ParentComponent from "@/ai-components/ParentComponent";
import JoinPollRoom from "@/pages/student/JoinPollRoom"; 
import StudentPollRoom from "@/pages/student/StudentPollRoom";
import PollAnalysisPage from "@/pages/student/PollAnalysisPage";

const studentRoutes: RouteObject = {
  path: "/student",
  element: <StudentLayout />,
  children: [
    {
      path: "dashboard",
      element: <StudentDashboard />,
    },
    {
      path: "pollroom",
      element: <JoinPollRoom />,
    },
    {
      path: "pollroom/$code",
      element: <StudentPollRoom />,
    },
    {
      path: "poll-analysis/$pollId",
      element: <PollAnalysisPage />,
    },
    {
      index: true,
      element: <StudentDashboard />, // Default to Dashboard
    }
  ],
};

export default {studentRoutes};
