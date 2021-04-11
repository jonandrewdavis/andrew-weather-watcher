# ADRs (Architectual Decision Records)

Lightweight documentation of decisions

- Use CRA
- Use Chakra-Ui
- Use `fetch`
-

[ADR Template](https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_by_michael_nygard.md)

Status

What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?
Context

What is the issue that we're seeing that is motivating this decision or change?

We want to have a robust design library to pull components from in order to save time.

What is the change that we're proposing and/or doing?

We want to use a component library Chakra-ui

What becomes easier or more difficult to do because of this change?

It becomes more difficult to demonstrate deep knowledge of CSS if we're not crafting "bespoke" components.
We also don't get to choose our CSS-in-JS library
