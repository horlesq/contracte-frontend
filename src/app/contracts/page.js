'use client'; // This page uses client-side hooks

import React, { useState, useEffect } from 'react';
import { api } from '../../lib/api'; // Adjust path
import { useRouter } from 'next/navigation';

export default function ContractsPage() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await api.get('/api/contracts');
        setContracts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContracts();
  }, []);

  if (loading) return <div className="text-center text-gray-700 text-xl">Se încarcă contractele...</div>;
  if (error) return <div className="text-center text-red-600 text-xl">Eroare la încărcarea contractelor: {error}</div>;

  return (
    <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Modele de Contracte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contracts.length > 0 ? (
          contracts.map((contract) => (
            <div key={contract.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{contract.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{contract.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-700 font-bold text-xl">{contract.price} RON</span>
                {contract.is_editable && (
                  <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    Editabil
                  </span>
                )}
              </div>
              <button
                onClick={() => router.push(`/contracts/${contract.id}`)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Vezi Detalii
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">Nu există contracte disponibile momentan.</p>
        )}
      </div>
    </div>
  );
}
