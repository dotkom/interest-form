export interface Semester {
  year: number;
  season: string;
}

export const getCurrentSemester = (): Semester => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const season = today.getMonth() < 6 ? 'V' : 'H';
  return { year: currentYear, season };
};

export const getAvailableSemesters = (): Semester[] => {
  const availableSemesters = [getCurrentSemester()];
  const { year, season } = availableSemesters[0];
  if (season == 'V') {
    availableSemesters.push({ year: year, season: 'H' }, { year: year + 1, season: 'V' });
  } else if (season == 'H') {
    availableSemesters.push({ year: year + 1, season: 'V' }, { year: year + 1, season: 'H' });
  }
  return availableSemesters;
};
