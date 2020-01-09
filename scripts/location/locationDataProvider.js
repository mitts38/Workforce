let locations = []
export const useLocation =() => locations.slice()
export const getLocation = ()=>fetch("http://localhost:3000/location")
.then(res=> res.json())
.then (parsed =>locations = parsed)