const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Suite test - App.js (test all application)", () => {
  it("should pass middleware test and fail", (done) => {
    chai
      .request(app)
      .post("/")
      .type("application/json")
      .send({ name: "Efe", id: 20 })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("should pass middleware test and be succesful", (done) => {
    chai
      .request(app)
      .post("/")
      .type("application/json")
      .send({ name: "Efe", id: 1 })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
