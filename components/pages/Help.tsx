
import React, { useState } from 'react';
import Card from '../ui/Card';

// Content for the Frequently Asked Questions section.
const faqs = [
    {
        q: 'How do I launch a new mission?',
        a: 'Navigate to the "Mission Planner" tab. Use the map tools to define a search area, then fill out the mission details in the right-hand panel, including assigning drones and selecting AI scan modes. Click "Save & Launch Mission" to begin.'
    },
    {
        q: 'What is the emergency protocol for a lost drone signal?',
        a: 'If a drone loses signal, it will automatically attempt to return to its launch point. If it does not reappear within 5 minutes, activate the "Lost Drone Protocol" from the Fleet Management page. This will broadcast its last known coordinates to all team members.'
    },
    {
        q: 'How do I confirm or reject an AI detection?',
        a: 'In the "Alert & Detection Log", each unconfirmed alert has "Confirm" and "Reject" buttons. Review the image and location data, then click the appropriate button to classify the alert. Confirmed alerts are escalated.'
    },
    {
        q: 'What is included in the drone recovery checklist?',
        a: 'The recovery checklist includes: 1. Confirming the drone is powered down. 2. Inspecting props and motors for damage. 3. Checking the airframe for stress fractures. 4. Offloading flight data via the maintenance port. 5. Documenting any damage before returning to service.'
    }
];

/**
 * The Help & Documentation page, featuring an accordion-style FAQ.
 */
const Help: React.FC = () => {
    // State to track which FAQ item is currently open. `null` means all are closed.
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    /**
     * Toggles the visibility of an FAQ item.
     * @param index - The index of the FAQ item to toggle.
     */
    const toggleFaq = (index: number) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Card title="Frequently Asked Questions">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-tertiary pb-4">
                            <button
                                className="w-full flex justify-between items-center text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="text-lg font-semibold text-light">{faq.q}</span>
                                {/* Arrow icon that rotates based on the open state */}
                                <svg
                                    className={`w-6 h-6 text-accent transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {/* Conditionally render the answer if the item is open */}
                            {openIndex === index && (
                                <p className="mt-2 text-accent leading-relaxed">
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Help;