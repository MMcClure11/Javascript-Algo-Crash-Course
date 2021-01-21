// Build a feature for choosing two movies whose total runtimes will equal the exact flight length
// Write a fxn that takes an integer flightLength and an array of integers movieLengths (both in minutes)
// return a boolean indicating whether there are two nums in movieLengths whose sum equals flightLength

// assume watch exactly 2 movies
// don't make users watch same movie twice
// optimize for runtime over memory ( O(n)) where n is the length of movies

//https://drive.google.com/file/d/1UXkk06Im3-m2G4dHk0Q2nJ1yYiJrwS9v/view 
// source was Interview Cake (SKILLED USES THIS ONE OR SOMETHING VERY SIMILAR IN THEIR JS ASSESSMENT)

//Know two movie lengths need to sum  flightLength
// given firstMovieLength we need flightLength - firstMovieLength = secondMovieLength
const canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  const movieLengthsSeen = new Set() //movieLengths we've seen so far

  for(let m of movieLengths) {

    if(movieLengthsSeen.has(flightLength - m)) {
      return true
    }
    movieLengthsSeen.add(m)
  }
  return false //we never found a match so return false 
}