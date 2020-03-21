import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/app/services/booking.service";
import { IBooking } from "src/app/interfaces/i-booking";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-booking",
  templateUrl: "./list-booking.component.html",
  styleUrls: ["./list-booking.component.css"]
})
export class ListBookingComponent implements OnInit {
  public listBookings: IBooking[];
  public loadBooking: boolean;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private router: Router
  ) {
    this.listBookings = [];
    this.loadBooking = true;
  }

  ngOnInit() {
    if (this.authService.isAuthenticate()) {
      this.bookingService.getBookings().subscribe(
        response => {
          this.listBookings = response;
          this.loadBooking = false;
        },
        error => {
          console.log(error);
          this.loadBooking = false;
        }
      );
    } else {
      this.router.navigate(["/add-booking"]);
    }
  }
}
