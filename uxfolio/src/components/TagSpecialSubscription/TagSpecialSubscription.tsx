import React from "react";
import styled, { css } from "styled-components";

export interface TagSpecialSubscriptionProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "property1" | "property2"
> {
  property1?: "Special";
  property2?:
    | "Canceled"
    | "Edu"
    | "Monthly"
    | "Past due"
    | "Set to cancel"
    | "Trial"
    | "Trial ended"
    | "VIP"
    | "Yearly";
}

const StyledRoot = styled.span<{
  $property2:
    | "Canceled"
    | "Edu"
    | "Monthly"
    | "Past due"
    | "Set to cancel"
    | "Trial"
    | "Trial ended"
    | "VIP"
    | "Yearly";
}>(
  ({ $property2 }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 10px;
    padding-bottom: 6px;
    padding-left: 10px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 4px;
    ${(() => {
      switch ($property2) {
        case "Monthly":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Trial":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Canceled":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "VIP":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Edu":
          return css`
            background-color: ${"#2400ed"};
          `;
        case "Yearly":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Set to cancel":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Past due":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Trial ended":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($property2) {
        case "Monthly":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Trial":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Canceled":
          return css`
            color: ${"#fefefe"};
          `;
        case "VIP":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Edu":
          return css`
            color: ${"#fefefe"};
          `;
        case "Yearly":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Set to cancel":
          return css`
            color: ${"#fefefe"};
          `;
        case "Past due":
          return css`
            color: ${"#fefefe"};
          `;
        case "Trial ended":
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{
  $property2:
    | "Canceled"
    | "Edu"
    | "Monthly"
    | "Past due"
    | "Set to cancel"
    | "Trial"
    | "Trial ended"
    | "VIP"
    | "Yearly";
}>(
  ({ $property2 }) => css`
    ${(() => {
      switch ($property2) {
        case "Monthly":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Trial":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Canceled":
          return css`
            color: ${"#fefefe"};
          `;
        case "VIP":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Edu":
          return css`
            color: ${"#fefefe"};
          `;
        case "Yearly":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Set to cancel":
          return css`
            color: ${"#fefefe"};
          `;
        case "Past due":
          return css`
            color: ${"#fefefe"};
          `;
        case "Trial ended":
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A subscription status tag component that displays various subscription states (e.g., Trial, Monthly, Yearly, VIP, Canceled) as a compact label badge. Used to visually indicate the current subscription type or status of a user. */
export const TagSpecialSubscription = React.forwardRef<
  HTMLSpanElement,
  TagSpecialSubscriptionProps
>(function TagSpecialSubscription(
  { property1 = "Special", property2 = "Trial", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="status"
      aria-label="Subscription status: Monthly"
      {...rest}
      ref={ref}
      $property2={property2}
    >
      <StyledLabel $property2={property2}>
        {
          (
            {
              '["Monthly"]': "Monthly",
              '["Trial"]': "Trial",
              '["Canceled"]': "Canceled",
              '["VIP"]': "VIP",
              '["Edu"]': "EDU",
              '["Yearly"]': "Yearly",
              '["Set to cancel"]': "Cancels X date",
              '["Past due"]': "Past due",
              '["Trial ended"]': "Trial ended",
            } as Record<string, string>
          )[JSON.stringify([property2])]
        }
      </StyledLabel>
    </StyledRoot>
  );
});
