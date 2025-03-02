import Schema from "../Schema.js";
import File, { FileSchemaNodeJson } from "./File.js";
import { EnumSchemaNodeJson } from "./Enum.js";
import { PrimitiveSchemaNodeJson } from "./Primitive.js";
import { ObjectSchemaNodeJson } from "./Object.js";

const BASE_OBJECT_SCHEMA_NODE_FIXTURE: PrimitiveSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/primitives/objects/BaseObject.schema.json",
  title: "Object - BaseObject",
  description: "Abstract object to be extended by all other objects",
  type: "object",
  properties: {
    id: {
      description: "Identifier for the object",
      type: "string",
    },
    comments: {
      description:
        "Unstructured text comments related to and stored for the object",
      type: "array",
      items: {
        type: "string",
      },
    },
    object_type: {
      description: "Object type field",
      $ref: "https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json",
    },
  },
  required: ["id", "object_type"],
};

const OBJECT_SCHEMA_NODE_FIXTURE: ObjectSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/objects/Valuation",
  title: "Object - Valuation",
  description: "Object describing a valuation used in the cap table",
  type: "object",
  allOf: [
    {
      $ref: "https://opencaptablecoalition.com/schema/primitives/objects/BaseObject.schema.json",
    },
  ],
  properties: {
    object_type: {
      const: "VALUATION",
    },
    refProperty1: {
      $ref: "https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json",
    },
  },
  additionalProperties: false,
  required: ["refProperty1"],
};

const FILE_FIXTURE: FileSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/files/TestFile.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [
    {
      $ref: "https://opencaptablecoalition.com/schema/primitives/files/BaseFile.schema.json",
    },
  ],
  properties: {
    file_type: { const: "OCF_TEST_FILE" },
    items: {
      type: "array",
      description: "Example ref array property",
      items: {
        $ref: "https://opencaptablecoalition.com/schema/objects/Valuation",
      },
    },
  },
  required: ["test_property1"],
};

const ENUM_FILE_TYPE_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/enums/FileType.schema.json",
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["VALUATION"],
};

const BASE_FILE_SCHEMA_NODE_FIXTURE: PrimitiveSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/primitives/files/BaseFile.schema.json",
  title: "Object - BaseFile",
  description: "Abstract file to be extended by all other files",
  type: "object",
  properties: {},
  required: [],
};

const ENUM_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying an Enum schema from OCF",
  type: "string",
  enum: ["test_enum1"],
};

describe("File", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([
        BASE_OBJECT_SCHEMA_NODE_FIXTURE,
        OBJECT_SCHEMA_NODE_FIXTURE,
        ENUM_FILE_TYPE_SCHEMA_NODE_FIXTURE,
        ENUM_SCHEMA_NODE_FIXTURE,
        BASE_FILE_SCHEMA_NODE_FIXTURE,
        FILE_FIXTURE,
      ]);
      const actual = new File(schema, FILE_FIXTURE).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](/README.md)

---

### Test Title

\`https://opencaptablecoalition.com/schema/files/TestFile.schema.json\`

**Description:** _This is a test fixture exemplifying a File schema from OCF_

**Data Type:** \`OCF_TEST_FILE\`

**Composed From:**

- [schema/primitives/files/BaseFile](/docs/schema/primitives/files/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                   | Description                | Required |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- | -------- |
| file_type | **Constant:** \`OCF_TEST_FILE\`</br>_Defined in [schema/enums/FileType](/docs/schema/enums/FileType.md)_ | Object type field          | -        |
| items     | [ [schema/objects/Valuation](/docs/schema/objects/Valuation.md) ]                                      | Example ref array property | -        |

**Source Code:** [schema/files/TestFile](/schema/files/TestFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
