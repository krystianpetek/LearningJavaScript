import axios from "axios";

const form = <HTMLFormElement>document.querySelector("form");
const addressInput = <HTMLInputElement>document.querySelector("#address");
const GOOGLE_API_KEY = "AIzaSyCFz_3bx1-2Xe-PdTZ8aStqwflq_uIbTtA";

declare var google: any;

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: "OK" | "REQUEST_DENIED" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        }
      );
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
  //
}

form.addEventListener("submit", searchAddressHandler);
