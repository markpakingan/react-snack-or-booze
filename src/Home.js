import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./home.css"

function Home({snackCount, drinkCount}) {
  return (
    <section className="col-md-8">
      <Card className="card-box">
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>

            <h4>Snacks: {snackCount}</h4>

            <h4>Drinks: {drinkCount}</h4>

          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
