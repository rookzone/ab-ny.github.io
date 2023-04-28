# Summary Builder

This is a utility to create summary sections for Granicus forms for the NYC Granicus forms implementation.

This implements the Gov UK design service check answers pattern (https://design-system.service.gov.uk/patterns/check-answers/)

Our CSS hides the Granicus tabs, the summary page attaches an event to the "change" button that temporarily shows these tabs and then clicks on them, essentially allowing the user to jump back without the use of navigation tabs.

This allows us to implemement the one question per page pattern in Granicus without the user being inundated by tabs.

It relies on classes from govuk-frontend. https://design-system.service.gov.uk/styles/