'use client'; // This page uses client-side hooks

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api'; // Adjust path
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; // Adjust path

export default function ContractDetailsPage({ params }) {
  const { id: contractId } = params; // Get ID from dynamic route params
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!contractId) {
      router.push('/contracts'); // Redirect if no contract ID
      return;
    }
    const fetchContract = async () => {
      try {
        const data = await api.get(`/api/contracts/${contractId}`);
        setContract(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContract();
  }, [contractId, router]);

  if (loading) return <div className="text-center text-gray-700 text-xl">Se încarcă detaliile contractului...</div>;
  if (error) return <div className="text-center text-red-600 text-xl">Eroare la încărcarea contractului: {error}</div>;
  if (!contract) return <div className="text-center text-gray-700 text-xl">Contractul nu a fost găsit.</div>;

  const handleBuy = () => {
    if (!user) {
      alert('Trebuie să fii autentificat pentru a cumpăra un contract.'); // Consider a custom modal here
      router.push('/login');
      return;
    }
    router.push(`/checkout?contractId=${contract.id}`); // Pass contractId as query param
  };

  return (
    <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{contract.title}</h2>
      <div className="mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">{contract.description}</p>
      </div>
      <div className="flex justify-between items-center mb-6 border-t border-b border-gray-200 py-4">
        <span className="text-blue-700 font-bold text-3xl">{contract.price} RON</span>
        {contract.is_editable && (
          <span className="text-green-600 text-lg font-medium bg-green-100 px-4 py-2 rounded-full">
            Editabil (DOCX)
          </span>
        )}
      </div>

      {contract.preview_path && (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Previzualizare:</h3>
          <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg overflow-hidden">
            {contract.preview_path.endsWith('.pdf') ? (
              <p className="text-gray-600">Previzualizare PDF (afișare reală necesită un viewer PDF)</p>
            ) : (
              <img
                src={contract.preview_path.startsWith('http') ? contract.preview_path : `${process.env.NEXT_PUBLIC_API_URL}/storage/${contract.preview_path}`}
                alt="Contract Preview"
                className="max-w-full max-h-full object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e0e0e0/555555?text=Preview+Unavailable'; }}
              />
            )}
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handleBuy}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
        >
          Cumpără Acum
        </button>
        <button
          onClick={() => router.push('/contracts')}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
        >
          Înapoi la Listă
        </button>
      </div>
    </div>
  );
}
