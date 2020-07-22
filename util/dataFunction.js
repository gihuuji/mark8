export const csvJSON = (csvData) => {
  const headers = csvData[0]
  let result = []
  for (let i = 1; i < csvData.length; i++) {
    const obj = {}
    const currentline = csvData[i]
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }
  return result
}
