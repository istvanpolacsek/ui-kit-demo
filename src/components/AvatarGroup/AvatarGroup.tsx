import React from "react";
import styled, { css } from "styled-components";

export interface AvatarGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showOverflow" | "number" | "spacing" | "avatars" | "avatars2"
> {
  showOverflow?: boolean;
  number?: string;
  spacing?: "Overlap" | "Spaced";
  avatars?: React.ReactNode;
  avatars2?: React.ReactNode;
}

const StyledRoot = styled.div<{ $spacing: "Overlap" | "Spaced" }>(
  ({ theme, $spacing }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($spacing) {
        case "Overlap":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Spaced":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledAvatars = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    & > * + * {
      margin-left: -8px;
    }
    border-radius: 0px;
  `,
);

const StyledOverflow = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-right: 4px;
    padding-bottom: 5px;
    padding-left: 4px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 8px;
  `,
);

const StyledInitials = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledAvatars2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** Displays a group of avatar components arranged either overlapping or spaced, with an optional overflow indicator showing the count of additional avatars beyond those displayed. */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
      showOverflow = true,
      number = "+1",
      spacing = "Spaced",
      avatars,
      avatars2,
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="group"
        aria-label="Avatar group"
        {...rest}
        ref={ref}
        $spacing={spacing}
      >
        {spacing === "Overlap" && <StyledAvatars>{avatars}</StyledAvatars>}
        {showOverflow && (
          <StyledOverflow>
            <StyledInitials>{number}</StyledInitials>
          </StyledOverflow>
        )}
        {spacing === "Spaced" && <StyledAvatars2>{avatars2}</StyledAvatars2>}
      </StyledRoot>
    );
  },
);
