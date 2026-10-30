import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "../Avatar";

export interface AvatarGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "size"
> {
  size?: "Small" | "Large" | "Medium";
}

const StyledRoot = styled.ul<{ $size: "Small" | "Large" | "Medium" }>(
  ({ $size }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
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
              margin-left: -40px;
            }
          `;
        case "Medium":
          return css`
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
              margin-left: -20px;
            }
          `;
        case "Small":
          return css`
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
              margin-left: -16px;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAvatar = styled.li(() => css``);

const StyledAvatar2 = styled.li(() => css``);

const StyledAvatar3 = styled.li(() => css``);

const StyledAvatar4 = styled.li(() => css``);

/** Displays a group of Avatar components arranged together, typically used to represent a collection of users or participants. Supports multiple size variants. */
export const AvatarGroup = React.forwardRef<HTMLUListElement, AvatarGroupProps>(
  function AvatarGroup({ size = "Large", ...rest }, ref) {
    return (
      <StyledRoot
        role="group"
        aria-label="Avatar group"
        {...rest}
        ref={ref}
        $size={size}
      >
        <StyledAvatar>
          <Avatar size={"Large"} type={"Image"} />
        </StyledAvatar>
        <StyledAvatar2>
          <Avatar size={"Large"} type={"Image"} />
        </StyledAvatar2>
        <StyledAvatar3>
          <Avatar size={"Large"} type={"Image"} />
        </StyledAvatar3>
        <StyledAvatar4>
          <Avatar size={"Large"} type={"Image"} />
        </StyledAvatar4>
      </StyledRoot>
    );
  },
);
