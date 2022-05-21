const address = {
                    city : "Iraq - Fallujah",
                    street : "60"
                };
console.log(address.city);
// can use it as associative   array
console.log(address['city']);
// console.log(address.city);
console.log(address.street);

//  the other way is using class using OOP knowledge
class Address {
                    city = 'Baghdad '
                    street= 'Al-Mansuer '
                    constructor(city,street)
                    {
                        this.city = city;
                        this.street =street;
                    }

                }

// Creat Object
const a = new Address('City1','Street1');
console.log(a)
