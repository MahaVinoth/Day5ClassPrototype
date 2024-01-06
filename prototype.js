class aboutMovie{
    constructor(name, studio, rating){
        this.name = name;
        this.studio = studio;
        this.rating = `PG${rating}`;
        }
    getmovieInfo = function(){
            console.log(`Movie ${this.name} got rating ${this.rating} produced by ${this.studio}`);
            
    }
    getPGInfo = function(){
        return this.rating;
    }
}

class featureOfMovie extends aboutMovie {
    constructor(name, studio, rating) {
      super(name, studio, rating);
    }
    getPG(nameofmovies){
        let pgMov=[];
        for (let i = 0; i < nameofmovies.length; i++) {
            const movieconst = new aboutMovie(nameofmovies[i].movName, nameofmovies[i].movStudio, nameofmovies[i].movRating);
            if (movieconst.getPGInfo() == "PG") {
            pgMov[i] = nameofmovies[i].movName;
            }
            }
        return pgMov;
    }
  }
  let movInfo =[{
    movName:"Casino Royale",
    movRating:"13",
    movStudio:"Eon Productions"
  },
  {
    movName:"11111111",
    movRating:"",
    movStudio:"Eon Productions"
  }]
  const moviedetails = new featureOfMovie("2222", "Eon", "­R");
  moviedetails.getmovieInfo("Casino Royale", "Eon Productions", "­13");
  console.log(moviedetails.getPG(movInfo));

//2.Circle - Class
class circleCal{
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
      }
      getRadius = function(){
          return this.radius;
      }
      setRadius = function(newRadius){
        this.radius = newRadius;
      }
      getColor = () => {return this.color};
      setColor = function(newColor){
        this.color = newColor;
      }
      getArea = function(){
        return 3.14*(this.radius**2);
      }
      getCircumference=function(){
        return 2*3.14*this.radius;
      }

}
const circleDetails = new circleCal(2,"Red");
console.log(circleDetails.getRadius()+" -- Color - "+circleDetails.getColor()+" -- Area -- "+circleDetails.getArea()+" --Circumference -- "+circleDetails.getCircumference());
//3.Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
    }
    getInfo = function(){
        console.log(`${this.firstName} living in ${this.country}`);
    }
}
const personDetails = new Person('Maha', 'Kannan', 40, 'India', 'Chennai');
personDetails.getInfo();
//4.write a class to calculate the Uber price.
class uberPrice {
    constructor(KM, pricePerKM) {
      this.KM = KM;
      this.pricePerKM = pricePerKM;
    }
    getPrice = function(){
        if(this.KM == 0) return "Need Valid input";
        else return this.KM*this.pricePerKM;
    }
}
const pricetoTravel = new uberPrice(5, 10);
console.log(pricetoTravel.getPrice());