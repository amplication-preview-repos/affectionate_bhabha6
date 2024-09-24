import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <DateTimeInput label="matchDate" source="matchDate" />
      </SimpleForm>
    </Create>
  );
};
