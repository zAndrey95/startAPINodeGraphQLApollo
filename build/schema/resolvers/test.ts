import db from '../../db';

const resolvers = {
  Query: {
    test: async (parent: any, args: any, ctx: any) => {
      const test = await db.Test.findByPk(args.id);
      return test
    },
  },
  Mutation: {
    createTest: async (parent: any, args: any, ctx: any) => {
        return 'createTest';
      }
    }
};

export default resolvers;