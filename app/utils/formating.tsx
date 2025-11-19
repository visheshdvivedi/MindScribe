export const formatBytes = (bytes: number) => {
    const kilobytes = Math.round(bytes / 1000);
    if (kilobytes < 1000) return `${kilobytes} KB`;
    
    const megabytes = Math.round(kilobytes / 1000);
    if (megabytes < 1000) return `${megabytes} MB`;

    const gigabytes = Math.round(megabytes / 1000);
    return `${gigabytes} GB`; 
}