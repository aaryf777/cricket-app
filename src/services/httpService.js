const endPoint = "https://api.devcdc.com/cricket";
export const getSeries = (query) => {
    return (fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: query})
    }))
}
