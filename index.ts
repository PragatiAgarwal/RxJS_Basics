/* document.addEventListener('click', () => {
console.log("Clicked")})
*/
//import { Observable } from 'rxjs'

/* import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

fromEvent(document, "click")
  .pipe(scan(count => count + 1, 0)) //keeps the data integrity as nobody can modify it except subscribe!!
  .subscribe(count => console.log(` Clicked at: ${count}`)); */

  import { Observable } from 'rxjs'

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout( () => {
        subscriber.next(4);
        subscriber.complete();  //like return statement subscriber ends observing 
    }, 2000 )
  });

console.log("I am about to Subscribe");

observable.subscribe({
  next(x) {
    console.log("We got " + x);
  },
  error(err) {
    console.log("Error is : " + err);
  },
  complete() {
    console.log("COMPLETED");
  }
});
console.log("All done");
