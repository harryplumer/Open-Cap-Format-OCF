:house: [Documentation Home](/README.md)

---

### Object - Plan Security Cancellation Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json`

**Description:** _Object describing a cancellation of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_CANCELLATION`

**Composed From:**

- [schema/primitives/objects/BaseObject](/docs/schema/primitives/objects/BaseObject.md)
- [schema/primitives/objects/transactions/BaseTransaction](/docs/schema/primitives/objects/transactions/BaseTransaction.md)
- [schema/primitives/objects/transactions/BaseSecurityTransaction](/docs/schema/primitives/objects/transactions/BaseSecurityTransaction.md)
- [schema/primitives/objects/transactions/cancellation/BaseCancellation](/docs/schema/primitives/objects/transactions/cancellation/BaseCancellation.md)

**Properties:**

| Property            | Type                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                                   | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                                 | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_PLAN_SECURITY_CANCELLATION`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](/docs/schema/types/Date.md)                                                                            | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                                   | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                                   | Identifier for the security that holds the remainder balance (for partial cancellations)                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| reason_text         | `STRING`                                                                                                                   | Reason for the cancellation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| quantity            | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                      | Quantity of non-monetary security units cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/PlanSecurityCancellation](/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_CANCELLATION",
    "id": "test-plan-security-cancellation-minimal",
    "security_id": "test-security-id",
    "date": "2019-12-11",
    "reason_text": "need to cancel",
    "quantity": "100"
  },
  {
    "object_type": "TX_PLAN_SECURITY_CANCELLATION",
    "id": "test-plan-security-cancellation-all-fields",
    "security_id": "test-security-id",
    "date": "2019-12-11",
    "reason_text": "need to cancel",
    "quantity": "100",
    "balance_security_id": "test-balance-security-id",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
