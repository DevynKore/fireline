const useAutoNavigate = ( delay = 2000) => {
    const [isWaiting, setIsWaiting] = useState(false);

    const startAutoNavigation = async (callback) => {
        setIsWaiting(true);
        await new Promise(resolve => setTimeout(resolve, delay));
        callback();
        setIsWaiting(false);
    };

    return { isWaiting, startAutoNavigation };
}