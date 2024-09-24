import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerProfileTitle } from "../playerProfile/PlayerProfileTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
