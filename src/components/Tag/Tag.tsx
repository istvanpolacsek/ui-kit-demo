import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface TagProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "removable" | "label" | "scheme" | "variant"
> {
  removable?: boolean;
  label?: string;
  scheme?: "Brand" | "Neutral" | "Positive" | "Danger" | "Warning";
  variant?: "Primary" | "Secondary";
}

const StyledRoot = styled.span<{
  $scheme: "Brand" | "Neutral" | "Positive" | "Danger" | "Warning";
  $variant: "Primary" | "Secondary";
}>(
  ({ theme, $scheme, $variant }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    ${(() => {
      switch (JSON.stringify([$scheme, $variant])) {
        case '["Brand","Primary"]':
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case '["Brand","Secondary"]':
          return css`
            background-color: ${theme["Background"]["Brand"]["Tertiary"]};
          `;
        case '["Danger","Primary"]':
          return css`
            background-color: ${theme["Background"]["Danger"]["Default"]};
          `;
        case '["Danger","Secondary"]':
          return css`
            background-color: ${theme["Background"]["Danger"]["Secondary"]};
          `;
        case '["Positive","Primary"]':
          return css`
            background-color: ${theme["Background"]["Positive"]["Default"]};
          `;
        case '["Positive","Secondary"]':
          return css`
            background-color: ${theme["Background"]["Positive"]["Secondary"]};
          `;
        case '["Warning","Primary"]':
          return css`
            background-color: ${theme["Background"]["Warning"]["Default"]};
          `;
        case '["Warning","Secondary"]':
          return css`
            background-color: ${theme["Background"]["Warning"]["Secondary"]};
          `;
        case '["Neutral","Primary"]':
          return css`
            background-color: ${theme["Background"]["Default"]["Tertiary"]};
          `;
        case '["Neutral","Secondary"]':
          return css`
            background-color: ${theme["Background"]["Default"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$scheme, $variant])) {
        case '["Brand","Primary"]':
          return css`
            color: ${theme["Icon"]["Brand"]["On Brand"]};
          `;
        case '["Brand","Secondary"]':
          return css`
            color: ${theme["Icon"]["Brand"]["On Brand Tertiary"]};
          `;
        case '["Danger","Primary"]':
          return css`
            color: ${theme["Icon"]["Danger"]["On Danger"]};
          `;
        case '["Danger","Secondary"]':
          return css`
            color: ${theme["Icon"]["Danger"]["On Danger Secondary"]};
          `;
        case '["Positive","Primary"]':
          return css`
            color: ${theme["Icon"]["Positive"]["On Positive"]};
          `;
        case '["Positive","Secondary"]':
          return css`
            color: ${theme["Icon"]["Positive"]["On Positive Secondary"]};
          `;
        case '["Warning","Primary"]':
          return css`
            color: ${theme["Icon"]["Warning"]["On Warning"]};
          `;
        case '["Warning","Secondary"]':
          return css`
            color: ${theme["Icon"]["Warning"]["On Warning Secondary"]};
          `;
        case '["Neutral","Primary"]':
          return css`
            color: ${theme["Icon"]["Default"]["Default"]};
          `;
        case '["Neutral","Secondary"]':
          return css`
            color: ${theme["Icon"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch (JSON.stringify([$scheme, $variant])) {
          case '["Brand","Primary"]':
            return css`
              background-color: ${theme["Background"]["Brand"]["Hover"]};
            `;
          case '["Brand","Secondary"]':
            return css`
              background-color: ${theme["Background"]["Brand"]["Tertiary Hover"]};
            `;
          case '["Danger","Primary"]':
            return css`
              background-color: ${theme["Background"]["Danger"]["Hover"]};
            `;
          case '["Danger","Secondary"]':
            return css`
              background-color: ${theme["Background"]["Danger"]["Secondary Hover"]};
            `;
          case '["Positive","Primary"]':
            return css`
              background-color: ${theme["Background"]["Positive"]["Hover"]};
            `;
          case '["Positive","Secondary"]':
            return css`
              background-color: ${theme["Background"]["Positive"]["Secondary Hover"]};
            `;
          case '["Warning","Primary"]':
            return css`
              background-color: ${theme["Background"]["Warning"]["Hover"]};
            `;
          case '["Warning","Secondary"]':
            return css`
              background-color: ${theme["Background"]["Warning"]["Secondary Hover"]};
            `;
          case '["Neutral","Primary"]':
            return css`
              background-color: ${theme["Background"]["Default"]["Tertiary Hover"]};
            `;
          case '["Neutral","Secondary"]':
            return css`
              background-color: ${theme["Background"]["Default"]["Secondary Hover"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledTag = styled.span<{
  $scheme: "Brand" | "Neutral" | "Positive" | "Danger" | "Warning";
  $variant: "Primary" | "Secondary";
}>(
  ({ theme, $scheme, $variant }) => css`
    ${(() => {
      switch (JSON.stringify([$scheme, $variant])) {
        case '["Brand","Primary"]':
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case '["Brand","Secondary"]':
          return css`
            color: ${theme["Text"]["Brand"]["On Brand Tertiary"]};
          `;
        case '["Danger","Primary"]':
          return css`
            color: ${theme["Text"]["Danger"]["On Danger"]};
          `;
        case '["Danger","Secondary"]':
          return css`
            color: ${theme["Text"]["Danger"]["On Danger Secondary"]};
          `;
        case '["Positive","Primary"]':
          return css`
            color: ${theme["Text"]["Positive"]["On Positive"]};
          `;
        case '["Positive","Secondary"]':
          return css`
            color: ${theme["Text"]["Positive"]["On Positive Secondary"]};
          `;
        case '["Warning","Primary"]':
          return css`
            color: ${theme["Text"]["Warning"]["On Warning"]};
          `;
        case '["Warning","Secondary"]':
          return css`
            color: ${theme["Text"]["Warning"]["On Warning Secondary"]};
          `;
        case '["Neutral","Primary"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Neutral","Secondary"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** A compact label component used to categorize, filter, or annotate content. Supports multiple color schemes and variants, and can optionally display a remove/dismiss action. */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
  {
    removable = true,
    label = "Tag",
    scheme = "Brand",
    variant = "Primary",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="status"
      aria-label="Tag"
      {...rest}
      ref={ref}
      $scheme={scheme}
      $variant={variant}
    >
      <StyledTag $scheme={scheme} $variant={variant}>
        {label}
      </StyledTag>
      {removable && <Icon name={"X"} size={16} />}
    </StyledRoot>
  );
});
