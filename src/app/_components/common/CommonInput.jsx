"use client";
import styled from "@emotion/styled";

const CommonInput = ({ label }) => {
  return (
    <InputContainer>
      <Input />
      <Label>{label}</Label>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 10px 10px 10px 80px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export default CommonInput;
