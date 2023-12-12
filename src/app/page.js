"use client";

import styled from "@emotion/styled";
import CommonInput from "./_components/common/CommonInput";

export default function Home() {
  return (
    <main>
      <Title>안녕하세요</Title>
      <SubTitle>오늘 일 한 시간</SubTitle>
      <FlexRow>
        <CommonInput label={'시작시간'}/>
        <CommonInput label={'종료시간'}/>
      </FlexRow>
    </main>
  );
}

const Title = styled.h1`
  font-size: 96px;
  font-weight: 900;
`;

const SubTitle = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
