const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Query {
    getEvent(_id: String!): Event
    getEvents: [Event!]
    getBookings: [Booking!]
    getUser(email:String!): User
    login(email:String!, password:String!): AuthData!
  }
  type AuthData{
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  type Booking{
    _id: ID
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
  }
  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
  }
  input EventInput{
    title: String!
    description: String!
    price: Float!
    date: String!
  }
  type User{
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }
  input UserInput{
    email: String!
    password: String!
  }
  type Mutation{
    createEvent(eventInput: EventInput): Event!
    createUser(userInput: UserInput): User!
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }
`;

module.exports = typeDefs;