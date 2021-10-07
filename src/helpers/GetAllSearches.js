// const userId = localStorage.getItem('id')

function GetAllSearches(searches) {
    const array = [];
    for (let i = 0; i < searches.length; i++) {
        const search = searches[i];

        array.push(search.user);
        console.log(array);
        return array;

    }
}

export default GetAllSearches;