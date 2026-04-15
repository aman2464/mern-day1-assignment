export class DevAccount {
    public readonly handle: string;
    private skillLevel: number = 1; 
    constructor(userName: string) {
        this.handle = userName;
    }
}

export const estimateStudyTime = (modules: number): string => {
    const hoursNeeded = modules * 6; 
    return "Total prep time: " + hoursNeeded + " hrs";  
};


export const processNumbers = () => {
    const numericList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Loop 1-10 
    numericList.forEach((val: number) => {
        const typeLabel = (val % 2 === 0) ? "Even" : "Odd"; 
        console.log(`Number ${val} is ${typeLabel}`); 
    });
};


interface ProfileData {
    id: string;
    skills: string[];
    isActive: boolean;
}

export const filterSpecialists = (users: ProfileData[]) => {
    const activeOnly = users.filter(u => u.isActive); // filter() active users 
    const firstUser = { ...activeOnly[0] };  
    return firstUser;
};


export const getRemoteStatus = async (): Promise<string> => {
    const apiSim = new Promise<string>((resolve) => {
        setTimeout(() => resolve("Data synced!"), 1000); // Mock API 
    });
    return await apiSim; 
};