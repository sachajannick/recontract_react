function IterateThroughList(list, count) {
    let current = 0;

    for (let i = 0; i < list.length; i++) {
        const user = list[i];

        if (current === count) {
            return user;
        }
        current++;
    }
}

export default IterateThroughList;
