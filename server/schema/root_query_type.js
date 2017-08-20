const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const BenefitType = require('./benefit_type');
const Benefit = mongoose.model('benefit');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    benefits: {
      type: new GraphQLList(BenefitType),
      resolve() {
        return Benefit.find({})
      }
    },
    benefit: {
      type: BenefitType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Benefit.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
