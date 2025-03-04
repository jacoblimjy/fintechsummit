// Full Frontend Code: React (Next.js) + Tailwind CSS
// Implements Dashboard UI with Smart Contract Compliance Features

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaGavel, FaProjectDiagram, FaMicrochip } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ForceGraph2D } from "react-force-graph";

export default function Dashboard() {
  const navigate = useNavigate();

  const [riskScore, setRiskScore] = useState(0);
  const [amlData, setAmlData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [zkpVerifiedUsers, setZkpVerifiedUsers] = useState([]);
  const [regulatoryUpdates, setRegulatoryUpdates] = useState([]);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [smartContractHealth, setSmartContractHealth] = useState({
    gasUsage: 0,
    securityScore: 0,
    complexity: 0,
  });
  const [contractStatus, setContractStatus] = useState("Pending");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulated AML Data (Replace with API Call Later)
  useEffect(() => {
    const sampleData = [
      { wallet: "0xA1B2C3D4", amount: 45000, risk: 85 },
      { wallet: "0xE5F6G7H8", amount: 30000, risk: 60 },
      { wallet: "0xI9J0K1L2", amount: 100000, risk: 99 },
      { wallet: "0xM3N4O5P6", amount: 15000, risk: 35 },
      { wallet: "0xQ7R8S9T0", amount: 80000, risk: 88 },
      { wallet: "0xU1V2W3X4", amount: 25000, risk: 50 },
      { wallet: "0xY5Z6A7B8", amount: 60000, risk: 70 },
      { wallet: "0xC9D0E1F2", amount: 40000, risk: 45 },
      { wallet: "0xG3H4I5J6", amount: 90000, risk: 92 },
      { wallet: "0xK7L8M9N0", amount: 35000, risk: 55 },
      { wallet: "0xO1P2Q3R4", amount: 70000, risk: 80 },
      { wallet: "0xS5T6U7V8", amount: 50000, risk: 90 },
      { wallet: "0xW9X0Y1Z2", amount: 20000, risk: 40 },
      { wallet: "0xA3B4C5D6", amount: 75000, risk: 95 },
      { wallet: "0xE7F8G9H0", amount: 12000, risk: 20 },
    ];
    setAmlData(sampleData);
  }, []);

  // Dummy Real-Time Transactions with Alerts
  useEffect(() => {
    const sampleTransactions = [
      { wallet: "0xAAA", amount: 15000, risk: 35 },
      { wallet: "0xBBB", amount: 30000, risk: 80 },
      { wallet: "0xCCC", amount: 5000, risk: 20 },
      { wallet: "0xDDD", amount: 60000, risk: 90 },
    ];
    setTransactions(sampleTransactions);

    // Generate alerts for high-risk transactions
    const highRiskAlerts = sampleTransactions
      .filter((tx) => tx.risk > 70)
      .map(
        (tx) =>
          `High-Risk Transaction Detected: Wallet ${tx.wallet} - Amount: $${tx.amount}`
      );
    setAlerts(highRiskAlerts);
  }, []);

  // Dummy ZKP-Verified Users
  useEffect(() => {
    const sampleZkpUsers = [
      { wallet: "0xAAA", verified: true },
      { wallet: "0xBBB", verified: false },
      { wallet: "0xCCC", verified: true },
      { wallet: "0xDDD", verified: false },
    ];
    setZkpVerifiedUsers(sampleZkpUsers);
  }, []);

  // Dummy Regulatory Updates
  useEffect(() => {
    const sampleRegulations = [
      {
        regulation: "FATF Travel Rule Update",
        effectiveDate: "2024-06-15",
        status: "Pending Compliance",
      },
      {
        regulation: "GDPR Data Privacy Enhancement",
        effectiveDate: "2024-05-10",
        status: "Compliant",
      },
      {
        regulation: "SEC Crypto Custody Rule",
        effectiveDate: "2024-07-01",
        status: "Action Required",
      },
    ];
    setRegulatoryUpdates(sampleRegulations);
  }, []);

  // Dummy Graph Data for Money Laundering Visualization
  useEffect(() => {
    const sampleGraph = {
      nodes: [
        { id: "0xA1B2C3D4E5F6G7H8I9J0", risk: 90 }, // High-risk source
        { id: "0xK1L2M3N4O5P6Q7R8S9T0", risk: 40 },
        { id: "0xU1V2W3X4Y5Z6A7B8C9D0", risk: 95 }, // High-risk hub
        { id: "0xE1F2G3H4I5J6K7L8M9N0", risk: 20 },
        { id: "0xO1P2Q3R4S5T6U7V8W9X0", risk: 85 }, // High-risk intermediary
        { id: "0xY1Z2A3B4C5D6E7F8G9H0", risk: 75 }, // High-risk node
        { id: "0xI1J2K3L4M5N6O7P8Q9R0", risk: 30 }, // Low-risk node
        { id: "0xS1T2U3V4W5X6Y7Z8A9B0", risk: 88 }, // High-risk node
        { id: "0xC1D2E3F4G5H6I7J8K9L0", risk: 25 }, // Low-risk node
        { id: "0xM1N2O3P4Q5R6S7T8U9V0", risk: 92 }, // High-risk node
        { id: "0xW1X2Y3Z4A5B6C7D8E9F0", risk: 35 }, // Low-risk node
        { id: "0xG1H2I3J4K5L6M7N8O9P0", risk: 82 }, // High-risk node
        { id: "0xQ1R2S3T4U5V6W7X8Y9Z0", risk: 45 }, // Medium-risk node
        { id: "0xA2B3C4D5E6F7G8H9I0J1", risk: 78 }, // High-risk node
        { id: "0xK2L3M4N5O6P7Q8R9S0T1", risk: 15 }, // Low-risk node
      ],
      links: [
        // Original connections
        { source: "0xA1B2C3D4E5F6G7H8I9J0", target: "0xK1L2M3N4O5P6Q7R8S9T0" },
        { source: "0xA1B2C3D4E5F6G7H8I9J0", target: "0xU1V2W3X4Y5Z6A7B8C9D0" },
        { source: "0xK1L2M3N4O5P6Q7R8S9T0", target: "0xE1F2G3H4I5J6K7L8M9N0" },
        { source: "0xO1P2Q3R4S5T6U7V8W9X0", target: "0xU1V2W3X4Y5Z6A7B8C9D0" },
        // New connections showing potential money laundering patterns
        { source: "0xU1V2W3X4Y5Z6A7B8C9D0", target: "0xY1Z2A3B4C5D6E7F8G9H0" }, // High-risk to high-risk
        { source: "0xY1Z2A3B4C5D6E7F8G9H0", target: "0xI1J2K3L4M5N6O7P8Q9R0" }, // High-risk to low-risk (potential layering)
        { source: "0xS1T2U3V4W5X6Y7Z8A9B0", target: "0xC1D2E3F4G5H6I7J8K9L0" }, // High-risk to low-risk
        { source: "0xS1T2U3V4W5X6Y7Z8A9B0", target: "0xM1N2O3P4Q5R6S7T8U9V0" }, // High-risk to high-risk
        { source: "0xM1N2O3P4Q5R6S7T8U9V0", target: "0xW1X2Y3Z4A5B6C7D8E9F0" }, // High-risk to low-risk
        { source: "0xG1H2I3J4K5L6M7N8O9P0", target: "0xQ1R2S3T4U5V6W7X8Y9Z0" }, // High-risk to medium-risk
        { source: "0xQ1R2S3T4U5V6W7X8Y9Z0", target: "0xA2B3C4D5E6F7G8H9I0J1" }, // Medium-risk to high-risk
        { source: "0xA2B3C4D5E6F7G8H9I0J1", target: "0xK2L3M4N5O6P7Q8R9S0T1" }, // High-risk to low-risk
        { source: "0xU1V2W3X4Y5Z6A7B8C9D0", target: "0xS1T2U3V4W5X6Y7Z8A9B0" }, // Connection between high-risk nodes
        { source: "0xO1P2Q3R4S5T6U7V8W9X0", target: "0xG1H2I3J4K5L6M7N8O9P0" }, // High-risk to high-risk
        { source: "0xK1L2M3N4O5P6Q7R8S9T0", target: "0xQ1R2S3T4U5V6W7X8Y9Z0" }, // Low-risk to medium-risk
      ],
    };
    setGraphData(sampleGraph);
  }, []);

  // Dummy Smart Contract Health Data
  useEffect(() => {
    setSmartContractHealth({
      gasUsage: 50000,
      securityScore: 85,
      complexity: 3,
    });
  }, []);

  const chartData = {
    labels: amlData.map((tx) => tx.wallet),
    datasets: [
      {
        label: "AML Risk Levels",
        data: amlData.map((tx) => tx.risk),
        backgroundColor: amlData.map((tx) => (tx.risk > 70 ? "red" : "green")),
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            🚀 Smart Contract Compliance Dashboard
          </h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 w-auto"
            onClick={() => navigate("/smartcontract")}
          >
            Create Contract
          </button>
        </div>
        {/* Regulatory Updates Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center mb-4">
            <FaGavel className="text-purple-500 mr-3 text-2xl" /> Regulatory
            Updates
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-3 text-left">Regulation</th>
                  <th className="border p-3 text-left">Effective Date</th>
                  <th className="border p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryUpdates.map((update, index) => (
                  <tr key={index} className="border text-left">
                    <td className="p-3 font-medium">{update.regulation}</td>
                    <td className="p-3">{update.effectiveDate}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-white text-sm font-semibold rounded-lg ${
                          update.status === "Compliant"
                            ? "bg-green-500"
                            : update.status === "Pending Compliance"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {update.status === "Compliant"
                          ? "✅ Compliant"
                          : update.status === "Pending Compliance"
                          ? "⏳ Pending"
                          : "⚠️ Action Required"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Zero-Knowledge Proof (ZKP) Compliance Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center mb-4">
            <FaLock className="text-blue-500 mr-3 text-2xl" /> Zero-Knowledge
            Proof (ZKP) Compliance
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-3 text-left">Wallet Address</th>
                  <th className="border p-3 text-left">Verification Status</th>
                </tr>
              </thead>
              <tbody>
                {zkpVerifiedUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={`border text-left ${
                      user.verified ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <td className="p-3 font-mono">{user.wallet}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-white text-sm font-semibold rounded-lg ${
                          user.verified ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {user.verified ? "✅ Verified" : "❌ Not Verified"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Graph-Based Risk Analysis */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center mb-4">
            <FaProjectDiagram className="text-blue-500 mr-3 text-2xl" /> Money
            Laundering Risk Network
          </h2>
          <div className="relative bg-gray-100 rounded-lg p-4 shadow-inner">
            <p className="text-sm text-gray-600 mb-3">
              🔴 High-Risk Nodes | 🟢 Low-Risk Nodes
            </p>
            <ForceGraph2D
            graphData={graphData}
            nodeAutoColorBy="risk"
            nodeCanvasObject={(node, ctx) => {
              const getNodeColor = (risk) => {
                if (risk > 70) return "red";
                if (risk > 40) return "yellow";
                return "green";
              };
              ctx.fillStyle = getNodeColor(node.risk);
              ctx.beginPath();
              ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
              ctx.fill();
              ctx.font = "10px Arial";
              ctx.fillStyle = "black";
              const shortId = `${node.id.substring(0, 6)}...`;
              ctx.fillText(shortId, node.x + 12, node.y + 4);
            }}
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={0.01}
            height={500}
            d3VelocityDecay={0.1}
            cooldownTicks={100}
            linkDistance={200}
            d3Force={(d3) => {
              d3.force('charge').strength(-2000);
              d3.force('collision').radius(50);
              d3.force('center').strength(0.1);
            }}
          />
          </div>
        </div>

        {/* AML Risk Visualization */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            📊 AML Risk Visualization
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            🔴 High-Risk Wallets | 🟢 Low-Risk Wallets
          </p>
          <Line data={chartData} />
        </div>

        {/* Real-Time Transactions */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            ⏳ Real-Time Transactions
          </h2>
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Wallet Address</th>
                <th className="border p-3">Amount ($USD)</th>
                <th className="border p-3">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className={`border text-center ${
                    tx.risk > 70 ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  <td className="p-3 font-mono">{tx.wallet}</td>
                  <td className="p-3">${tx.amount.toLocaleString()}</td>
                  <td
                    className={`p-3 ${
                      tx.risk > 70 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {tx.risk > 70 ? "High Risk 🔴" : "Low Risk 🟢"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
