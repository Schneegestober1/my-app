export function convertSecondsToMinutes(duration_in_seconds : number) {
    const minutes = Math.floor(duration_in_seconds / 60);
    const remainingSeconds = duration_in_seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds || '00'}`;
}

