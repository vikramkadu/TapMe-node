import { supabase } from './superbaseClient';
import { User } from './types';

interface GetUserArgs {
  id: string;
}

interface UpdateUserArgs {
  id: string;
  coins: number;
}

const resolvers = {
  Query: {
    getUser: async (_: any, { id }: GetUserArgs): Promise<User | null> => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching user:', error);
          throw new Error('Error fetching user');
        }

        return data;
      } catch (err) {
        console.error('Unexpected error:', err);
        throw new Error('Unexpected error');
      }
    },
  },
  Mutation: {
    updateUser: async (_: any, { id, coins }: UpdateUserArgs): Promise<User | null> => {
      try {
        const { data, error } = await supabase
          .from('users')
          .upsert({ id, coins })
          .single();

        if (error) {
          console.error('Error updating user:', error);
          throw new Error('Error updating user');
        }

        return data;
      } catch (err) {
        console.error('Unexpected error:', err);
        throw new Error('Unexpected error');
      }
    },
  },
};

export default resolvers;
