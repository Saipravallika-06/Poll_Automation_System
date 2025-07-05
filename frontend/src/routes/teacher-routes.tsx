import { RouteObject } from "react-router-dom";
import TeacherLayout from "@/layouts/teacher-layout";
import Dashboard from "@/pages/teacher/dashboard";
import GenAIHomePage from "@/pages/teacher/genai-home";
import PollRoomPage from "@/pages/teacher/TeacherPollRoom";
import CreateRoomPage from "@/pages/teacher/CreatePollRoom";
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";

const teacherRoutes: RouteObject = {
  path: "/teacher",
  element: <TeacherLayout />,
  children: [
    {
      path: "dashboard",
      element: <TeacherDashboard />,
    },
    {
      index: true,
      element: <TeacherDashboard />, // Default to Dashboard
    },
    {
      path: "genai",
      element: <GenAIHomePage />,
    },
    {
      path: "pollroom",
      element: <CreateRoomPage />,
    },
    {
      path: 'pollroom/$code',
      element: <PollRoomPage />
    },
  ],
};

export default teacherRoutes;
