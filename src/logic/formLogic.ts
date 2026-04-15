import { ChangeEvent } from 'react';

export const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const capturedValue = event.target.value;
    console.log("Input received: " + capturedValue); 
};