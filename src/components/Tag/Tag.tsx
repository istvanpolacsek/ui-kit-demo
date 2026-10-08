import React from "react";
import styled, { css } from "styled-components";

export interface TagProps {
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

/** A compact status tag component that displays a short label with semantic color coding. Supports Bold and Light visual styles, and Error, Success, Warning, and Neutral status variants to communicate state or categorization. */
export function Tag({ label, type, status }: TagProps) {
  return (
    <StyledRoot role="status" aria-label="Label" $type={type} $status={status}>
      <StyledLabel $type={type} $status={status}>
        {label}
      </StyledLabel>
    </StyledRoot>
  );
}
