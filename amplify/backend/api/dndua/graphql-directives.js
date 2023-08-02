import gql from 'graphql-tag';

const clientSchemaExtensions = gql`
  directive @model on OBJECT
  directive @auth on OBJECT
  directive @hasOne on FIELD_DEFINITION
  directive @hasMany on FIELD_DEFINITION
  directive @manyToMany on FIELD_DEFINITION
  directive @belongsTo on FIELD_DEFINITION
  scalar AWSDateTime
`;