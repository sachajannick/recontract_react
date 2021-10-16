function MyHelper(list, count) {
    console.log(count);
    let current = 0;
    for (let i = 0; i < list.length; i++) {
        // console.log("ok")
        const freelancerUser = list[i];
        // console.log(freelancerUser);
        if (current === count) {
            return freelancerUser;
        }
        current++;
    }
}

export default MyHelper;