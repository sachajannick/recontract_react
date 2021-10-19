import CountLengthOfList from "../helpers/CountLengthOfList";
import GetObjectsFromList from "../helpers/GetObjectsFromList";

test('Count length of list', () => {
    // ARRANGE
    const list = [
        {
            amount: 70,
            email: "test@test.com",
            fullName: "Full Name",
            functionTitle: "Java Developer",
            location: "Utrecht",
            searchId: 1,
            userId: 1,
        }, {
            amount: 75,
            email: "test2@test.com",
            fullName: "Full name",
            functionTitle: "Python developer",
            location: "Laren",
            searchId: 2,
            userId: 2,
        }
    ]

    // ACT
    const result = CountLengthOfList(list);

    // ASSERT
    expect(result).toBe(2);
})

test('Get objects from list', () => {
    // ARRANGE
    const count = 0;
    const list = [
        {
            amount: 70,
            email: "test@test.com",
            fullName: "Full Name",
            functionTitle: "Java Developer",
            location: "Utrecht",
            searchId: 1,
            userId: 1,
        }, {
            amount: 75,
            email: "test2@test.com",
            fullName: "Full name",
            functionTitle: "Python developer",
            location: "Laren",
            searchId: 2,
            userId: 2,
        }
    ]

    // ACT
    const result = GetObjectsFromList(list, count);
    const userId = result.userId;

    // ASSERT
    expect(userId).toBe(1);
})