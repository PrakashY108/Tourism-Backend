export const CalculateDistance = async (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.params;

  if (!lat1 || !lon1 || !lat2 || !lon2) {
    return res
      .status(400)
      .send("Please provide latitudes and longitudes for both locations.");
  }

  // Convert latitude and longitude from degrees to radians
  const toRadians = (degree) => degree * (Math.PI / 180);

  const lat1Rad = toRadians(parseFloat(lat1));
  const lon1Rad = toRadians(parseFloat(lon1));
  const lat2Rad = toRadians(parseFloat(lat2));
  const lon2Rad = toRadians(parseFloat(lon2));

  // Haversine formula
  const R = 6371; // Radius of the Earth in km
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  const feasibility =
    distance.toFixed(2) > 200
      ? "Feasible"
      : "Not Feasible to travel in Single Day";
  // res
  //   .status(200)
  //   .send(
  //     `The distance between the two points is ${distance.toFixed(
  //       2
  //     )} km which is ${feasibility}`
  //   );

  if (feasibility === "Feasible") {
    return res.status(200).json({
      rides: [
        {
          vehicleName: "Toyota Prius",
          model: "2023",
          price: 2000,
          ac: true,
          priceDetails: {
            basePrice: 150,
            distanceCharge: 40,
            surgePrice: 10,
          },
          details: "A reliable eco-friendly sedan with AC.",
        },
        {
          vehicleName: "Honda Civic",
          model: "2022",
          price: 1650,
          ac: true,
          priceDetails: {
            basePrice: 180,
            distanceCharge: 50,
            surgePrice: 20,
          },
          details: "A comfortable sedan with AC, perfect for city commutes.",
        },
        {
          vehicleName: "Maruti Swift",
          model: "2020",
          price: 1000,
          ac: false,
          priceDetails: {
            basePrice: 130,
            distanceCharge: 40,
            surgePrice: 10,
          },
          details: "A compact and fuel-efficient car with AC.",
        },
      ],
      message: `Please Select your vehicle to proceed as the distance between the two points is ${distance.toFixed(
        2
      )} km which is ${feasibility}`,
      status: "true",
    });
  } else {
    return res.status(200).json({
      message: `We are extremely Sorry !! No Rides Possible as the distance between the two points is ${distance.toFixed(
        2
      )} km which is ${feasibility}`,
      status: "true",
    });
  }
};

export const getResponseTest = async (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ahmedabad Tourism</title>
        <style>
          body {
            background-color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
          }
          
        h1 {
font-size: 65px;
color: #333;
line-height: 1;}
           div {
          background-color: #ccd5e3;
          height: 90%;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 10px;
        }
        </style>
      </head>
      <body>
      <div>
      <h1>This is Test Page of Ahemdabad Tourism !!</h1></br>
      </div>
        
      </body>
    </html>
  `);
};
