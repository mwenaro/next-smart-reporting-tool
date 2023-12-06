export const convertEtaToHours = (etaString: string) => {
  // Split the string into parts
  const parts = etaString.split(" ");

  // Initialize variables for hours and minutes
  let hours = 0;
  let minutes = 0;

  // Iterate through parts and update hours and minutes
  for (let i = 0; i < parts.length; i += 2) {
    const value = parseInt(parts[i], 10);

    if (parts[i + 1] === "hours") {
      hours += value;
    } else if (parts[i + 1] === "mins") {
      minutes += value;
    }
  }

  // Convert total time to hours
  const totalHours = hours + minutes / 60;

  return totalHours;
};
