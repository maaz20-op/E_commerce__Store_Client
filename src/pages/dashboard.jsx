import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import {Menu} from 'lucide-react';
import { useState } from "react";

export default function Dashboard() {
const [option, setOption] = useState("Today")

  const salesData = [
    { month: "Jan", sales: 55 },
    { month: "Feb", sales: 68 },
    { month: "Mar", sales: 75 },
    { month: "Apr", sales: 85 },
    { month: "May", sales: 92 },
  ];

 const orderFilters = {
  "Today": [
    { hour: "1 AM", orders: 2 },
    { hour: "4 AM", orders: 5 },
    { hour: "8 AM", orders: 9 },
    { hour: "12 PM", orders: 7 },
    { hour: "4 PM", orders: 11 },
    { hour: "8 PM", orders: 6 },
  ],

  "Last 7 Days": [
    { day: "Mon", orders: 14 },
    { day: "Tue", orders: 20 },
    { day: "Wed", orders: 18 },
    { day: "Thu", orders: 22 },
    { day: "Fri", orders: 17 },
    { day: "Sat", orders: 26 },
    { day: "Sun", orders: 19 },
  ],

  "Last 30 Days": [
    { week: "Week 1", orders: 80 },
    { week: "Week 2", orders: 95 },
    { week: "Week 3", orders: 110 },
    { week: "Week 4", orders: 123 },
  ],

  "Last 6 Months": [
    { month: "Jan", orders: 80 },
    { month: "Feb", orders: 95 },
    { month: "Mar", orders: 88 },
    { month: "Apr", orders: 102 },
    { month: "May", orders: 110 },
    { month: "Jun", orders: 123 },
  ],

  "Last 1 Year": [
    { month: "Jan", orders: 150 },
    { month: "Feb", orders: 168 },
    { month: "Mar", orders: 160 },
    { month: "Apr", orders: 175 },
    { month: "May", orders: 182 },
    { month: "Jun", orders: 195 },
    { month: "Jul", orders: 188 },
    { month: "Aug", orders: 170 },
    { month: "Sep", orders: 165 },
    { month: "Oct", orders: 190 },
    { month: "Nov", orders: 200 },
    { month: "Dec", orders: 210 },
  ],
};


let selectedOption = null; 

  const recentOrders = [
    { id: 1234, name: "John Doe", status: "Completed", date: "April 23" },
    { id: 1233, name: "Jane Smith", status: "Pending", date: "April 22" },
    { id: 1232, name: "Alice Johnson", status: "Processing", date: "April 21" },
    { id: 1231, name: "Michael Brown", status: "Completed", date: "April 20" },
    { id: 123, name: "John Doe", status: "Completed", date: "April 23" },
    { id: 13, name: "Jane Smith", status: "Pending", date: "April 22" },
    { id: 12, name: "John Doe", status: "Completed", date: "April 23" },
    { id: 132, name: "Jane Smith", status: "Pending", date: "April 22" },
    { id: 13552, name: "Alice Johnson", status: "Processing", date: "April 21" },
    { id: 131, name: "Michael Brown", status: "Completed", date: "April 20" },
    { id: 12003, name: "John Doe", status: "Completed", date: "April 23" },
    { id: 183, name: "Jane Smith", status: "Pending", date: "April 22" },
    { id: 12993, name: "Alice Johnson", status: "Processing", date: "April 21" },
  ];

  const statusColor = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-600",
    Processing: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* PRODUCT SALES CARD */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Product Sales</h2>
          <p className="text-3xl font-bold mt-1">$5,326</p>
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
        
     

        {/* PENDING ORDER CARD */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between">
          <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Oders Statics</h2>
          <p className="text-3xl font-bold mt-1">24</p>
          </div>
          <div className="">
             <select >
  { ["Today", "Last 7 Days", "Last 30 Days", "Last 6 Months", "Last 1 Year"]
    .map((option, indx) => (
      <option key={indx} onSelect={(e) => {
       selectedOption = e.value;
       console.log(selectedOption);
      }}   value={option}>{option}</option>
    ))}
</select>
            </div>
          </div>
          
          <div className="mt-4 w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderFilters[selectedOption]}>
                <XAxis dataKey="month" />
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
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b text-left">
                <th className="p-3 font-medium">Order ID</th>
                <th className="p-3 font-medium">Customer</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
