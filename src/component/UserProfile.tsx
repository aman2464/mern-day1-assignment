import React, { useState } from 'react';


interface UserProps {
    developerName: string;
}

const UserProfile: React.FC<UserProps> = ({ developerName }) => {
    
    const [availabilityStatus, setAvailabilityStatus] = useState<string>("Available");

    
    const myCurrentTechStack: string[] = ["React JS", "TypeScript", "Modern JS"];

    const toggleAvailability = () => {
       
        const newStatus = availabilityStatus === "Available" ? "Busy" : "Available";
        setAvailabilityStatus(newStatus);
        console.warn("Status for " + developerName + " changed to: " + newStatus);
    };

    return (
        <div style={{ border: '3px solid #000', padding: '2rem', borderRadius: '8px' }}>
            <h2>{developerName}'s Profile</h2>
            <p>Current Status: <strong>{availabilityStatus}</strong></p>
            
            <h3>Skillset:</h3>
            <ul>
                {/* JSX handling dynamic array  */}
                {myCurrentTechStack.map((item, idx) => (
                    <li key={idx + item}>{item}</li>
                ))}
            </ul>

            <button onClick={toggleAvailability}>
                Update Work Status
            </button>
        </div>
    );
};

export default UserProfile;