import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div class="bg-white shadow-md rounded-lg p-8 text-center">
            <div class="mb-4 flex justify-center">
                <svg class="w-12 h-12 text-gray-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </div>
            <p class="text-gray-700 text-lg font-bold mb-6">Anda yakin ingin menyelesaikan ujian?</p>
            <div class="flex justify-center">
                <button onClick={onConfirm} class="border border-gray-700 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mr-2">Yes</button>
                <button onClick={onClose} class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">No</button>
            </div>
        </div>
    </div>
  );
};

export default ConfirmationModal;
