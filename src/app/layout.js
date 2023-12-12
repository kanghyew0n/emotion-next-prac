"use client";
import "./globals.css";
import styled from "@emotion/styled";

export default function RootLayout({ children }) {
  return (
    <html>
      <Container>{children}</Container>
    </html>
  );
}

const Container = styled.body`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;
