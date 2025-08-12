import { ErrorRepository } from "../main/script";
test('test map', () => {
    const errorList = new ErrorRepository();
    errorList.add(404, 'error');
    expect(errorList.translate(404)).toBe('error')
})