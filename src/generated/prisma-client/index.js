"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Airshow",
    embedded: false
  },
  {
    name: "Zone",
    embedded: false
  },
  {
    name: "ParkingLot",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  },
  {
    name: "Tracking",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/edwin-agbenyega/kirtland-airshows/dev`
});
exports.prisma = new exports.Prisma();
