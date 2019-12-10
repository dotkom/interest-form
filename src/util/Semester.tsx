import { CheckboxItem } from 'models/Form/Inputs/Checkbox';
import { Semester } from 'models/Semester';

export const getCurrentSemester = (): Semester => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const season = today.getMonth() < 6 ? 'V' : 'H';
  return { year: currentYear, season };
};

const toLabel = (semester: Semester): string => semester.season + semester.year.toString().substr(-2);

/**
 * @param currentSemester the current semester
 * @returns the next semester
 */
const getNextSemester = (currentSemester: Semester): Semester => {
  const { year, season } = currentSemester;
  return season === 'V' ? { year, season: 'H' } : { year: year + 1, season };
};

/**
 * @returns the current semester and the three next semesters in the format of an CheckboxItem
 */
export const getAvailableSemesters = (): CheckboxItem<Semester>[] => {
  const semester = getCurrentSemester();
  const availableSemesters = [{ label: toLabel(semester), value: semester }];
  const secondSemester = getNextSemester(semester);
  const thirdSemester = getNextSemester(secondSemester);
  availableSemesters.push(
    { label: toLabel(secondSemester), value: secondSemester },
    { label: toLabel(thirdSemester), value: thirdSemester }
  );
  return availableSemesters;
};
