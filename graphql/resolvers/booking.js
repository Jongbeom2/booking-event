const Event = require('../../models/event');
const User = require('../../models/user');
const Booking = require('../../models/booking');

const bookingResolvers = {
  Query: {
    getBookings: async (_, arg,ctx) => {
      // Check isAuth
      if(!ctx.isAuth){
        throw new Error('Unauthenticatd!');
      }
      try {
        // Get bookings with userId
        const bookings = await Booking.find({ user: ctx.userId });
        // Return bookings
        return bookings.map(booking => ({ ...booking._doc, _id: booking.id }));
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  Booking: {
    _id(_, args) {
      return _._id;
    },
    async user(_, args) {
      try {
        // Get user with id
        const user = await User.findById(_.user);
        // Return user
        return { ...user._doc, _id: user.id };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async event(_, args) {
      try {
        // Get event with id
        const event = await Event.findById(_.event);
        // Return event
        return { ...event._doc, _id: event.id };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    createdAt(_, args) {
      return new Date(_.createdAt).toISOString();
    },
    updatedAt(_, args) {
      return new Date(_.updatedAt).toISOString();
    }
  },
  Mutation: {
    bookEvent: async (_, args,ctx) => {
      // Check isAuth
      if(!ctx.isAuth){
        throw new Error('Unauthenticatd!');
      }
      try {
        // Save Booking
        const booking = new Booking({
          user: ctx.userId,
          event: args.eventId
        });
        const result = await booking.save();
        // Return created booking
        return { ...result._doc, password: null };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    cancelBooking: async (_, args,ctx) => {
      // Check is Auth
      if(!ctx.isAuth){
        throw new Error('Unauthenticatd!');
      }
      try {
        // Get Booking and event
        const booking = await Booking.findById(args.bookingId).populate('event');
        const event = {...booking._doc.event._doc,_id: booking._doc.event.id};
        // Delete Booking
        await Booking.deleteOne({_id:args.bookingId});
        // return Event
        return event;
      } catch (err) { 
        console.log(err);
        throw err;
      }
    }
  }
}
module.exports = bookingResolvers; 