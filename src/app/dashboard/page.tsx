'use client';

import { useEffect, useState } from 'react';
import "../globals.css";

export default function DashboardPage() {
  // Placeholder state for user and dashboard data
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [parkingSlots, setParkingSlots] = useState([
    { id: 'A1', status: 'Available' },
    { id: 'A2', status: 'Occupied' },
    { id: 'B1', status: 'Available' },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Parking slot A2 is now occupied.' },
    { id: 2, message: 'Payment received for your last booking.' },
  ]);
  const [activity, setActivity] = useState([
    { id: 1, action: 'Checked in at slot A2', time: '2024-05-06 10:15' },
    { id: 2, action: 'Payment completed', time: '2024-05-06 10:20' },
  ]);

  // In the future, fetch real data here using useEffect

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* User Info */}
        <div className="bg-white rounded shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>

        {/* Parking Slots */}
        <div className="bg-white rounded shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Parking Slots</h3>
          <div className="grid grid-cols-3 gap-4">
            {parkingSlots.map(slot => (
              <div
                key={slot.id}
                className={`p-4 rounded border text-center font-bold ${
                  slot.status === 'Available' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
                }`}
              >
                {slot.id} <br />
                <span className="text-sm">{slot.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="list-disc pl-5">
            {activity.map(act => (
              <li key={act.id} className="mb-1">
                <span className="font-medium">{act.action}</span>
                <span className="text-gray-500 text-sm ml-2">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <ul>
            {notifications.map(note => (
              <li key={note.id} className="mb-2">
                <span className="text-blue-600">{note.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
