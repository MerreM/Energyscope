import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <header className="bg-white shadow p-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">EnergyScope</h1>
        <p className="text-sm text-gray-600 mt-2 md:mt-0">
          Weekly Insights on the Global Energy Landscape
        </p>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-green-800">This Week's Highlights</h2>
          <Card className="mt-4">
            <CardContent>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                EU Approves New Renewable Energy Directive
              </h3>
              <p className="text-gray-700">
                The European Parliament has approved a new directive aimed at increasing the share of renewables in energy consumption to 42.5% by 2030...
              </p>
              <Button className="mt-4">Read More</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800">Explore Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              { label: "EU Policy", id: "eu-policy" },
              { label: "Energy Markets", id: "energy-markets" },
              { label: "Infrastructure Projects", id: "infrastructure" },
              { label: "Geopolitics", id: "geopolitics" },
              { label: "Green Technology", id: "green-tech" },
              { label: "MWh Pricing", id: "pricing" },
            ].map((topic) => (
              <Link to={`/topics/${topic.id}`} key={topic.id}>
                <Card className="hover:shadow-lg cursor-pointer">
                  <CardContent>
                    <h3 className="text-lg font-medium text-green-700">{topic.label}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800">Subscribe to Our Newsletter</h2>
          <div className="mt-2 flex flex-col md:flex-row items-center gap-2">
            <Input placeholder="Your email address" className="w-full md:w-auto" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-8 p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EnergyScope. Created by aspiring energy leaders.
      </footer>
    </div>
  );
}

function TopicPage() {
  const { topicId } = useParams();

  const topics = {
    "eu-policy": "EU Policy",
    "energy-markets": "Energy Markets",
    "infrastructure": "Infrastructure Projects",
    "geopolitics": "Geopolitics",
    "green-tech": "Green Technology",
    "pricing": "MWh Pricing",
  };

  const topicName = topics[topicId] || "Topic";

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">{topicName}</h2>
      <p className="text-gray-700">
        Here you'll find detailed insights, articles, and news on <strong>{topicName}</strong>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:topicId" element={<TopicPage />} />
      </Routes>
    </Router>
  );
}