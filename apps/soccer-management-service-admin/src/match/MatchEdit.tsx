import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <DateTimeInput label="matchDate" source="matchDate" />
      </SimpleForm>
    </Edit>
  );
};
