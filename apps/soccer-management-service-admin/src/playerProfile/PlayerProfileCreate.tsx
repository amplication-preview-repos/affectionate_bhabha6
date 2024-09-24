import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";

export const PlayerProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="position" source="position" />
        <SelectArrayInput
          label="skills"
          source="skills"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
