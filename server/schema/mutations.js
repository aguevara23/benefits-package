const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const Benefit = mongoose.model('benefit');
const BenefitType = require('./benefit_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBenefit: {
      type: BenefitType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        cost: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parentValue, { name, cost }) {
        return (new Benefit({ name, cost })).save()
      }

    }
  }
});

module.exports = mutation;
