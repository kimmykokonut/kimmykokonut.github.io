import styled from "styled-components";
import { ReactNode } from "react";

interface CardProps {
  background?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  children: ReactNode;
}

const StyledCard = styled.div<CardProps>`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#000"};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "400px"};
  min-width: ${(props) => props.minWidth || "300px"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "1rem"};
  margin: ${(props) => props.margin || "1rem"};
  border: ${(props) => props.border || "1px solid #ddd"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  box-shadow: ${(props) => props.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  max-height: 95vh;
  overflow-y: auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const Card = ({ 
  children,
  background,
  color,
  width,
  maxWidth,
  minWidth,
  height,
  padding,
  margin,
  border,
  borderRadius,
  boxShadow,
}: CardProps) => (
  <StyledCard
    background={background}
    color={color}
    width={width}
    maxWidth={maxWidth}
    minWidth={minWidth}
    height={height}
    padding={padding}
    margin={margin}
    border={border}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
  >
    {children}
    </StyledCard>
  );

export default Card;