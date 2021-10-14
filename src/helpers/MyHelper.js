function MyHelper(list, count) {
    const current = 1;
    count = count -1;
    for (let i = 0; i < list.length; i++) {
        const freelancerUser = list[i];
        if (current === count) {
            return freelancerUser;
        }
        count++;
    }
}

export default MyHelper;