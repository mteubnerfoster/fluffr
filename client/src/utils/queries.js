import { gql } from '@apollo/client';

export const FIND_PET = gql`
query pet($petId: Int!){
    pet(petId:$petId){
  name
    }
  }
`;