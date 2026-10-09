import React from "react";
import styled, { css } from "styled-components";

export interface TagProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "label" | "type" | "status"
> {
  label: string;
  type: "Bold" | "Light";
  status: "Error" | "Success" | "Warning" | "Neutral";
}

const StyledRoot = styled.span<{
  $type: "Bold" | "Light";
  $status: "Error" | "Success" | "Warning" | "Neutral";
}>(
  ({ theme, $type, $status }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 27px;
    ${(() => {
      switch (JSON.stringify([$type, $status])) {
        case '["Bold","Error"]':
          return css`
            background-color: ${theme["Semantic"]["Error Scale"]["50"]};
          `;
        case '["Bold","Success"]':
          return css`
            background-color: ${theme["Background"]["Brand"]["Status"]["Success"]};
          `;
        case '["Bold","Warning"]':
          return css`
            background-color: ${theme["Semantic"]["Warning Scale"]["50"]};
          `;
        case '["Bold","Neutral"]':
          return css`
            background-color: ${theme["Neutral"]["White"]};
          `;
        case '["Light","Error"]':
          return css`
            background-color: ${theme["Semantic"]["Error Scale"]["10"]};
          `;
        case '["Light","Success"]':
          return css`
            background-color: ${theme["Semantic"]["Success Scale"]["10"]};
          `;
        case '["Light","Warning"]':
          return css`
            background-color: ${theme["Semantic"]["Warning Scale"]["20"]};
          `;
        case '["Light","Neutral"]':
          return css`
            background-color: ${theme["Brand"]["Grey"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $status])) {
        case '["Bold","Error"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Success"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Warning"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Neutral"]':
          return css`
            color: ${theme["Neutral"]["Grey"]};
          `;
        case '["Light","Error"]':
          return css`
            color: ${theme["Semantic"]["Error Scale"]["60"]};
          `;
        case '["Light","Success"]':
          return css`
            color: ${theme["Semantic"]["Success Scale"]["70"]};
          `;
        case '["Light","Warning"]':
          return css`
            color: ${theme["Semantic"]["Warning Scale"]["70"]};
          `;
        case '["Light","Neutral"]':
          return css`
            color: ${theme["Semantic"]["Warning Scale"]["70"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{
  $type: "Bold" | "Light";
  $status: "Error" | "Success" | "Warning" | "Neutral";
}>(
  ({ theme, $type, $status }) => css`
    ${(() => {
      switch (JSON.stringify([$type, $status])) {
        case '["Bold","Error"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Success"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Warning"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Bold","Neutral"]':
          return css`
            color: ${theme["Neutral"]["Grey"]};
          `;
        case '["Light","Error"]':
          return css`
            color: ${theme["Semantic"]["Error Scale"]["60"]};
          `;
        case '["Light","Success"]':
          return css`
            color: ${theme["Semantic"]["Success Scale"]["70"]};
          `;
        case '["Light","Warning"]':
          return css`
            color: ${theme["Semantic"]["Warning Scale"]["70"]};
          `;
        case '["Light","Neutral"]':
          return css`
            color: ${theme["Semantic"]["Warning Scale"]["70"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Bold":
          return css`
            font-family: "Inter Tight";
            font-size: 12px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Light":
          return css`
            font-family: "Inter Tight";
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A Tag component used to display a status label with visual variants (Bold/Light) and semantic status types (Error, Success, Warning, Neutral). Typically used inline to indicate the state or category of an item. */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { label, type, status, ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="status"
      aria-label="Label"
      {...rest}
      ref={ref}
      $type={type}
      $status={status}
    >
      <StyledLabel $type={type} $status={status}>
        {label}
      </StyledLabel>
    </StyledRoot>
  );
});
