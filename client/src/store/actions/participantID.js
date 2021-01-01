export const STORE_PID = 'STORE_PID';

const w = window;

export const storePID = pidData => {
    const pid = pidData.PID;
    console.log(pid);
    return { type: STORE_PID, pidData: {pid: pid}};
};

