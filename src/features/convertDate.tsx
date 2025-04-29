function convertDate(value: Date) {
  const date = new Date(value);

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default convertDate;
