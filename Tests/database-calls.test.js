const database_calls = require('../Database-Calls/database-calls')

// INSERT EXAMPLE TESTS
test('TEST 1', async () => {
    const data = {
        name: "João",
        email: "jtf@esmad.ipp.pt"
    }
    const data1 = {
        name: "João",
        email: "joaoadrianoferreira@gmail.com"
    }
    const result = await database_calls.insert(data);
    const result1 = await database_calls.insert(data1);
    expect(result).toBeTruthy();
    expect(result1).toBeTruthy();
});

test('TEST 2', async () => {
    const data = {
        name: "João",
        email: "jtf@esmad.ipp.pt"
    }
    const result = await 
    await expect(database_calls.insert(data))
    .rejects
    .toThrow('error');
});

// GET EXAMPLE TESTS
test('TEST 3', async () => {
    const email = "jtf@esmad.ipp.pt"
    const result = await database_calls.list(email);
    expect(result.name).toMatch('João');
    expect(result.email).toMatch('jtf@esmad.ipp.pt');
});

// DELETE EXAMPLE TESTS
test('TEST 4', async () => {
    const email = "jtf@esmad.ipp.pt"
    const result = await database_calls.drop(email);
    expect(result).toBeTruthy();
});

afterAll(() => {
    database_calls.clearDatabase();
});