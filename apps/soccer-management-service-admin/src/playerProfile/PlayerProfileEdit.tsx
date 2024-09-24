import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";

export const PlayerProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
