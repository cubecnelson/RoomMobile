export const getNameInitials = (name: String) => {
    return name
        .replace('Mrs. ', '')
        .replace('Mr. ', '')
        .replace('Ms. ', '')
        .split(' ')
        .map(value => {
            return value[0];
        })
        .join('');
};
