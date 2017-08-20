const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;
const Benefit = mongoose.model('benefit');

const BenefitType = new GraphQLObjectType({
  name:  'BenefitType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    cost: { type: GraphQLInt }
  })
});

module.exports = BenefitType;
