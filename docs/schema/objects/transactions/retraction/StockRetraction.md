:house: [Documentation Home](/README.md)

---

### Object - Stock Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/StockRetraction.schema.json`

**Description:** _Object describing a retraction of a stock security_

**Data Type:** `OCF Object - TX_STOCK_RETRACTION`

**Composed From:**

- [schema/primitives/objects/BaseObject](/docs/schema/primitives/objects/BaseObject.md)
- [schema/primitives/objects/transactions/BaseTransaction](/docs/schema/primitives/objects/transactions/BaseTransaction.md)
- [schema/primitives/objects/transactions/BaseSecurityTransaction](/docs/schema/primitives/objects/transactions/BaseSecurityTransaction.md)
- [schema/primitives/objects/transactions/retraction/BaseRetraction](/docs/schema/primitives/objects/transactions/retraction/BaseRetraction.md)

**Properties:**

| Property    | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_STOCK_RETRACTION`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| reason_text | `STRING`                                                                                                         | Reason for the retraction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/StockRetraction](/schema/objects/transactions/retraction/StockRetraction.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_RETRACTION",
    "id": "test-stock-retraction-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Retract the stocks"
  },
  {
    "object_type": "TX_STOCK_RETRACTION",
    "id": "test-stock-retraction-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Retract the stocks",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
