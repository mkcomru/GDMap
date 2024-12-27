export const handleFormChange = (setState) => (event) => {
    const { name, value } = event.target;
    setState(prev => ({
        ...prev,
        [name]: value
    }));
};