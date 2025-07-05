import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  // Dummy data for illustration
  const overview = {
    totalPolls: 12,
    totalResponses: 340,
    participationRate: "85%",
  };

  const recentPolls = [
    { name: "Math Quiz", created: "2024-06-01", attended: 28, notAttended: 2 },
    { name: "Science Poll", created: "2024-05-30", attended: 25, notAttended: 5 },
  ];

  const pollResults = [
    { question: "Q1: 2+2?", options: [{ text: "4", count: 20 }, { text: "3", count: 5 }] },
  ];

  const faqs = [
    { q: "How do I create a poll?", a: "Click the 'Create Poll' button and fill in the details." },
    { q: "How to use AI to generate polls?", a: "Click 'AI Create Poll' and follow the prompts." },
  ];

  return (
    <div className="space-y-8">
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Teacher Dashboard
        </h2>
        <div className="flex gap-3">
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            onClick={() => navigate({ to: "/teacher/pollroom" })}
          >
            + Create Poll
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-600"
            onClick={() => navigate({ to: "/teacher/genai" })}
          >
            🤖 AI Create Poll
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Polls</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold text-purple-600">{overview.totalPolls}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold text-blue-600">{overview.totalResponses}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Participation Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold text-emerald-600">{overview.participationRate}</span>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Polls & Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Poll Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Attended</TableHead>
                <TableHead>Not Attended</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPolls.map((poll, idx) => (
                <TableRow key={idx}>
                  <TableCell>{poll.name}</TableCell>
                  <TableCell>{poll.created}</TableCell>
                  <TableCell>{poll.attended}</TableCell>
                  <TableCell>{poll.notAttended}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dynamic Poll Results */}
      <Card>
        <CardHeader>
          <CardTitle>Poll Results (Live)</CardTitle>
        </CardHeader>
        <CardContent>
          {pollResults.map((result, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-semibold">{result.question}</div>
              <div className="flex gap-4 mt-2">
                {result.options.map((opt, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-lg font-bold text-purple-600">{opt.count}</span>
                    <span className="text-sm">{opt.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Summary Reports (Chart Example) */}
      <Card>
        <CardHeader>
          <CardTitle>Summary Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              responses: { color: "#6366f1", label: "Responses" },
              notAttended: { color: "#f59e42", label: "Not Attended" },
            }}
          >
            {/* Insert your chart here, e.g., <BarChart data={...} /> */}
            <div className="text-center text-gray-400">[Chart goes here]</div>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {faqs.map((faq, idx) => (
              <li key={idx}>
                <div className="font-semibold text-purple-700">{faq.q}</div>
                <div className="text-gray-600">{faq.a}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
