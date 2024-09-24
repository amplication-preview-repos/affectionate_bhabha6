import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerProfileTitle } from "../playerProfile/PlayerProfileTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="captain" source="captain" />
        <ReferenceArrayInput source="playerProfiles" reference="PlayerProfile">
          <SelectArrayInput
            optionText={PlayerProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="teamName" source="teamName" />
      </SimpleForm>
    </Edit>
  );
};
