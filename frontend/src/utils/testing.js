// A collection of methods for generating fake data, which should not be referenced
// during production.

import CalendarCategory from '../models/CalendarCategory';
import Colors from '../colors';

export function getFakeCategories() {
    return [
        new CalendarCategory('Logic and Computation', Colors.ACCENTS[0]),
        new CalendarCategory('Object Oriented Design', Colors.ACCENTS[1]),
        new CalendarCategory('Interaction Design', Colors.ACCENTS[2]),
        new CalendarCategory('Circuits Development', Colors.ACCENTS[3])
    ]
}