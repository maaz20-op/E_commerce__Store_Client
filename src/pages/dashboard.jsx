import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  LineChart, Line, ResponsiveContainer
} from "recharts";
import { useState, useEffect } from "react";
import { getAllOrders } from "../api/order.js";
import OrderCard from "./ordersAdminDet.jsx";

export default function Dashboard() {
  const [filter, setFilter] = useState("Today");
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // <- selected order
const [close, onClose] = useState(true)


  useEffect(() => {
    async function load() {
      const res = await getAllOrders();
      if (res?.data?.success) {
        setOrders(res.data.data);
      }
    }
    load();
  }, []);

  const statusColor = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
  };

  // SALES DATA
  const salesByMonth = {};
  orders.forEach(order => {
    const date = new Date(order.createdAt.replace(/-/g, "/"));
    const month = date.toLocaleString("en-US", { month: "short" });
    if (!salesByMonth[month]) salesByMonth[month] = 0;
    salesByMonth[month] += order.payment || 0;
  });
  const salesData = Object.keys(salesByMonth).map(month => ({
    month,
    sales: salesByMonth[month],
  }));

  // FILTERED ORDERS FOR CHART
  const now = new Date();
  const filteredOrders = orders.filter(order => {
    const created = new Date(order.createdAt.replace(/-/g, "/"));
    const diff = (now - created) / (1000 * 60 * 60 * 24);

    if (filter === "Today") return diff < 1;
    if (filter === "Last 7 Days") return diff < 7;
    if (filter === "Last 30 Days") return diff < 30;
    if (filter === "Last 6 Months") return diff < 180;
    if (filter === "Last 1 Year") return diff < 365;

    return true;
  });

  const chartGrouped = {};
  filteredOrders.forEach(order => {
    const d = new Date(order.createdAt.replace(/-/g, "/"));
    const label = filter === "Today"
      ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : d.toLocaleDateString();
    if (!chartGrouped[label]) chartGrouped[label] = 0;
    chartGrouped[label] += 1;
  });

  const orderChartData = Object.keys(chartGrouped).map(label => ({
    label,
    orders: chartGrouped[label],
  }));

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 bg-gray-100">

      {/* IF selectedOrder, SHOW ORDER CARD */}
      {!close && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <button
              className="mb-4 text-red-500 font-bold"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
            <OrderCard order={selectedOrder} onClose={onClose} />
          </div>
        </div>
      )}

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SALES CARD */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Product Sales</h2>
          <p className="text-3xl font-bold mt-1">
            PKR {salesData.reduce((acc, x) => acc + x.sales, 0)}
          </p>
          <div className="mt-4 w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ORDER STATISTICS */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Order Statistics</h2>
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {["Today","Last 7 Days","Last 30 Days","Last 6 Months","Last 1 Year"]
                .map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="mt-4 w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderChartData}>
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#2563EB" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="bg-white rounded-xl p-6 shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-y-auto max-h-[500px]">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b text-left">
                <th className="p-3 font-medium">Order ID</th>
                <th className="p-3 font-medium">Customer</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Amount</th>
                <th className="p-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(item => {
                return (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                    onClick={() =>{
                      setSelectedOrder(item)
                      onClose(false)
                    }} // <- SET SELECTED ORDER
                  >
                    <td className="p-3">{item.transactionId}</td>
                    <td className="p-3">{item.authUserId?.email}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3">PKR {item?.payment}</td>
                    <td className="p-3">{item?.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
